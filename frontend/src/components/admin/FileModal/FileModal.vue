<template>
  <div class="file-modal-overlay" @click="handleOverlayClick">
    <div class="file-modal" @click.stop>
      <!-- Заголовок модального окна -->
      <div class="modal-header">
        <h2 class="modal-title">
          {{ isEditing ? 'Редактировать файл' : 'Добавить новый файл' }}
        </h2>
        <button class="close-button" @click="$emit('close')">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Форма -->
      <form class="modal-form" @submit.prevent="handleSubmit">
        <!-- Загрузка файла -->
        <div class="form-group">
          <label class="form-label">
            {{ isEditing ? 'Файл' : 'Выберите файл' }}
          </label>
          <div class="file-upload-area" :class="{ 'has-file': selectedFile }">
            <input
              ref="fileInput"
              type="file"
              class="file-input"
              accept=".pdf,.doc,.docx,.txt"
              @change="handleFileSelect"
              :disabled="isEditing"
            />

            <div v-if="!selectedFile && !isEditing" class="upload-placeholder">
              <svg
                class="upload-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <p class="upload-text">
                Нажмите для выбора файла или перетащите сюда
              </p>
              <p class="upload-hint">
                Поддерживаемые форматы: PDF, DOC, DOCX, TXT (до 50MB)
              </p>
            </div>

            <div v-else-if="selectedFile" class="file-info">
              <div class="file-icon">
                {{ getFileTypeIcon(selectedFile.name) }}
              </div>
              <div class="file-details">
                <p class="file-name">{{ selectedFile.name }}</p>
                <p class="file-size">{{ formatFileSize(selectedFile.size) }}</p>
              </div>
              <button
                type="button"
                class="remove-file-button"
                @click="removeFile"
                :title="`Удалить файл ${selectedFile?.name}`"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div v-if="fileError" class="form-error">{{ fileError }}</div>
        </div>

        <!-- Название файла -->
        <div class="form-group">
          <label class="form-label required">Название файла</label>
          <input
            v-model="formData.title"
            type="text"
            class="form-input"
            placeholder="Введите название документа"
            required
          />
          <div v-if="errors.title" class="form-error">{{ errors.title }}</div>
        </div>

        <!-- Авторы -->
        <div class="form-group">
          <label class="form-label required">Авторы</label>
          <input
            v-model="formData.authors"
            type="text"
            class="form-input"
            placeholder="Введите имена авторов"
            required
          />
          <div v-if="errors.authors" class="form-error">
            {{ errors.authors }}
          </div>
        </div>

        <!-- Категория -->
        <div class="form-group">
          <label class="form-label">Категория</label>
          <div class="category-selector">
            <select v-model="formData.category" class="form-select">
              <option value="">Выберите категорию</option>
              <option
                v-for="category in predefinedCategories"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
              <option value="custom">Другая категория</option>
            </select>

            <input
              v-if="formData.category === 'custom'"
              v-model="formData.customCategory"
              type="text"
              class="form-input custom-category-input"
              placeholder="Введите название категории"
            />
          </div>
          <div v-if="errors.category" class="form-error">
            {{ errors.category }}
          </div>
        </div>

        <!-- Описание -->
        <div class="form-group">
          <label class="form-label">Описание</label>
          <textarea
            v-model="formData.description"
            class="form-textarea"
            placeholder="Краткое описание документа (необязательно)"
            rows="3"
          ></textarea>
        </div>

        <!-- Кнопки действий -->
        <div class="modal-actions">
          <button type="button" class="cancel-button" @click="$emit('close')">
            Отмена
          </button>
          <button type="submit" class="save-button" :disabled="isSubmitting">
            <span v-if="isSubmitting" class="loading-spinner"></span>
            {{ isEditing ? 'Сохранить' : 'Добавить файл' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'

export default {
  name: 'FileModal',
  props: {
    file: {
      type: Object,
      default: null,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close', 'save'],
  setup(props, { emit }) {
    const fileInput = ref(null)

    // Состояние формы
    const formData = ref({
      title: '',
      authors: '',
      category: '',
      customCategory: '',
      description: '',
    })

    const selectedFile = ref(null)
    const isSubmitting = ref(false)
    const errors = ref({})
    const fileError = ref('')

    // Предопределенные категории
    const predefinedCategories = [
      'Исследования',
      'Клинические случаи',
      'Методические материалы',
      'Публикации',
      'Презентации',
      'Отчеты',
      'Протоколы',
      'Учебные материалы',
    ]

    // Вычисляемые свойства
    const finalCategory = computed(() => {
      if (formData.value.category === 'custom') {
        return formData.value.customCategory
      }
      return formData.value.category
    })

    // Методы
    const handleFileSelect = event => {
      const file = event.target.files[0]
      if (file) {
        // Проверка размера файла (50MB)
        if (file.size > 50 * 1024 * 1024) {
          fileError.value = 'Файл слишком большой. Максимальный размер: 50MB'
          return
        }

        // Проверка типа файла
        const allowedTypes = ['.pdf', '.doc', '.docx', '.txt']
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase()

        if (!allowedTypes.includes(fileExtension)) {
          fileError.value =
            'Неподдерживаемый тип файла. Разрешены: PDF, DOC, DOCX, TXT'
          return
        }

        selectedFile.value = file
        fileError.value = ''

        // Автозаполнение названия если пустое
        if (!formData.value.title || formData.value.title.trim() === '') {
          const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, '')
          formData.value.title = fileNameWithoutExtension
        }
      }
    }

    const removeFile = () => {
      // Сохраняем ссылку на файл перед удалением
      const wasFileSelected = !!selectedFile.value

      selectedFile.value = null
      if (fileInput.value) {
        fileInput.value.value = ''
      }

      // Очищаем ошибки файла
      fileError.value = ''

      // Сбрасываем название файла если оно было автозаполнено
      if (wasFileSelected && formData.value.title) {
        formData.value.title = ''
      }
    }

    const validateForm = () => {
      errors.value = {}

      // Проверка названия
      if (!formData.value.title || !formData.value.title.trim()) {
        errors.value.title = 'Название файла обязательно'
      }

      // Проверка авторов
      if (!formData.value.authors || !formData.value.authors.trim()) {
        errors.value.authors = 'Авторы обязательны'
      }

      // Проверка файла (только при добавлении)
      if (!props.isEditing && !selectedFile.value) {
        fileError.value = 'Выберите файл для загрузки'
        return false
      }

      // Проверка пользовательской категории
      if (
        formData.value.category === 'custom' &&
        (!formData.value.customCategory ||
          !formData.value.customCategory.trim())
      ) {
        errors.value.category = 'Введите название категории'
      }

      const hasErrors = Object.keys(errors.value).length > 0
      const hasFileError = !!fileError.value

      return !hasErrors && !hasFileError
    }

    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true

      try {
        const fileData = {
          ...formData.value,
          category: finalCategory.value,
          file: selectedFile.value,
        }

        // При редактировании добавляем fileName
        if (props.isEditing && props.file) {
          fileData.fileName = props.file.fileName
        }

        emit('save', fileData)
      } catch (error) {
      } finally {
        isSubmitting.value = false
      }
    }

    const handleOverlayClick = event => {
      if (event.target.classList.contains('file-modal-overlay')) {
        emit('close')
      }
    }

    const getFileTypeIcon = fileName => {
      const ext = fileName.split('.').pop()?.toLowerCase()
      switch (ext) {
        case 'pdf':
          return '📄'
        case 'doc':
        case 'docx':
          return '📝'
        case 'txt':
          return '📃'
        default:
          return '📁'
      }
    }

    const formatFileSize = size => {
      const units = ['B', 'KB', 'MB', 'GB']
      let value = size
      let unitIndex = 0

      while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024
        unitIndex++
      }

      return `${value.toFixed(1)} ${units[unitIndex]}`
    }

    // Инициализация формы при редактировании
    const initializeForm = () => {
      if (props.file && props.isEditing) {
        formData.value = {
          title: props.file.title || '',
          authors: props.file.authors || '',
          category: props.file.category || '',
          customCategory: '',
          description: props.file.description || '',
        }

        // Если категория не в списке предопределенных, устанавливаем как custom
        if (
          props.file.category &&
          !predefinedCategories.includes(props.file.category)
        ) {
          formData.value.category = 'custom'
          formData.value.customCategory = props.file.category
        }
      }
    }

    // Наблюдатели
    watch(() => props.file, initializeForm, { immediate: true })

    // Обработка drag & drop
    const handleDragOver = event => {
      event.preventDefault()
      event.currentTarget.classList.add('drag-over')
    }

    const handleDragLeave = event => {
      event.currentTarget.classList.remove('drag-over')
    }

    const handleDrop = event => {
      event.preventDefault()
      event.currentTarget.classList.remove('drag-over')

      const files = event.dataTransfer.files
      if (files.length > 0) {
        const file = files[0]
        if (fileInput.value) {
          fileInput.value.files = files
          handleFileSelect({ target: { files } })
        }
      }
    }

    onMounted(() => {
      const uploadArea = document.querySelector('.file-upload-area')
      if (uploadArea) {
        uploadArea.addEventListener('dragover', handleDragOver)
        uploadArea.addEventListener('dragleave', handleDragLeave)
        uploadArea.addEventListener('drop', handleDrop)
      }
    })

    return {
      fileInput,
      formData,
      selectedFile,
      isSubmitting,
      errors,
      fileError,
      predefinedCategories,
      finalCategory,
      handleFileSelect,
      removeFile,
      validateForm,
      handleSubmit,
      handleOverlayClick,
      getFileTypeIcon,
      formatFileSize,
    }
  },
}
</script>

<style lang="scss" scoped>
.file-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.file-modal {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;

  .modal-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0;
  }

  .close-button {
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(113, 128, 150, 0.1);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(113, 128, 150, 0.2);
    }

    svg {
      width: 20px;
      height: 20px;
      color: #4a5568;
    }
  }
}

