<template>
  <div class="admin-panel-page">
    <div class="container">
      <!-- Заголовок админ-панели -->
      <div class="admin-header">
        <div class="header-content">
          <h1 class="admin-title">Админ панель</h1>
          <p class="admin-subtitle">
            Управление приватной библиотекой кафедры неврологии
          </p>
        </div>
        <div class="header-actions">
          <button class="add-file-button" @click="openAddFileModal">
            <svg
              class="add-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            Добавить файл
          </button>
          <button class="back-button" @click="goBack">
            <svg
              class="back-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Назад к библиотеке
          </button>
          <button class="logout-button" @click="handleLogout">
            <svg
              class="logout-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16,17 21,12 16,7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Выйти
          </button>
        </div>
      </div>

      <!-- Статистика -->
      <div class="admin-stats">
        <div class="stat-card">
          <div class="stat-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ totalFiles }}</div>
            <div class="stat-label">Всего файлов</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ totalSize }}</div>
            <div class="stat-label">Общий размер</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
              />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ totalCategories }}</div>
            <div class="stat-label">Категорий</div>
          </div>
        </div>
      </div>

      <!-- Поиск и фильтры -->
      <div class="admin-controls">
        <div class="search-section">
          <div class="search-input-wrapper">
            <svg
              v-if="!isSearching"
              class="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <div v-else class="search-spinner"></div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Поиск по названию, авторам..."
              class="search-input"
              @input="handleSearch"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="clear-search-btn"
              title="Очистить поиск"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div class="filter-section">
          <select
            v-model="selectedCategory"
            class="category-filter"
            @change="handleFilter"
          >
            <option value="">Все категории</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>

          <select v-model="sortBy" class="sort-filter" @change="handleSort">
            <option value="uploadDate">По дате загрузки</option>
            <option value="title">По названию</option>
            <option value="authors">По авторам</option>
            <option value="fileSize">По размеру</option>
          </select>

          <button
            v-if="selectedCategory || sortBy !== 'uploadDate'"
            @click="clearFilters"
            class="clear-filters-btn"
            title="Сбросить фильтры"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Сбросить
          </button>
        </div>
      </div>

      <!-- Список файлов -->
      <div class="files-section">
        <!-- Счетчик результатов -->
        <div v-if="!isLoading && !error" class="results-counter">
          <span v-if="searchQuery || selectedCategory">
            Найдено {{ filteredFiles.length }} из {{ totalFiles }} файлов
          </span>
          <span v-else> Всего файлов: {{ totalFiles }} </span>
        </div>

        <div v-if="isLoading" class="loading-state">
          <div class="loading-spinner"></div>
          <p>Загрузка файлов...</p>
        </div>

        <div v-else-if="error" class="error-state">
          <div class="error-icon">⚠️</div>
          <p>{{ error }}</p>
          <button @click="loadFiles" class="retry-button">Повторить</button>
        </div>

        <div v-else-if="filteredFiles.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <p v-if="searchQuery || selectedCategory">
            По вашему запросу файлы не найдены
            <br />
            <small>Попробуйте изменить параметры поиска или фильтры</small>
          </p>
          <p v-else>Файлы не найдены</p>
        </div>

        <div v-else class="files-grid">
          <div
            v-for="file in paginatedFiles"
            :key="file.fileName"
            class="file-card"
          >
            <div class="file-header">
              <div class="file-type-icon">
                {{ getFileTypeIcon(file.fileName) }}
              </div>
              <div class="file-actions">
                <button
                  class="action-button download"
                  @click="downloadFile(file)"
                  title="Скачать"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
                <button
                  class="action-button edit"
                  @click="editFile(file)"
                  title="Редактировать"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    />
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    />
                  </svg>
                </button>
                <button
                  class="action-button delete"
                  @click="deleteFile(file)"
                  title="Удалить"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="3,6 5,6 21,6" />
                    <path
                      d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="file-content">
              <h3 class="file-title">{{ file.title }}</h3>
              <p class="file-authors">{{ file.authors }}</p>
              <p class="file-category">{{ file.category }}</p>
              <div class="file-meta">
                <span class="file-size">{{
                  formatFileSize(file.fileSize)
                }}</span>
                <span class="file-date">{{ formatDate(file.uploadDate) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Пагинация -->
        <div v-if="totalPages > 1" class="pagination">
          <button
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
            class="page-button prev"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div class="page-numbers">
            <button
              v-for="page in visiblePages"
              :key="page"
              :class="['page-button', { active: page === currentPage }]"
              @click="changePage(page)"
            >
              {{ page }}
            </button>
          </div>

          <button
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
            class="page-button next"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Модальное окно добавления/редактирования файла -->
    <FileModal
      v-if="showFileModal"
      :file="editingFile"
      :is-editing="isEditing"
      @close="closeFileModal"
      @save="handleFileSave"
    />
  </div>
</template>

<script>
import FileModal from '@/components/admin/FileModal/FileModal.vue'
import { ApiService } from '@/services/apiService'
import { computed, onMounted, ref, watch } from 'vue'

export default {
  name: 'AdminPanel',
  components: {
    FileModal,
  },
  setup() {
    const apiService = new ApiService()

    // Дополнительная проверка прав доступа
    const checkAccess = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
      const isAdmin = localStorage.getItem('isAdmin') === 'true'

      if (!isAuthenticated || !isAdmin) {
        // Если нет прав - перенаправляем на библиотеку
        window.location.href = '/library'
        return false
      }
      return true
    }

    // Состояние
    const files = ref([])
    const isLoading = ref(false)
    const error = ref('')
    const searchQuery = ref('')
    const selectedCategory = ref('')
    const sortBy = ref('uploadDate')
    const currentPage = ref(1)
    const itemsPerPage = ref(12)
    const totalPages = ref(0)
    const totalItems = ref(0)

    // Модальное окно
    const showFileModal = ref(false)
    const editingFile = ref(null)
    const isEditing = ref(false)

    // Вычисляемые свойства
    const categories = computed(() => {
      const cats = [
        ...new Set(files.value.map(file => file.category).filter(Boolean)),
      ]
      return cats.sort()
    })

    const filteredFiles = computed(() => {
      let result = files.value

      // Фильтр по поиску
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase().trim()
        result = result.filter(file => {
          const title = (file.title || '').toLowerCase()
          const authors = (file.authors || '').toLowerCase()
          const description = (file.description || '').toLowerCase()

          return (
            title.includes(query) ||
            authors.includes(query) ||
            description.includes(query)
          )
        })
      }

      // Фильтр по категории
      if (selectedCategory.value) {
        result = result.filter(file => file.category === selectedCategory.value)
      }

      return result
    })

    const sortedFiles = computed(() => {
      const sorted = [...filteredFiles.value]

      switch (sortBy.value) {
        case 'title':
          return sorted.sort((a, b) => a.title.localeCompare(b.title))
        case 'authors':
          return sorted.sort((a, b) => a.authors.localeCompare(b.authors))
        case 'fileSize':
          return sorted.sort(
            (a, b) => parseFileSize(a.fileSize) - parseFileSize(b.fileSize)
          )
        case 'uploadDate':
        default:
          return sorted.sort(
            (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)
          )
      }
    })

    const paginatedFiles = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value
      const end = start + itemsPerPage.value
      return sortedFiles.value.slice(start, end)
    })

    const totalFiles = computed(() => files.value.length)
    const totalSize = computed(() => {
      const total = files.value.reduce(
        (sum, file) => sum + parseFileSize(file.fileSize),
        0
      )
      return formatFileSize(total)
    })
    const totalCategories = computed(() => categories.value.length)

    const visiblePages = computed(() => {
      const pages = []
      const maxVisible = 5
      let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
      let end = Math.min(totalPages.value, start + maxVisible - 1)

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1)
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    })

    // Методы
    const loadFiles = async () => {
      isLoading.value = true
      error.value = ''

      try {
        const response = await apiService.getCatalogPaginated(
          currentPage.value,
          itemsPerPage.value,
          'private'
        )

        if (response.success) {
          const catalogData = response.data || {}

          // Обрабатываем данные каталога
          const allFiles = []
          if (catalogData.items) {
            // Проверяем, является ли items массивом (плоские данные) или объектом (сгруппированные данные)
            if (Array.isArray(catalogData.items)) {
              // Плоские данные - добавляем файлы напрямую
              catalogData.items.forEach(file => {
                allFiles.push({
                  ...file,
                  // Тип файла всегда определяем по расширению
                  type: getFileTypeIcon(file.fileName),
                  // В приватном режиме используем category из файла
                  category: file.category || 'Без категории',
                  isPublic: false,
                })
              })
            } else {
              // Сгруппированные данные - обрабатываем как раньше
              Object.keys(catalogData.items).forEach(groupKey => {
                if (Array.isArray(catalogData.items[groupKey])) {
                  catalogData.items[groupKey].forEach(file => {
                    allFiles.push({
                      ...file,
                      // Тип файла всегда определяем по расширению
                      type: getFileTypeIcon(file.fileName),
                      // В приватном режиме используем category из файла
                      category: file.category || 'Без категории',
                      isPublic: false,
                    })
                  })
                }
              })
            }
          }

          files.value = allFiles

          // Обновляем пагинацию
          if (catalogData.pagination) {
            totalPages.value = catalogData.pagination.totalPages
            totalItems.value = catalogData.pagination.totalItems
          }
        } else {
          throw new Error(response.message || 'Ошибка загрузки файлов')
        }
      } catch (err) {
        error.value = err.message || 'Не удалось загрузить файлы'
      } finally {
        isLoading.value = false
      }
    }

    let searchTimeout = null
    const isSearching = ref(false)

    const handleSearch = () => {
      // Очищаем предыдущий таймаут
      if (searchTimeout) {
        clearTimeout(searchTimeout)
      }

      // Показываем индикатор поиска
      isSearching.value = true

      // Устанавливаем новый таймаут для поиска через 300ms
      searchTimeout = setTimeout(() => {
        currentPage.value = 1
        updatePagination()
        isSearching.value = false
      }, 300)
    }

    const handleFilter = () => {
      currentPage.value = 1
      updatePagination()
    }

    const handleSort = () => {
      currentPage.value = 1
      updatePagination()
    }

    const clearSearch = () => {
      searchQuery.value = ''
      currentPage.value = 1
      updatePagination()
    }

    const clearFilters = () => {
      selectedCategory.value = ''
      sortBy.value = 'uploadDate'
      currentPage.value = 1
      updatePagination()
    }

    const changePage = page => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        updatePagination()
      }
    }

    const updatePagination = () => {
      const total = filteredFiles.value.length
      totalPages.value = Math.ceil(total / itemsPerPage.value)
      totalItems.value = total

      if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value || 1
      }
    }

    const openAddFileModal = () => {
      editingFile.value = null
      isEditing.value = false
      showFileModal.value = true
    }

    const editFile = file => {
      editingFile.value = { ...file }
      isEditing.value = true
      showFileModal.value = true
    }

    const deleteFile = async file => {
      if (!confirm(`Удалить файл "${file.title}"?`)) {
        return
      }

      try {
        const response = await apiService.deleteFile(file.fileName)
        if (response.success) {
          await loadFiles()
        } else {
          throw new Error(response.message || 'Ошибка удаления файла')
        }
      } catch (err) {
        error.value = err.message || 'Не удалось удалить файл'
      }
    }

    const downloadFile = async file => {
      try {
        // Скачиваем приватный файл
        await apiService.downloadFile(file.fileName, true)
      } catch (err) {
        error.value = err.message || 'Не удалось скачать файл'
      }
    }

    const closeFileModal = () => {
      showFileModal.value = false
      editingFile.value = null
      isEditing.value = false
    }

    const handleFileSave = async fileData => {
      try {
        if (isEditing.value) {
          // Обновление файла
          const response = await apiService.updateFile(fileData)
          if (response.success) {
            await loadFiles()
            closeFileModal()
          } else {
            throw new Error(response.message || 'Ошибка обновления файла')
          }
        } else {
          // Добавление файла
          const response = await apiService.uploadFile(fileData)
          if (response.success) {
            await loadFiles()
            closeFileModal()
          } else {
            throw new Error(response.message || 'Ошибка загрузки файла')
          }
        }
      } catch (err) {
        // Обработка ошибок валидации
        if (err.validationErrors) {
          const validationMessages = Object.values(err.validationErrors)
            .flat()
            .join(', ')
          error.value = `Ошибка валидации: ${validationMessages}`
        } else {
          error.value = err.message || 'Не удалось сохранить файл'
        }
      }
    }

    const goBack = () => {
      window.history.back()
    }

    const handleLogout = () => {
      // Очищаем localStorage
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('isAdmin')

      // Перенаправляем на библиотеку
      window.location.href = '/library'
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
      if (typeof size === 'string') {
        return size
      }

      const units = ['B', 'KB', 'MB', 'GB']
      let value = size
      let unitIndex = 0

      while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024
        unitIndex++
      }

      return `${value.toFixed(1)} ${units[unitIndex]}`
    }

    const parseFileSize = size => {
      // Если size уже число, возвращаем как есть
      if (typeof size === 'number') return size

      // Если size null, undefined или пустая строка, возвращаем 0
      if (!size || typeof size !== 'string') return 0

      // Парсим строку размера (например: "1.5 MB", "500 KB", "2.1 GB")
      const match = size.toString().match(/^([\d.]+)\s*([KMGT]?B)$/i)
      if (!match) return 0

      const value = parseFloat(match[1])
      const unit = match[2].toUpperCase()

      const multipliers = {
        B: 1,
        KB: 1024,
        MB: 1024 * 1024,
        GB: 1024 * 1024 * 1024,
      }

      return value * (multipliers[unit] || 1)
    }

    const formatDate = dateString => {
      const date = new Date(dateString)
      return date.toLocaleDateString('ru-RU')
    }

    // Наблюдатели
    watch([searchQuery, selectedCategory, sortBy], () => {
      updatePagination()
    })

    // Инициализация
    onMounted(() => {
      // Проверяем права доступа перед загрузкой
      if (!checkAccess()) {
        return
      }
      loadFiles()
    })

    return {
      // Состояние
      files,
      isLoading,
      error,
      searchQuery,
      selectedCategory,
      sortBy,
      currentPage,
      totalPages,
      totalItems,
      showFileModal,
      editingFile,
      isEditing,
      isSearching,

      // Вычисляемые свойства
      categories,
      filteredFiles,
      paginatedFiles,
      totalFiles,
      totalSize,
      totalCategories,
      visiblePages,

      // Методы
      loadFiles,
      handleSearch,
      handleFilter,
      handleSort,
      clearSearch,
      clearFilters,
      changePage,
      openAddFileModal,
      editFile,
      deleteFile,
      downloadFile,
      closeFileModal,
      handleFileSave,
      goBack,
      handleLogout,
      getFileTypeIcon,
      formatFileSize,
      formatDate,
      parseFileSize,
    }
  },
}
</script>

