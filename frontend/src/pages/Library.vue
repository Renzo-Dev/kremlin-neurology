<template>
  <div class="library-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Библиотека файлов</h1>
        <p class="page-description">
          Доступ к научным материалам, исследованиям и документам кафедры
          неврологии
        </p>
      </div>

      <LibraryModeToggle />

      <!-- Кнопка админ-панели для авторизованных админов -->
      <div v-if="hasAccess && isAdmin" class="admin-panel-access">
        <button class="admin-panel-button" @click="goToAdminPanel">
          <svg
            class="admin-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            <path d="M12 22V12" />
          </svg>
          Админ панель
        </button>
      </div>

      <!-- Фильтры и сортировка -->
      <FileFilters
        :is-private="isPrivateMode"
        @filters-change="handleFiltersChange"
      />

      <div v-if="isPrivateMode && !hasAccess" class="private-access-notice">
        <div class="notice-content">
          <svg
            class="notice-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <circle cx="12" cy="16" r="1" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <div class="notice-text">
            <h3 class="notice-title">Приватная библиотека</h3>
            <p class="notice-description">
              Для доступа к приватным материалам кафедры введите пароль
            </p>
            <button class="notice-button" @click="openPasswordModal">
              Ввести пароль
            </button>
          </div>
        </div>
      </div>

      <FileList
        :files="currentFiles"
        :is-loading="isLoading"
        :error="error"
        :is-private="isPrivateMode"
        :pagination="pagination"
        :visible-pages="visiblePages"
        @retry="loadFiles"
        @download="handleDownload"
        @page-change="handlePageChange"
      />
    </div>

    <PasswordModal />
  </div>
</template>

