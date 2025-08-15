<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="facade-overlay"></div>
      <div class="facade-image"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Кафедра<br />
          <span class="title-accent">неврологии</span>
        </h1>
        <p class="hero-subtitle">
          ФГБУ ДПО "Центральная государственная медицинская академия"<br />
          УД Президента РФ
        </p>
        <div class="hero-actions">
          <button @click="scrollToSection('about')" class="btn-primary">
            Узнать больше
          </button>
          <button @click="scrollToSection('contacts')" class="btn-secondary">
            Контакты
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
import { easeInOutCubic } from '@/utils/helpers/easing'

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
        const duration = 1000 // 1 секунда
        let start = null

        const animation = currentTime => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const run = easeInOutCubic(
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
@import './HeroSection.scss';
</style>