<style lang="scss" scoped>
.admin-panel-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

// Заголовок
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.header-content {
  .admin-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0 0 0.5rem 0;
  }

  .admin-subtitle {
    font-size: 1.1rem;
    color: #718096;
    margin: 0;
  }
}

.header-actions {
  display: flex;
  gap: 1rem;

  .add-file-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #48bb78, #38a169);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(72, 187, 120, 0.3);
    }

    .add-icon {
      width: 20px;
      height: 20px;
    }
  }

  .back-button,
  .logout-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(113, 128, 150, 0.2);
  }

  .back-button {
    background: rgba(113, 128, 150, 0.1);
    color: #4a5568;

    &:hover {
      background: rgba(113, 128, 150, 0.2);
      border-color: rgba(113, 128, 150, 0.3);
    }

    .back-icon {
      width: 20px;
      height: 20px;
    }
  }

  .logout-button {
    background: rgba(245, 101, 101, 0.1);
    color: #e53e3e;
    border-color: rgba(245, 101, 101, 0.2);

    &:hover {
      background: rgba(245, 101, 101, 0.2);
      border-color: rgba(245, 101, 101, 0.3);
    }

    .logout-icon {
      width: 20px;
      height: 20px;
    }
  }
}

// Статистика
.admin-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  .stat-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .stat-content {
    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: #2d3748;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #718096;
      margin-top: 0.25rem;
    }
  }
}

