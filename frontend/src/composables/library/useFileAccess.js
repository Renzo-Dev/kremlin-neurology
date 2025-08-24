import { useLibraryMode } from '@/composables/library/useLibraryMode'
import { ApiService } from '@/services/apiService'
import { computed, ref } from 'vue'

// Shared state для всех компонентов
const isAuthenticated = ref(false)
const isPasswordModalOpen = ref(false)
const password = ref('')
const isLoading = ref(false)
const error = ref('')

export function useFileAccess() {
  const { switchToPrivate } = useLibraryMode()
  const apiService = new ApiService()

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
      
      if (response.success) {
        isAuthenticated.value = true
        hasAccess.value = true
        return true
      } else {
        isAuthenticated.value = false
        hasAccess.value = false
        return false
      }
    } catch (err) {
      isAuthenticated.value = false
      hasAccess.value = false
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