<script>
import FileFilters from '@/components/pages/Library/FileFilters/FileFilters.vue'
import FileList from '@/components/pages/Library/FileList/FileList.vue'
import LibraryModeToggle from '@/components/pages/Library/LibraryModeToggle/LibraryModeToggle.vue'
import PasswordModal from '@/components/pages/Library/PasswordModal/PasswordModal.vue'
import { useFileAccess } from '@/composables/library/useFileAccess'
import { useFileDownload } from '@/composables/library/useFileDownload'
import { useLibraryMode } from '@/composables/library/useLibraryMode'
import { ApiService } from '@/services/apiService'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Library',
  components: {
    LibraryModeToggle,
    PasswordModal,
    FileList,
    FileFilters,
  },
  setup() {
    const router = useRouter()
    const { libraryMode, isPrivateMode } = useLibraryMode()
    const { hasAccess, openPasswordModal, isAdmin } = useFileAccess()
    const { downloadFile } = useFileDownload()

    const files = ref([])
    const isLoading = ref(false)
    const error = ref('')
    const apiService = new ApiService()

    // Состояние фильтров и сортировки
    const currentFilters = ref({
      filters: {},
      sorting: { field: 'uploadDate', direction: 'desc' },
    })

    // Состояние пагинации
    const pagination = ref({
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      hasNextPage: false,
      hasPrevPage: false,
      itemsPerPage: 20,
    })

    // Кэш загруженных страниц
    const pageCache = ref(new Map())

    // Вычисляемое свойство для видимых страниц пагинации
    const visiblePages = computed(() => {
      const pages = []
      const maxVisible = 5
      let start = Math.max(
        1,
        pagination.value.currentPage - Math.floor(maxVisible / 2)
      )
      let end = Math.min(pagination.value.totalPages, start + maxVisible - 1)

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1)
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    })

    const currentFiles = computed(() => {
      if (isPrivateMode.value && !hasAccess.value) {
        return []
      }

      // Проверяем, что files.value это массив
      if (!Array.isArray(files.value)) {
        return []
      }

      // Фильтруем файлы по режиму
      return files.value.filter(file => file.isPublic !== isPrivateMode.value)
    })

    const loadFiles = async (page = 1, useCache = true) => {
      // Если приватный режим без доступа - не загружаем
      if (isPrivateMode.value && !hasAccess.value) {
        files.value = []
        return
      }

      // Проверяем кэш
      const cacheKey = `${isPrivateMode.value ? 'private' : 'public'}-${page}-${JSON.stringify(currentFilters.value)}`
      if (useCache && pageCache.value.has(cacheKey)) {
        const cachedData = pageCache.value.get(cacheKey)
        files.value = cachedData.files
        pagination.value = cachedData.pagination
        return
      }

      isLoading.value = true
      error.value = ''

      try {
        // Формируем параметры для API
        const apiParams = {
          type: isPrivateMode.value ? 'private' : 'public',
          page: page,
          limit: pagination.value.itemsPerPage,
          ...currentFilters.value,
        }

        const response = await apiService.getCatalogWithFilters(apiParams)

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
                  type: getFileType(file.fileName),
                  // В приватном режиме используем category из файла, в публичном - определяем по типу
                  category: isPrivateMode.value
                    ? file.category || 'Без категории'
                    : getFileType(file.fileName),
                  isPublic: !isPrivateMode.value,
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
                      type: getFileType(file.fileName),
                      // В приватном режиме используем category из файла, в публичном - группировку по авторам
                      category: isPrivateMode.value
                        ? file.category || 'Без категории'
                        : groupKey,
                      isPublic: !isPrivateMode.value,
                    })
                  })
                }
              })
            }
          }

          files.value = allFiles

          // Обновляем пагинацию
          if (catalogData.pagination) {
            pagination.value = { ...catalogData.pagination }
          }

          // Кэшируем результат
          pageCache.value.set(cacheKey, {
            files: allFiles,
            pagination: { ...pagination.value },
          })

          // Ограничиваем размер кэша
          if (pageCache.value.size > 20) {
            const firstKey = pageCache.value.keys().next().value
            pageCache.value.delete(firstKey)
          }
        } else {
          throw new Error(response.message || 'Ошибка загрузки файлов')
        }
      } catch (err) {
        error.value =
          err.message ||
          'Не удалось загрузить файлы. Попробуйте обновить страницу.'
      } finally {
        isLoading.value = false
      }
    }

    const handleFiltersChange = newFilters => {
      // Обновляем фильтры
      currentFilters.value = newFilters

      // Сбрасываем на первую страницу
      pagination.value.currentPage = 1

      // Очищаем кэш при изменении фильтров
      pageCache.value.clear()

      // Загружаем файлы с новыми фильтрами
      loadFiles(1, false)
    }

    const handlePageChange = page => {
      if (page >= 1 && page <= pagination.value.totalPages) {
        pagination.value.currentPage = page
        loadFiles(page, true) // Используем кэш для уже загруженных страниц
      }
    }

    const handleDownload = async file => {
      try {
        await downloadFile(file, isPrivateMode.value)
      } catch (error) {
        error.value = 'Не удалось скачать файл'
      }
    }

    const goToAdminPanel = () => {
      // Переход на админ панель через роутер
      router.push('/admin')
    }

    // Метод для определения типа файла по расширению
    const getFileType = fileName => {
      if (!fileName) return 'other'
      const ext = fileName.toLowerCase().split('.').pop()

      if (ext === 'pdf') return 'PDF'
      if (['doc', 'docx', 'rtf'].includes(ext)) return 'Word'
      if (['zip', 'rar', '7z'].includes(ext)) return 'Archive'
      if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) return 'Image'

      return 'Other'
    }

    // Загрузка файлов при изменении режима
    watch([libraryMode, hasAccess], (newValues, oldValues) => {
      // Пропускаем первый вызов при инициализации
      if (oldValues[0] === undefined && oldValues[1] === undefined) {
        return
      }

      if (isPrivateMode.value && !hasAccess.value) {
        files.value = []
        return
      }

      // Очищаем кэш при изменении режима
      pageCache.value.clear()
      pagination.value.currentPage = 1
      loadFiles(1, false)
    })

    onMounted(() => {
      loadFiles(1, false)
    })

    return {
      files,
      currentFiles,
      isLoading,
      error,
      isPrivateMode,
      hasAccess,
      pagination,
      visiblePages,
      loadFiles,
      handleFiltersChange,
      handlePageChange,
      handleDownload,
      openPasswordModal,
      goToAdminPanel,
      isAdmin,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/Library/Library.scss';

// Стили для кнопки админ-панели
.admin-panel-access {
  margin: 1rem 0;
  text-align: center;
}

.admin-panel-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: none;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);

  .admin-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
