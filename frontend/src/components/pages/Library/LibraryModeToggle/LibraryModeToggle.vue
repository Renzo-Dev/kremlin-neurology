<template>
  <div class="library-mode-toggle">
    <div class="mode-switcher">
      <button
        class="mode-button"
        :class="{ 'mode-button--active': isPublicMode }"
        @click="switchToPublic"
        :disabled="isPublicMode"
      >
        <svg
          class="mode-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15,3 21,3 21,9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        <span class="mode-text">Публичная</span>
      </button>

      <button
        class="mode-button"
        :class="{ 'mode-button--active': isPrivateMode }"
        @click="handlePrivateModeClick"
        :disabled="isPrivateMode"
      >
        <svg
          class="mode-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10"
          />
        </svg>
        <span class="mode-text">Приватная</span>
      </button>
    </div>

    <div class="access-status">
      <div
        v-if="isPrivateMode && hasAccess"
        class="status-item status-item--private-authorized"
      >
        <svg
          class="status-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22,4 12,14.01 9,11.01" />
        </svg>
        <span class="status-text">Доступ разрешен</span>
      </div>

      <div
        v-else-if="isPrivateMode && !hasAccess"
        class="status-item status-item--private-unauthorized"
      >
        <svg
          class="status-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <span class="status-text">Требуется пароль</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useFileAccess } from '@/composables/library/useFileAccess'
import { useLibraryMode } from '@/composables/library/useLibraryMode'

export default {
  name: 'LibraryModeToggle',
  setup() {
    const { isPublicMode, isPrivateMode, switchToPublic, switchToPrivate } =
      useLibraryMode()

    const { hasAccess, openPasswordModal } = useFileAccess()

    const handlePrivateModeClick = () => {
      if (!hasAccess.value) {
        openPasswordModal()
      } else {
        switchToPrivate()
      }
    }

    return {
      isPublicMode,
      isPrivateMode,
      hasAccess,
      switchToPublic,
      handlePrivateModeClick,
    }
  },
}
</script>

<style lang="scss" scoped>
@use './LibraryModeToggle.scss';
</style>
