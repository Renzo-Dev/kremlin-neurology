<template>
  <div class="file-list">
    <div v-if="isPageLoading" class="page-loading">
      <div class="loading-spinner"></div>
      <p class="loading-text">Загрузка страницы...</p>
    </div>

    <div v-else-if="isLoading" class="loading-state">
      <div class="loading-spinner"></div>
      <p class="loading-text">Загрузка файлов...</p>
    </div>

    <div v-else-if="error" class="error-state">
      <svg
        class="error-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
      <h3 class="error-title">Ошибка загрузки</h3>
      <p class="error-message">{{ error }}</p>
      <button class="retry-button" @click="$emit('retry')">
        Попробовать снова
      </button>
    </div>

    <div v-else-if="filteredFiles.length === 0" class="empty-state">
      <svg
        class="empty-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
      <h3 class="empty-title">Файлы не найдены</h3>
      <p class="empty-message">
        {{
          searchQuery
            ? 'Попробуйте изменить параметры поиска'
            : 'В этой библиотеке пока нет файлов'
        }}
      </p>
    </div>

    <div v-else class="files-grid">
      <FileCard
        v-for="file in paginatedFiles"
        :key="`${file.fileName}-${file.uploadDate}`"
        :file="file"
        :is-private="isPrivate"
        @download="$emit('download', $event)"
      />
    </div>

    <div v-if="totalPages > 1" class="pagination">
      <button
        class="pagination-button"
        :disabled="!hasPrevPage"
        @click="goToPage(currentPage - 1)"
      >
        <svg
          class="pagination-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="15,18 9,12 15,6" />
        </svg>
        Назад
      </button>

      <div class="page-numbers">
        <button
          v-for="page in visiblePages"
          :key="page"
          class="page-number"
          :class="{ 'page-number--active': page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </div>

      <button
        class="pagination-button"
        :disabled="!hasNextPage"
        @click="goToPage(currentPage + 1)"
      >
        Вперед
        <svg
          class="pagination-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>
    </div>

    <div v-if="totalItems > 0" class="list-info">
      <span class="info-text">
        Показано {{ startIndex + 1 }}-{{ endIndex }} из
        {{ totalItems }} файлов
      </span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import FileCard from '../FileCard/FileCard.vue'

export default {
  name: 'FileList',
  components: {
    FileCard,
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
    filteredFiles: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isPageLoading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    searchQuery: {
      type: String,
      default: '',
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    // Пагинация из backend
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    hasNextPage: {
      type: Boolean,
      default: false,
    },
    hasPrevPage: {
      type: Boolean,
      default: false,
    },
    itemsPerPage: {
      type: Number,
      default: 12,
    },
  },
  emits: ['retry', 'download', 'pageChange'],
  setup(props, { emit }) {
    const startIndex = computed(
      () => (props.currentPage - 1) * props.itemsPerPage
    )

    const endIndex = computed(() =>
      Math.min(
        startIndex.value + props.itemsPerPage,
        props.totalItems
      )
    )

    const paginatedFiles = computed(() => props.files)

    const visiblePages = computed(() => {
      const pages = []
      const maxVisible = 5
      let start = Math.max(1, props.currentPage - Math.floor(maxVisible / 2))
      let end = Math.min(props.totalPages, start + maxVisible - 1)

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1)
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    })

    const goToPage = page => {
      if (page >= 1 && page <= props.totalPages) {
        emit('pageChange', page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    return {
      startIndex,
      endIndex,
      paginatedFiles,
      visiblePages,
      goToPage,
    }
  },
}
</script>

<style lang="scss" scoped>
@use './FileList.scss';
</style>
