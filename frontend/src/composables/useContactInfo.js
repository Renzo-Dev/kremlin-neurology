import { ref } from 'vue'

export function useContactInfo() {
  const copyStatus = ref('')
  const showCopyNotification = ref(false)

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      copyStatus.value = text
      showCopyNotification.value = true

      setTimeout(() => {
        showCopyNotification.value = false
        copyStatus.value = ''
      }, 2000)
    } catch (err) {
      console.error('Ошибка при копировании:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)

      copyStatus.value = text
      showCopyNotification.value = true

      setTimeout(() => {
        showCopyNotification.value = false
        copyStatus.value = ''
      }, 2000)
    }
  }

  return {
    copyStatus,
    showCopyNotification,
    copyToClipboard
  }
}
