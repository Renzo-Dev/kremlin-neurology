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
import { scrollToSection } from '@/utils/helpers/smoothScroll'

export default {
  name: 'HeroSection',
  methods: {
    scrollToSection,
  },
}
</script>

<style lang="scss" scoped>
@use './HeroSection.scss';
</style>
