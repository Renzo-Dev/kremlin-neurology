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

      <FileSearch
        :files="currentFiles"
        :filtered-files-count="filteredFiles.length"
        :is-searching="isSearching"
        @search="handleSearch"
        @filter="handleFilter"
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
        :filtered-files="filteredFiles"
        :is-loading="isLoading"
        :is-page-loading="isPageLoading"
        :error="error"
        :search-query="searchQuery"
        :is-private="isPrivateMode"
        :current-page="currentPage"
        :total-pages="totalPages"
        :total-items="totalItems"
        :has-next-page="hasNextPage"
        :has-prev-page="hasPrevPage"
        :items-per-page="itemsPerPage"
        @retry="loadFiles"
        @download="handleDownload"
        @page-change="loadPage"
      />
    </div>

    <PasswordModal />
  </div>
</template>

<script>
import FileList from '@/components/pages/Library/FileList/FileList.vue'
import FileSearch from '@/components/pages/Library/FileSearch/FileSearch.vue'
import LibraryModeToggle from '@/components/pages/Library/LibraryModeToggle/LibraryModeToggle.vue'
import PasswordModal from '@/components/pages/Library/PasswordModal/PasswordModal.vue'
import { useFileAccess } from '@/composables/library/useFileAccess'
import { useFileDownload } from '@/composables/library/useFileDownload'
import { useFileSearch } from '@/composables/library/useFileSearch'
import { useLibraryMode } from '@/composables/library/useLibraryMode'
import { ApiService } from '@/services/apiService'
import { computed, onMounted, ref, watch } from 'vue'

export default {
  name: 'Library',
  components: {
    LibraryModeToggle,
    PasswordModal,
    FileSearch,
    FileList,
  },
  setup() {
    const { libraryMode, isPrivateMode } = useLibraryMode()
    const { hasAccess, openPasswordModal } = useFileAccess()
    const { searchFiles, searchQuery } = useFileSearch()

    const files = ref([])
    const isLoading = ref(false)
    const isPageLoading = ref(false) // Загрузка конкретной страницы
    const isSearching = ref(false) // Загрузка поиска
    const error = ref('')
    const apiService = new ApiService()
    
    // Пагинация
    const currentPage = ref(1)
    const itemsPerPage = ref(12)
    const totalItems = ref(0)
    const totalPages = ref(0)
    const hasNextPage = ref(false)
    const hasPrevPage = ref(false)
    
    // Кэш для загруженных страниц
    const pageCache = ref(new Map())
    const cacheKey = (page, type, searchQuery) => `${type}-${page}-${searchQuery || 'no-search'}`

    const currentFiles = computed(() => {
      if (isPrivateMode.value && !hasAccess.value) {
        return []
      }
      
      // Проверяем, что files.value это массив
      if (!Array.isArray(files.value)) {
        return []
      }
      
      // Для публичного режима показываем файлы где isPublic === true
      // Для приватного режима показываем файлы где isPublic === false
      return files.value.filter(file => file.isPublic !== isPrivateMode.value)
    })

    const filteredFiles = computed(() => {
      return searchFiles(currentFiles.value)
    })

    const loadFiles = async (retryCount = 0, page = 1) => {
      // Если приватный режим без доступа - не загружаем
      if (isPrivateMode.value && !hasAccess.value) {
        files.value = []
        return
      }

      isLoading.value = true
      error.value = ''

      try {
        // Собираем фильтры для поиска
        const filters = {}
        if (searchQuery.value) {
          filters.search = searchQuery.value
        }
        
        // Проверяем кэш
        const cacheKeyValue = cacheKey(page, isPrivateMode.value ? 'private' : 'public', searchQuery.value)
        if (pageCache.value.has(cacheKeyValue)) {
          const cachedData = pageCache.value.get(cacheKeyValue)
          files.value = cachedData.files
          currentPage.value = cachedData.pagination.currentPage
          totalPages.value = cachedData.pagination.totalPages
          totalItems.value = cachedData.pagination.totalItems
          hasNextPage.value = cachedData.pagination.hasNextPage
          hasPrevPage.value = cachedData.pagination.hasPrevPage
          isLoading.value = false
          return
        }
        
        // Используем пагинированный API с фильтрами
        const response = await apiService.getCatalogPaginated(
          page, 
          itemsPerPage.value, 
          isPrivateMode.value ? 'private' : 'public',
          filters
        )
        
        if (response.success) {
          const catalogData = response.data || {}
          
          // Обновляем пагинацию
          if (catalogData.pagination) {
            currentPage.value = catalogData.pagination.currentPage
            totalPages.value = catalogData.pagination.totalPages
            totalItems.value = catalogData.pagination.totalItems
            hasNextPage.value = catalogData.pagination.hasNextPage
            hasPrevPage.value = catalogData.pagination.hasPrevPage
          }
          
          // items теперь объект с категориями (группировка по авторам)
          const allFiles = []
          Object.keys(catalogData.items || {}).forEach(category => {
            if (Array.isArray(catalogData.items[category])) {
              catalogData.items[category].forEach(file => {
                allFiles.push({
                  ...file,
                  category: category,
                  isPublic: !isPrivateMode.value
                })
              })
            }
          })
          
          files.value = allFiles
          
          // Кэшируем результат
          pageCache.value.set(cacheKeyValue, {
            files: allFiles,
            pagination: catalogData.pagination
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
        // Retry механизм для сетевых ошибок
        if (retryCount < 2 && (err.message.includes('сети') || err.message.includes('CORS'))) {
          error.value = `Попытка ${retryCount + 1}/3: ${err.message}`
          setTimeout(() => {
            loadFiles(retryCount + 1, page)
          }, 2000)
          return
        }
        
        error.value = err.message || 'Не удалось загрузить файлы. Попробуйте обновить страницу.'
      } finally {
        isLoading.value = false
      }
    }

    const loadPage = async (page) => {
      if (page >= 1 && page <= totalPages.value) {
        isPageLoading.value = true
        try {
          await loadFiles(0, page)
        } finally {
          isPageLoading.value = false
        }
      }
    }

    const handleSearch = async () => {
      // Показываем состояние загрузки поиска
      isSearching.value = true
      
      try {
        // Очищаем кэш при поиске
        pageCache.value.clear()
        // Сброс на первую страницу при поиске
        currentPage.value = 1
        await loadFiles(0, 1)
      } finally {
        isSearching.value = false
      }
    }

    const handleFilter = async () => {
      // Очищаем кэш при фильтрации
      pageCache.value.clear()
      // Сброс на первую страницу при фильтрации
      currentPage.value = 1
      await loadFiles(0, 1)
    }

    const handleDownload = async file => {
      try {
        const { downloadFile } = useFileDownload()
        await downloadFile(file, isPrivateMode.value)
      } catch (error) {
        error.value = 'Не удалось скачать файл'
      }
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
      currentPage.value = 1 // Сброс на первую страницу
      loadFiles()
    })

    onMounted(() => {
      loadFiles()
    })

    return {
      files,
      currentFiles,
      filteredFiles,
      isLoading,
      isPageLoading,
      error,
      searchQuery,
      isPrivateMode,
      hasAccess,
      // Пагинация
      currentPage,
      totalPages,
      totalItems,
      hasNextPage,
      hasPrevPage,
      itemsPerPage,
      loadFiles,
      loadPage,
      handleSearch,
      handleFilter,
      handleDownload,
      isSearching,
      openPasswordModal,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/Library/Library.scss';
</style>
