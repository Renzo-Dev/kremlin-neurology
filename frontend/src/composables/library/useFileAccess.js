import { useLibraryMode } from '@/composables/library/useLibraryMode'
import { ApiService } from '@/services/apiService'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

// Shared state для всех компонентов
const isAuthenticated = ref(false)
const isAdmin = ref(false)
const isPasswordModalOpen = ref(false)
const password = ref('')
const isLoading = ref(false)
const error = ref('')

// Инициализация состояния из localStorage при загрузке
if (typeof window !== 'undefined') {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
  isAdmin.value = localStorage.getItem('isAdmin') === 'true'
}

export function useFileAccess() {
  const { switchToPrivate } = useLibraryMode()
  const apiService = new ApiService()
  const router = useRouter()

  const hasAccess = computed(() => isAuthenticated.value)

  const openPasswordModal = () => {
    isPasswordModalOpen.value = true
    password.value = ''
    error.value = ''
  }

  const closePasswordModal = () => {
    isPasswordModalOpen.value = false
    password.value = ''
    error.value = ''
  }

  const verifyPassword = async () => {
    if (!password.value.trim()) {
      error.value = 'Введите пароль'
      return false
    }

    isLoading.value = true
    error.value = ''

    try {
      // Проверка пароля через backend API
      const response = await apiService.login({ password: password.value })

      if (response.authenticated) {
        isAuthenticated.value = true
        isAdmin.value = response.isAdmin || false

        // Сохраняем состояние в localStorage для Navigation Guards
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('isAdmin', response.isAdmin ? 'true' : 'false')

        closePasswordModal()

        // Если админ - переходим на админ панель через роутер, иначе на приватную библиотеку
        if (response.isAdmin) {
          router.push('/admin')
        } else {
          // Автоматически переключаемся на приватную библиотеку
          switchToPrivate()
        }
        return true
      } else {
        // Проверяем rate limiting
        if (response.error === 'Rate limit exceeded') {
          error.value = 'Превышено количество попыток входа. Подождите.'
          // Сохраняем время до следующей попытки
          if (response.retry_after) {
            localStorage.setItem('retryAfter', response.retry_after)
          }
        } else if (response.error === 'Invalid password') {
          error.value = 'Неверный пароль'
        } else {
          error.value = response.error || response.message || 'Неверный пароль'
        }

        isAuthenticated.value = false
        isAdmin.value = false

        // Очищаем localStorage
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('isAdmin')

        return false
      }
    } catch (err) {
      // Простая обработка ошибок
      if (
        err.status === 429 ||
        err.message?.includes('Rate limit exceeded') ||
        err.message?.includes('заблокирован')
      ) {
        error.value = 'Превышено количество попыток входа. Подождите.'
        // Сохраняем время до следующей попытки
        if (err.data && err.data.retry_after) {
          localStorage.setItem('retryAfter', err.data.retry_after)
        }
      } else if (
        err.status === 401 ||
        err.message?.includes('Invalid password')
      ) {
        error.value = 'Неверный пароль'
      } else {
        error.value = 'Ошибка подключения к серверу'
      }

      isAuthenticated.value = false
      isAdmin.value = false

      // Очищаем localStorage при ошибке
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('isAdmin')

      return false
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    isAuthenticated.value = false
    isAdmin.value = false

    // Очищаем localStorage при выходе
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('isAdmin')
  }

  return {
    isAuthenticated,
    isAdmin,
    isPasswordModalOpen,
    password,
    isLoading,
    error,
    hasAccess,
    openPasswordModal,
    closePasswordModal,
    verifyPassword,
    logout,
  }
}