// Контролы
.admin-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.search-section {
  flex: 1;
  max-width: 400px;

  .search-input-wrapper {
    position: relative;
    width: 100%;

    .search-icon,
    .search-spinner {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      color: #a0aec0;
      pointer-events: none;
    }

    .search-spinner {
      border: 2px solid rgba(160, 174, 192, 0.2);
      border-top: 2px solid #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .search-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 3rem;
      border: 2px solid rgba(113, 128, 150, 0.2);
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

    .clear-search-btn {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border: none;
      background: none;
      cursor: pointer;
      color: #a0aec0;
      transition: color 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: #e53e3e;
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
}

.filter-section {
  display: flex;
  gap: 1rem;

  select {
    padding: 0.75rem 1rem;
    border: 2px solid rgba(113, 128, 150, 0.2);
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 150px;

    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &:hover {
      border-color: rgba(113, 128, 150, 0.4);
    }
  }

  .clear-filters-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border: 2px solid rgba(245, 101, 101, 0.3);
    border-radius: 8px;
    font-size: 0.9rem;
    background: rgba(245, 101, 101, 0.1);
    color: #e53e3e;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(245, 101, 101, 0.2);
      border-color: rgba(245, 101, 101, 0.5);
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
}

// Файлы
.files-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.results-counter {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 8px;
  color: #4a5568;
  font-weight: 500;

  small {
    color: #718096;
    font-weight: 400;
  }
}

.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: 3rem 1rem;

  .loading-spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(113, 128, 150, 0.2);
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }

  .error-icon,
  .empty-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .retry-button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: #5a67d8;
    }
  }
}

