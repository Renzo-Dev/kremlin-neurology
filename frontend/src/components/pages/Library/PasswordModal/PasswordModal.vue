<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isPasswordModalOpen"
        class="password-modal-overlay"
        @click="closePasswordModal"
      >
        <div class="password-modal" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title">Доступ к приватной библиотеке</h3>
            <button
              class="close-button"
              @click="closePasswordModal"
              aria-label="Закрыть"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div class="modal-body">
            <div class="password-form">
              <div class="form-group">
                <label for="password" class="form-label">Введите пароль</label>
                <div class="password-input-wrapper">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="password-input"
                    :class="{ 'password-input--error': error }"
                    placeholder="Введите пароль для доступа"
                    @keyup.enter="verifyPassword"
                    :disabled="isLoading"
                    autocomplete="current-password"
                  />
                  <button
                    type="button"
                    class="toggle-password"
                    @click="togglePasswordVisibility"
                    :disabled="isLoading"
                  >
                    <svg
                      v-if="showPassword"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <svg
                      v-else
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                      />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  </button>
                </div>
                <div v-if="error" class="error-message">{{ error }}</div>
              </div>

              <div class="form-actions">
                <button
                  type="button"
                  class="btn btn--secondary"
                  @click="closePasswordModal"
                  :disabled="isLoading"
                >
                  Отмена
                </button>
                <button
                  type="button"
                  class="btn btn--primary"
                  @click="verifyPassword"
                  :disabled="isLoading || !password.trim()"
                >
                  <span v-if="isLoading" class="loading-spinner"></span>
                  <span v-else>Войти</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { useFileAccess } from '@/composables/library/useFileAccess'
import { ref } from 'vue'

export default {
  name: 'PasswordModal',
  setup() {
    const {
      isPasswordModalOpen,
      password,
      isLoading,
      error,
      closePasswordModal,
      verifyPassword,
    } = useFileAccess()

    const showPassword = ref(false)

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value
    }

    return {
      isPasswordModalOpen,
      password,
      isLoading,
      error,
      showPassword,
      closePasswordModal,
      verifyPassword,
      togglePasswordVisibility,
    }
  },
}
</script>

<style lang="scss" scoped>
@use './PasswordModal.scss';
</style>
