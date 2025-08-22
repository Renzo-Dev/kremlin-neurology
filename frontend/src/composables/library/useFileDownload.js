import { ref } from 'vue'

export function useFileDownload() {
  const isDownloading = ref(false)
  const downloadProgress = ref(0)

  const downloadFile = async (file, isPrivate = false) => {
    if (isDownloading.value) return

    isDownloading.value = true
    downloadProgress.value = 0

    try {
      const endpoint = isPrivate ? '/api/privateDownload' : '/api/download'

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: file.fileName,
          title: file.title,
        }),
      })

      if (!response.ok) {
        throw new Error('Ошибка скачивания')
      }

      // Получаем blob для скачивания
      const blob = await response.blob()

      // Создаем ссылку для скачивания
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = file.fileName

      // Добавляем ссылку в DOM и кликаем по ней
      document.body.appendChild(link)
      link.click()

      // Очищаем
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      downloadProgress.value = 100

      // Сброс прогресса через секунду
      setTimeout(() => {
        downloadProgress.value = 0
      }, 1000)
    } catch (error) {
      console.error('Ошибка скачивания:', error)
      throw error
    } finally {
      isDownloading.value = false
    }
  }

  const getFileIcon = fileType => {
    const iconMap = {
      pdf: '📄',
      doc: '📝',
      docx: '📝',
      txt: '📄',
      zip: '📦',
      rar: '📦',
      jpg: '🖼️',
      jpeg: '🖼️',
      png: '🖼️',
    }
    return iconMap[fileType] || '📄'
  }

  const formatFileSize = bytes => {
    if (bytes === 0) return '0 Б'

    const k = 1024
    const sizes = ['Б', 'КБ', 'МБ', 'ГБ']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = dateString => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return {
    isDownloading,
    downloadProgress,
    downloadFile,
    getFileIcon,
    formatFileSize,
    formatDate,
  }
}
