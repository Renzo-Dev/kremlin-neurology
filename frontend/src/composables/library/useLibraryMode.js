import { computed, ref } from 'vue'

// Shared state для всех компонентов
const libraryMode = ref('public')

export function useLibraryMode() {
  const isPrivateMode = computed(() => libraryMode.value === 'private')
  const isPublicMode = computed(() => libraryMode.value === 'public')

  const switchToPublic = () => {
    libraryMode.value = 'public'
  }

  const switchToPrivate = () => {
    libraryMode.value = 'private'
  }

  const toggleMode = () => {
    libraryMode.value = libraryMode.value === 'public' ? 'private' : 'public'
  }

  return {
    libraryMode,
    isPrivateMode,
    isPublicMode,
    switchToPublic,
    switchToPrivate,
    toggleMode,
  }
}
