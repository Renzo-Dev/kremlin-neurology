<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="hospital-overlay"></div>
      <div class="hospital-image"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Городская клиническая<br />
          <span class="title-accent">больница №51 ДЗМ</span>
        </h1>
        <p class="hero-subtitle">
          Первая клиническая база кафедры неврологии<br />
          с 1968 года
        </p>
        <div class="hero-actions">
          <button @click="scrollToSection('about')" class="btn-primary">
            Узнать больше
          </button>
          <button @click="scrollToSection('map')" class="btn-secondary">
            Как добраться
          </button>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script>
import { easeInOutFast } from '@/utils/helpers/easing'

export default {
  name: 'HeroSection',
  methods: {
    scrollToSection(sectionId) {
      const targetElement = document.getElementById(sectionId)
      if (targetElement) {
        const headerHeight = 80
        const targetPosition = targetElement.offsetTop - headerHeight
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 600
        let start = null

        const animation = currentTime => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const run = easeInOutFast(
            timeElapsed,
            startPosition,
            distance,
            duration
          )
          window.scrollTo(0, run)
          if (timeElapsed < duration) requestAnimationFrame(animation)
        }

        requestAnimationFrame(animation)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use './HeroSection.scss';
</style>
