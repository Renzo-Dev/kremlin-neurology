import { useLibraryMode } from '@/composables/library/useLibraryMode'
import { computed, ref } from 'vue'

// Shared state для всех компонентов
const isAuthenticated = ref(false)
const isPasswordModalOpen = ref(false)
const password = ref('')
const isLoading = ref(false)
const error = ref('')

export function useFileAccess() {
  const { switchToPrivate } = useLibraryMode()

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
      // Мок проверка пароля для тестирования
      if (password.value === '123456') {
        isAuthenticated.value = true
        closePasswordModal()
        // Автоматически переключаемся на приватную библиотеку
        switchToPrivate()
        return true
      } else {
        error.value = 'Неверный пароль'
        return false
      }
    } catch (err) {
      error.value = 'Ошибка подключения'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    isAuthenticated.value = false
  }

  return {
    isAuthenticated,
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
