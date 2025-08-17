import { easeInOutFast } from './easing'

/**
 * Плавный скролл к элементу с учетом высоты header
 * @param {string} sectionId - ID элемента для скролла
 * @param {number} headerHeight - Высота фиксированного header (по умолчанию 80px)
 * @param {number} duration - Длительность анимации в миллисекундах (по умолчанию 600ms)
 */
export function scrollToSection(sectionId, headerHeight = 80, duration = 600) {
  const targetElement = document.getElementById(sectionId)
  if (targetElement) {
    const targetPosition = targetElement.offsetTop - headerHeight
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let start = null

    const animation = currentTime => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const run = easeInOutFast(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    requestAnimationFrame(animation)
  }
}

/**
 * Плавный скролл к элементу с дополнительными опциями
 * @param {string} sectionId - ID элемента для скролла
 * @param {Object} options - Опции скролла
 * @param {number} options.headerHeight - Высота header
 * @param {number} options.duration - Длительность анимации
 * @param {string} options.behavior - Поведение скролла ('smooth' | 'auto')
 */
export function scrollToSectionWithOptions(sectionId, options = {}) {
  const { headerHeight = 80, duration = 600, behavior = 'smooth' } = options

  if (behavior === 'smooth') {
    scrollToSection(sectionId, headerHeight, duration)
  } else {
    // Fallback для браузеров без поддержки smooth scroll
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - headerHeight
      window.scrollTo(0, targetPosition)
    }
  }
}
