<template>
  <nav class="header-navigation" role="navigation" aria-label="Главное меню">
    <button
      class="header-navigation__mobile-toggle"
      :class="{ 'header-navigation__mobile-toggle--active': isMobileMenuOpen }"
      @click="toggleMobileMenu"
      aria-label="Открыть меню"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul
      id="main-navlist"
      class="header-navigation__list"
      :class="{ 'header-navigation__list--mobile-open': isMobileMenuOpen }"
    >
      <li class="header-navigation__item">
        <router-link to="/" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          <span class="header-navigation__text">Главная</span>
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link to="/education" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M22 10v6" />
            <path d="M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          <span class="header-navigation__text">Обучение</span>
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link to="/history" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
          <span class="header-navigation__text">История</span>
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link to="/research" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3s-3-1-3-3a3 3 0 0 1 1-1z"
            />
            <line x1="12" y1="17" x2="12.01" y2="17" />
            <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
          <span class="header-navigation__text">Научная работа</span>
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link to="/library" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path
              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            />
          </svg>
          <span class="header-navigation__text">Библиотека</span>
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link to="/clients" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span class="header-navigation__text">Клиентская база</span>
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link to="/conferences" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
          <span class="header-navigation__text">Ежегодные конференции</span>
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link
          to="/young-neurologists"
          exact
          class="header-navigation__link"
        >
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span class="header-navigation__text"
            >Научный кружок "Школа молодых неврологов"</span
          >
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link to="/news" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span class="header-navigation__text">Новости</span>
        </router-link>
      </li>

      <li class="header-navigation__item">
        <router-link to="/contacts" exact class="header-navigation__link">
          <svg
            class="header-navigation__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span class="header-navigation__text">Контактная информация</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNavigation',
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  watch: {
    $route() {
      this.closeMobileMenu()
    },
  },
  mounted() {
    // Закрытие меню при клике вне его
    document.addEventListener('click', this.handleClickOutside)

    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', this.handleKeydown)

    // Закрытие меню при изменении размера экрана
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
    document.removeEventListener('keydown', this.handleKeydown)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      this.updateBodyOverflow()
      this.toggleHeroSection()
    },

    closeMobileMenu() {
      this.isMobileMenuOpen = false
      this.updateBodyOverflow()
      this.toggleHeroSection()
    },

    toggleHeroSection() {
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        if (this.isMobileMenuOpen) {
          // Сразу меняем z-index при открытии
          heroSection.classList.add('hero-section--menu-open')
        } else {
          setTimeout(() => {
            // Убираем класс только после полного закрытия
            heroSection.classList.remove('hero-section--menu-open')
          }, 150) // Синхронизировано с CSS анимацией
        }
      }
    },

    updateBodyOverflow() {
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : ''
    },

    handleClickOutside(event) {
      if (this.isMobileMenuOpen && !this.$el.contains(event.target)) {
        this.closeMobileMenu()
      }
    },

    handleKeydown(event) {
      if (event.key === 'Escape' && this.isMobileMenuOpen) {
        this.closeMobileMenu()
      }
    },

    handleResize() {
      if (window.innerWidth > 768 && this.isMobileMenuOpen) {
        this.closeMobileMenu()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as vr;
@use '@/assets/styles/mixins' as mx;
@use './HeaderNavigation.scss';
</style>