.files-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.file-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(113, 128, 150, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
}

.file-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .file-type-icon {
    font-size: 2rem;
  }

  .file-actions {
    display: flex;
    gap: 0.5rem;

    .action-button {
      width: 36px;
      height: 36px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      svg {
        width: 16px;
        height: 16px;
      }

      &.download {
        background: rgba(72, 187, 120, 0.1);
        color: #38a169;

        &:hover {
          background: rgba(72, 187, 120, 0.2);
        }
      }

      &.edit {
        background: rgba(66, 153, 225, 0.1);
        color: #3182ce;

        &:hover {
          background: rgba(66, 153, 225, 0.2);
        }
      }

      &.delete {
        background: rgba(245, 101, 101, 0.1);
        color: #e53e3e;

        &:hover {
          background: rgba(245, 101, 101, 0.2);
        }
      }
    }
  }
}

.file-content {
  .file-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }

  .file-authors {
    font-size: 0.9rem;
    color: #4a5568;
    margin: 0 0 0.5rem 0;
  }

  .file-category {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .file-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #718096;

    .file-size,
    .file-date {
      background: rgba(113, 128, 150, 0.1);
      padding: 0.25rem 0.5rem;
      border-radius: 6px;
    }
  }
}

// Пагинация
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.page-button {
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(113, 128, 150, 0.2);
  background: white;
  color: #4a5568;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 40px;

  &:hover:not(:disabled) {
    background: rgba(102, 126, 234, 0.1);
    border-color: #667eea;
    color: #667eea;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
  }

  &.prev,
  &.next {
    svg {
      width: 16px;
      height: 16px;
    }
  }
}

.page-numbers {
  display: flex;
  gap: 0.25rem;
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
@media (max-width: 768px) {
  .admin-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .header-actions {
    flex-direction: column;
    width: 100%;
  }

  .admin-controls {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .search-section {
    max-width: none;
  }

  .filter-section {
    flex-direction: column;
  }

  .files-grid {
    grid-template-columns: 1fr;
  }

  .admin-stats {
    grid-template-columns: 1fr;
  }
}
</style>
