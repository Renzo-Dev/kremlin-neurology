<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="hospital-overlay"></div>
      <div class="hospital-image"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          КБ №1<br />
          <span class="title-accent">(Волынская)</span>
        </h1>
        <p class="hero-subtitle">
          ФГБУ "Клиническая больница №1 (Волынская)"<br />
          Управления делами Президента Российской Федерации
        </p>
        <div class="hero-actions">
          <button @click="scrollToSection('about')" class="btn-primary">
            Узнать больше
          </button>
          <button @click="scrollToSection('features')" class="btn-secondary">
            Наши услуги
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