.modal-form {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;

  &.required::after {
    content: ' *';
    color: #e53e3e;
  }
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.form-error {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

// Загрузка файла
.file-upload-area {
  border: 2px dashed #cbd5e0;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.02);
  }

  &.drag-over {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.05);
  }

  &.has-file {
    border-color: #48bb78;
    background: rgba(72, 187, 120, 0.02);
  }
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.upload-placeholder {
  .upload-icon {
    width: 48px;
    height: 48px;
    color: #a0aec0;
    margin: 0 auto 1rem;
  }

  .upload-text {
    font-size: 1.1rem;
    color: #4a5568;
    margin: 0 0 0.5rem 0;
  }

  .upload-hint {
    font-size: 0.9rem;
    color: #718096;
    margin: 0;
  }
}

.file-info {
  display: flex;
  align-items: center;
  gap: 1rem;

  .file-icon {
    font-size: 2rem;
  }

  .file-details {
    flex: 1;
    text-align: left;

    .file-name {
      font-weight: 600;
      color: #2d3748;
      margin: 0 0 0.25rem 0;
    }

    .file-size {
      font-size: 0.9rem;
      color: #718096;
      margin: 0;
    }
  }

  .remove-file-button {
    width: 32px;
    height: 32px;
    border: none;
    background: rgba(245, 101, 101, 0.1);
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    z-index: 10;

    &:hover {
      background: rgba(245, 101, 101, 0.2);
      z-index: 15;
    }

    svg {
      width: 16px;
      height: 16px;
      color: #e53e3e;
    }
  }
}

// Категория
.category-selector {
  display: flex;
  gap: 1rem;

  .form-select {
    flex: 1;
  }

  .custom-category-input {
    flex: 1;
  }
}

// Кнопки действий
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.cancel-button,
.save-button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-width: 120px;
}

.cancel-button {
  background: rgba(113, 128, 150, 0.1);
  color: #4a5568;

  &:hover {
    background: rgba(113, 128, 150, 0.2);
  }
}

.save-button {
  background: linear-gradient(135deg, #48bb78, #38a169);
  color: white;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(72, 187, 120, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// Адаптивность
@media (max-width: 640px) {
  .file-modal {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }

  .modal-header,
  .modal-form {
    padding: 1rem;
  }

  .modal-actions {
    flex-direction: column;

    .cancel-button,
    .save-button {
      width: 100%;
    }
  }

  .category-selector {
    flex-direction: column;
  }
}
</style>
