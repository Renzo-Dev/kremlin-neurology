import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Composable для управления мобильным меню
 * @returns {Object} Объект с состоянием и методами мобильного меню
 */
export function useMobileMenu() {
  const isMobileMenuOpen = ref(false)
  const scrollTimeout = ref(null)

  /**
   * Переключает состояние мобильного меню
   */
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    updateBodyOverflow()
    toggleHeroSection()
  }

  /**
   * Закрывает мобильное меню
   */
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    updateBodyOverflow()
    toggleHeroSection()
  }

  /**
   * Управляет z-index hero секции при открытии меню
   */
  const toggleHeroSection = () => {
    const heroSection = document.querySelector('.hero-section')
    if (heroSection) {
      if (isMobileMenuOpen.value) {
        // Сразу меняем z-index при открытии
        heroSection.classList.add('hero-section--menu-open')
      } else {
        setTimeout(() => {
          // Убираем класс только после полного закрытия
          heroSection.classList.remove('hero-section--menu-open')
        }, 150) // Синхронизировано с CSS анимацией
      }
    }
  }

  /**
   * Управляет overflow body для предотвращения прокрутки
   */
  const updateBodyOverflow = () => {
    document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
  }

  /**
   * Обработчик клика вне меню
   */
  const handleClickOutside = (event) => {
    if (isMobileMenuOpen.value && !event.target.closest('.header-navigation')) {
      closeMobileMenu()
    }
  }

  /**
   * Обработчик нажатия клавиш
   */
  const handleKeydown = (event) => {
    if (event.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }

  /**
   * Обработчик изменения размера экрана
   */
  const handleResize = () => {
    if (window.innerWidth > 768 && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }

  /**
   * Обработчик изменения маршрута
   */
  const handleRouteChange = () => {
    closeMobileMenu()
  }

  // Установка и удаление event listeners
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', handleResize)
    
    if (scrollTimeout.value) {
      clearTimeout(scrollTimeout.value)
    }
  })

  return {
    // Состояние
    isMobileMenuOpen,
    
    // Методы
    toggleMobileMenu,
    closeMobileMenu,
    handleRouteChange,
    
    // Внутренние методы (для тестирования)
    _updateBodyOverflow: updateBodyOverflow,
    _toggleHeroSection: toggleHeroSection,
  }
}
