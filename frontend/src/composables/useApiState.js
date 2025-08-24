import { computed, ref } from 'vue'

// Глобальное состояние API
const isOnline = ref(navigator.onLine)
const isApiAvailable = ref(true)
const lastError = ref('')

export function useApiState() {
  // Слушаем изменения состояния сети
  const updateOnlineStatus = () => {
    isOnline.value = navigator.onLine
    if (!isOnline.value) {
      lastError.value = 'Нет подключения к интернету'
    }
  }

  // Проверка доступности API
  const checkApiAvailability = async () => {
    try {
      const response = await fetch('/api/health', { method: 'HEAD' })
      isApiAvailable.value = response.ok
      lastError.value = ''
    } catch (error) {
      isApiAvailable.value = false
      lastError.value = 'Сервер недоступен'
    }
  }

  // Очистка ошибок
  const clearError = () => {
    lastError.value = ''
  }

  // Вычисляемое свойство для общего состояния
  const apiStatus = computed(() => {
    if (!isOnline.value) return 'offline'
    if (!isApiAvailable.value) return 'unavailable'
    return 'available'
  })

  // Инициализация слушателей
  if (typeof window !== 'undefined') {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
  }

  return {
    isOnline,
    isApiAvailable,
    lastError,
    apiStatus,
    updateOnlineStatus,
    checkApiAvailability,
    clearError,
  }
}
