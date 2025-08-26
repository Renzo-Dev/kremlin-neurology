<template>
  <div class="file-card">
    <!-- Верхняя полоса с градиентом -->
    <div
      class="file-card-accent"
      :class="`accent-${getFileTypeClass(file.type)}`"
    ></div>

    <div class="file-header">
      <div
        class="file-icon-wrapper"
        :class="`icon-${getFileTypeClass(file.type)}`"
      >
        <svg
          class="file-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path :d="getFileIconPath(file.type)" />
        </svg>
      </div>

      <div class="file-info">
        <h3 class="file-title">{{ file.title }}</h3>
        <p class="file-author">
          <svg
            class="author-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          {{ file.authors }}
        </p>
      </div>

      <div class="file-actions">
        <button
          class="download-button"
          @click="handleDownload"
          :disabled="isDownloading"
          :title="`Скачать ${file.fileName}`"
        >
          <svg
            v-if="!isDownloading"
            class="download-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span v-else class="loading-spinner"></span>
        </button>
      </div>
    </div>

    <div class="file-details">
      <div v-if="isPrivate" class="detail-item category-item">
        <div class="detail-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M3 3h18v18H3zM9 9h6v6H9z" />
          </svg>
        </div>
        <div class="detail-content">
          <span class="detail-label">Категория</span>
          <span class="detail-value">{{ file.category }}</span>
        </div>
      </div>

      <div class="detail-item">
        <div class="detail-icon">
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
          </svg>
        </div>
        <div class="detail-content">
          <span class="detail-label">Тип файла</span>
          <span
            class="detail-value file-type-badge"
            :class="`type-${getFileTypeClass(file.type)}`"
          >
            {{ file.type.toUpperCase() }}
          </span>
        </div>
      </div>

      <div class="detail-item">
        <div class="detail-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="M7 10l5 5 5-5" />
            <path d="M12 15V3" />
          </svg>
        </div>
        <div class="detail-content">
          <span class="detail-label">Размер</span>
          <span class="detail-value">{{ formatFileSize(file.fileSize) }}</span>
        </div>
      </div>

      <div class="detail-item">
        <div class="detail-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div class="detail-content">
          <span class="detail-label">Дата загрузки</span>
          <span class="detail-value">{{ formatDate(file.uploadDate) }}</span>
        </div>
      </div>
    </div>

    <div v-if="isDownloading" class="download-progress">
      <div class="progress-header">
        <span class="progress-label">Скачивание...</span>
        <span class="progress-percentage">{{ downloadProgress }}%</span>
      </div>
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: `${downloadProgress}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFileDownload } from '@/composables/library/useFileDownload'

export default {
  name: 'FileCard',
  props: {
    file: {
      type: Object,
      required: true,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {
      isDownloading,
      downloadProgress,
      downloadFile,
      formatFileSize,
      formatDate,
    } = useFileDownload()

    // Определение класса типа файла для стилизации
    const getFileTypeClass = type => {
      const typeMap = {
        PDF: 'pdf',
        Word: 'word',
        Archive: 'archive',
        Image: 'image',
        Other: 'other',
      }
      return typeMap[type] || 'other'
    }

    // SVG path для разных типов файлов
    const getFileIconPath = type => {
      const paths = {
        PDF: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h6 M9 9h1',
        Word: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13l3 3 5-5 M8 17l3-3 5 5',
        Archive:
          'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3 M3 7h18 M3 11h18',
        Image:
          'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M4 16l4-4 4 4 M14 14l-2-2-4 4',
        Other:
          'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h6',
      }

      return paths[type] || paths['Other']
    }

    const handleDownload = async () => {
      try {
        await downloadFile(props.file, props.isPrivate)
      } catch (error) {
        // Обработка ошибки скачивания
      }
    }

    return {
      isDownloading,
      downloadProgress,
      handleDownload,
      formatFileSize,
      formatDate,
      getFileTypeClass,
      getFileIconPath,
    }
  },
}
</script>

<style lang="scss" scoped>
@use './FileCard.scss';
</style>
