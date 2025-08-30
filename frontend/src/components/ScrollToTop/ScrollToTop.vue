<template>
  <button
    v-if="showScrollTop"
    @click="scrollToTop"
    class="scroll-to-top-btn"
    aria-label="Прокрутить вверх"
    title="Прокрутить вверх"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18,15 12,9 6,15"></polyline>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      showScrollTop: false,
      scrollTimeout: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout)
    }
  },
  methods: {
    handleScroll() {
      // Throttling для предотвращения мерцания
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout)
      }

      this.scrollTimeout = setTimeout(() => {
        const shouldShow = window.scrollY > 200 // Уменьшил порог с 300 до 200px
        if (this.showScrollTop !== shouldShow) {
          this.showScrollTop = shouldShow
        }
      }, 50) // Уменьшил задержку с 100 до 50мс для более быстрой реакции
    },
    scrollToTop() {
      const startPosition = window.scrollY
      const duration = 200 // Уменьшил до 200мс для быстрого движения
      let start = null

      const animation = currentTime => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)

        // Используем более плавную функцию easing для лучшего эффекта
        const easedProgress = this.easeOutCubic(progress)
        const currentPosition = startPosition - startPosition * easedProgress

        window.scrollTo(0, currentPosition)

        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    },

    // Добавляем собственную функцию easing для более плавного движения
    easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3)
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as vr;
@use '@/assets/styles/mixins' as mx;
@use './ScrollToTop.scss';
</style>
