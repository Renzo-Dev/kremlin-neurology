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
import { easeInOutCubic } from '@/utils/helpers/easing'

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
        const shouldShow = window.scrollY > 300
        if (this.showScrollTop !== shouldShow) {
          this.showScrollTop = shouldShow
        }
      }, 100)
    },
    scrollToTop() {
      const startPosition = window.scrollY
      const duration = 800 // 0.8 секунды
      let start = null

      const animation = currentTime => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const run = easeInOutCubic(
          timeElapsed,
          startPosition,
          -startPosition,
          duration
        )
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }

      requestAnimationFrame(animation)
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;
@use './ScrollToTop.scss' as *;
</style>
