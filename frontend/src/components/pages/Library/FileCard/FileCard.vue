<template>
  <div class="file-card">
    <div class="file-header">
      <div class="file-icon">
        {{ getFileIcon(file.type) }}
      </div>
      <div class="file-info">
        <h3 class="file-title">{{ file.title }}</h3>
        <p class="file-author">{{ file.authors }}</p>
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
      <div class="detail-item">
        <span class="detail-label">Тип:</span>
        <span class="detail-value">{{ file.type.toUpperCase() }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Размер:</span>
        <span class="detail-value">{{ formatFileSize(file.fileSize) }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Дата:</span>
        <span class="detail-value">{{ formatDate(file.uploadDate) }}</span>
      </div>
    </div>

    <div v-if="isDownloading" class="download-progress">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: `${downloadProgress}%` }"
        ></div>
      </div>
      <span class="progress-text">Скачивание... {{ downloadProgress }}%</span>
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
      getFileIcon,
      formatFileSize,
      formatDate,
    } = useFileDownload()

    const handleDownload = async () => {
      try {
        await downloadFile(props.file, props.isPrivate)
      } catch (error) {
        console.error('Ошибка скачивания:', error)
        // Здесь можно добавить уведомление об ошибке
      }
    }

    return {
      isDownloading,
      downloadProgress,
      handleDownload,
      getFileIcon,
      formatFileSize,
      formatDate,
    }
  },
}
</script>

<style lang="scss" scoped>
@use './FileCard.scss';
</style>
