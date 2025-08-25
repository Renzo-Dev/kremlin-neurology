<template>
  <div class="file-list">
    <div v-if="isLoading" class="loading-state">
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

    <div v-else-if="files.length === 0" class="empty-state">
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
        В этой библиотеке пока нет файлов
      </p>
    </div>

    <div v-else class="files-grid">
      <FileCard
        v-for="file in files"
        :key="`${file.fileName}-${file.uploadDate}`"
        :file="file"
        :is-private="isPrivate"
        @download="$emit('download', $event)"
      />
    </div>

    <!-- Пагинация -->
    <div v-if="pagination && pagination.totalPages > 1" class="pagination">
      <button
        class="pagination-button"
        :disabled="!pagination.hasPrevPage"
        @click="$emit('page-change', pagination.currentPage - 1)"
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
          :class="{ 'page-number--active': page === pagination.currentPage }"
          @click="$emit('page-change', page)"
        >
          {{ page }}
        </button>
      </div>

      <button
        class="pagination-button"
        :disabled="!pagination.hasNextPage"
        @click="$emit('page-change', pagination.currentPage + 1)"
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

    <!-- Информация о страницах -->
    <div v-if="pagination && pagination.totalItems > 0" class="pagination-info">
      <span class="pagination-text">
        Страница {{ pagination.currentPage }} из {{ pagination.totalPages }}
        (всего {{ pagination.totalItems }} файлов)
      </span>
    </div>
  </div>
</template>

<script>
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
    isLoading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object,
      default: () => ({
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        hasPrevPage: false,
        hasNextPage: false,
      }),
    },
    visiblePages: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['retry', 'download', 'page-change'],
}
</script>

<style lang="scss" scoped>
@use './FileList.scss';
</style>
