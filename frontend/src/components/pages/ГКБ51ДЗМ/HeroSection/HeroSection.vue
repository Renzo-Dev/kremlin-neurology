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
