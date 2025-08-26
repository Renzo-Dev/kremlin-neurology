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
                    :type="showPassword ? 'text' : 'password'"
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

                <!-- Ошибки -->
                <div v-if="error" class="error-message">
                  <div class="error-text">{{ error }}</div>

                  <!-- Rate limiting информация -->
                  <div v-if="isRateLimited" class="rate-limit-info">
                    <div class="retry-timer">
                      <span class="timer-icon">⏰</span>
                      Следующая попытка через:
                      <strong>{{ formatRetryTime(retryAfter) }}</strong>
                    </div>
                    <div class="rate-limit-tip">
                      💡 Подождите немного перед следующей попыткой
                    </div>
                  </div>
                </div>
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
                  :disabled="isLoading || !password.trim() || isRateLimited"
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
import { computed, onMounted, onUnmounted, ref } from 'vue'

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
    const retryAfter = ref(0)
    const retryTimer = ref(null)

    // Вычисляем, заблокирован ли пользователь
    const isRateLimited = computed(() => {
      return (
        error.value.includes('превышено') ||
        error.value.includes('слишком много')
      )
    })

    // Форматирование времени до следующей попытки
    const formatRetryTime = seconds => {
      if (seconds <= 0) return 'сейчас'

      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60

      if (minutes > 0) {
        return `${minutes} мин ${remainingSeconds} сек`
      }
      return `${remainingSeconds} сек`
    }

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value
    }

    // Запуск таймера для rate limiting
    const startRetryTimer = () => {
      const storedRetryAfter = localStorage.getItem('retryAfter')
      if (storedRetryAfter) {
        retryAfter.value = parseInt(storedRetryAfter)

        if (retryAfter.value > 0) {
          retryTimer.value = setInterval(() => {
            retryAfter.value--
            localStorage.setItem('retryAfter', retryAfter.value.toString())

            if (retryAfter.value <= 0) {
              localStorage.removeItem('retryAfter')
              clearInterval(retryTimer.value)
              retryTimer.value = null
            }
          }, 1000)
        }
      }
    }

    // Очистка таймера
    const clearRetryTimer = () => {
      if (retryTimer.value) {
        clearInterval(retryTimer.value)
        retryTimer.value = null
      }
    }

    onMounted(() => {
      startRetryTimer()
    })

    onUnmounted(() => {
      clearRetryTimer()
    })

    return {
      isPasswordModalOpen,
      password,
      isLoading,
      error,
      retryAfter,
      showPassword,
      isRateLimited,
      closePasswordModal,
      verifyPassword,
      togglePasswordVisibility,
      formatRetryTime,
    }
  },
}
</script>

<style lang="scss" scoped>
.password-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.password-modal {
  background: white;
  border-radius: 12px;
  padding: 0;
  width: 90%;
  max-width: 400px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  color: #6b7280;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #374151;
  }

  svg {
    width: 20px;
    height: 20px;
  }
}

.modal-body {
  padding: 20px 24px 24px;
}

.password-form {
  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  .password-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .password-input {
    width: 100%;
    padding: 12px 44px 12px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.2s;
    background: white;

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    &--error {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    &:disabled {
      background: #f9fafb;
      cursor: not-allowed;
    }
  }

  .toggle-password {
    position: absolute;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    color: #6b7280;
    transition: all 0.2s;

    &:hover {
      background: #f3f4f6;
      color: #374151;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
}

.error-message {
  margin-top: 12px;
  padding: 12px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
}

.error-text {
  color: #dc2626;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.rate-limit-info {
  .retry-timer {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 13px;
    color: #7c2d12;

    .timer-icon {
      font-size: 16px;
    }

    strong {
      color: #dc2626;
    }
  }

  .rate-limit-tip {
    font-size: 12px;
    color: #92400e;
    font-style: italic;
  }
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--secondary {
    background: white;
    color: #374151;
    border: 1px solid #d1d5db;

    &:hover:not(:disabled) {
      background: #f9fafb;
      border-color: #9ca3af;
    }
  }

  &--primary {
    background: #3b82f6;
    color: white;

    &:hover:not(:disabled) {
      background: #2563eb;
    }
  }
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// Анимации
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
