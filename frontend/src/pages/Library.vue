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
        @search="handleSearch"
        @filter="handleFilter"
      />

      <FileList
        :files="currentFiles"
        :filtered-files="filteredFiles"
        :is-loading="isLoading"
        :error="error"
        :search-query="searchQuery"
        :is-private="isPrivateMode"
        @retry="loadFiles"
        @download="handleDownload"
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
import { useFileSearch } from '@/composables/library/useFileSearch'
import { useLibraryMode } from '@/composables/library/useLibraryMode'
import { MockApiService } from '@/services/mockApiService'
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
    const { hasAccess } = useFileAccess()
    const { searchFiles, searchQuery } = useFileSearch()

    const files = ref([])
    const isLoading = ref(false)
    const error = ref('')
    const apiService = new MockApiService()

    const currentFiles = computed(() => {
      if (isPrivateMode.value && !hasAccess.value) {
        return []
      }
      return files.value.filter(file => file.isPublic !== isPrivateMode.value)
    })

    const filteredFiles = computed(() => {
      return searchFiles(currentFiles.value)
    })

    const loadFiles = async () => {
      isLoading.value = true
      error.value = ''

      try {
        if (isPrivateMode.value) {
          const response = await apiService.getPrivateFiles()
          if (response.success) {
            files.value = response.files
          }
        } else {
          const response = await apiService.getPublicFiles()
          if (response.success) {
            files.value = response.files
          }
        }
      } catch (err) {
        console.error('Ошибка загрузки файлов:', err)
        error.value =
          'Не удалось загрузить файлы. Попробуйте обновить страницу.'
      } finally {
        isLoading.value = false
      }
    }

    const handleSearch = () => {
      // Поиск уже обрабатывается в computed
    }

    const handleFilter = () => {
      // Фильтрация уже обрабатывается в computed
    }

    const handleDownload = file => {
      console.log('Скачивание файла:', file)
      // Здесь будет логика скачивания
    }

    // Загрузка файлов при изменении режима
    watch([libraryMode, hasAccess], () => {
      if (isPrivateMode.value && !hasAccess.value) {
        files.value = []
        return
      }
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
      error,
      searchQuery,
      isPrivateMode,
      loadFiles,
      handleSearch,
      handleFilter,
      handleDownload,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/Library/Library.scss';
</style>
