<template>
  <header class="header">
    <div class="header__background">
      <div class="header__background-pattern"></div>
      <div class="header__background-overlay"></div>
    </div>
    <div class="container">
      <div class="header__content">
        <div class="header__logo-section">
          <a href="/" class="header__logo-link">
            <div class="header__logo-icon">
              <div class="header__logo-inner">
                <svg
                  class="header__logo-symbol"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  />
                </svg>
              </div>
              <div class="header__logo-glow"></div>
            </div>
            <div class="header__title-section">
              <h1 class="header__title">Кафедра неврологии</h1>
              <p class="header__institution">
                ФГБУ ДПО "Центральная государственная медицинская академия" УД
                Президента РФ
              </p>
            </div>
          </a>
        </div>

        <div class="header__nav-wrapper">
          <HeaderNavigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.vue'

export default {
  name: 'Header',
  components: {
    HeaderNavigation,
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;
@use './Header.scss' as *;
</style>
