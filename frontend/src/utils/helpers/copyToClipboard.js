/**
 * Копирует текст в буфер обмена
 * @param {string} text - Текст для копирования
 * @param {Object} options - Дополнительные опции
 * @param {string} options.successMessage - Сообщение об успехе (по умолчанию: "Скопировано!")
 * @param {string} options.errorMessage - Сообщение об ошибке (по умолчанию: "Ошибка копирования")
 * @param {number} options.duration - Длительность показа сообщения в мс (по умолчанию: 2000)
 * @returns {Promise<boolean>} - Promise с результатом операции
 */
export const copyToClipboard = async (text, options = {}) => {
  const {
    successMessage = 'Скопировано!',
    errorMessage = 'Ошибка копирования',
    duration = 2000,
  } = options

  try {
    // Пытаемся использовать современный Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      showNotification(successMessage, 'success', duration)
      return true
    } else {
      // Fallback для старых браузеров
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      const result = document.execCommand('copy')
      document.body.removeChild(textArea)

      if (result) {
        showNotification(successMessage, 'success', duration)
        return true
      } else {
        throw new Error('execCommand failed')
      }
    }
  } catch (error) {
    console.error('Copy to clipboard failed:', error)
    showNotification(errorMessage, 'error', duration)
    return false
  }
}

/**
 * Показывает уведомление
 * @param {string} message - Сообщение
 * @param {string} type - Тип уведомления ('success' или 'error')
 * @param {number} duration - Длительность показа в мс
 */
const showNotification = (message, type, duration) => {
  // Удаляем существующие уведомления
  const existingNotifications = document.querySelectorAll('.copy-notification')
  existingNotifications.forEach(notification => notification.remove())

  // Создаем новое уведомление
  const notification = document.createElement('div')
  notification.className = `copy-notification copy-notification--${type}`
  notification.textContent = message

  // Добавляем стили
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '12px 20px',
    borderRadius: '8px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    zIndex: '10000',
    opacity: '0',
    transform: 'translateX(100%)',
    transition: 'all 0.3s ease',
    maxWidth: '300px',
    wordWrap: 'break-word',
  })

  // Устанавливаем цвета в зависимости от типа
  if (type === 'success') {
    notification.style.background = '#10b981'
  } else {
    notification.style.background = '#ef4444'
  }

  // Добавляем в DOM
  document.body.appendChild(notification)

  // Анимация появления
  setTimeout(() => {
    notification.style.opacity = '1'
    notification.style.transform = 'translateX(0)'
  }, 10)

  // Автоматическое скрытие
  setTimeout(() => {
    notification.style.opacity = '0'
    notification.style.transform = 'translateX(100%)'
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, duration)
}

/**
 * Создает копируемую ссылку с обработчиком клика
 * @param {string} text - Текст для копирования
 * @param {Object} options - Опции для copyToClipboard
 * @returns {Object} - Объект с href и onClick для использования в <a>
 */
export const createCopyableLink = (text, options = {}) => {
  return {
    href: '#',
    onClick: e => {
      e.preventDefault()
      copyToClipboard(text, options)
    },
  }
}

/**
 * Хук для Vue компонентов (если используется Composition API)
 * @returns {Object} - Объект с функциями для копирования
 */
export const useCopyToClipboard = () => {
  return {
    copyToClipboard,
    createCopyableLink,
  }
}
