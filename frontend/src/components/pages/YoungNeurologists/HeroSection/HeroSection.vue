<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="facade-overlay"></div>
      <div class="facade-image"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Школа<br />
          <span class="title-accent">молодых неврологов</span>
        </h1>
        <p class="hero-subtitle">
          Научный кружок при кафедре неврологии<br />
          ФГБУ ДПО "ЦГМА" УД Президента РФ
        </p>
        <div class="hero-description">
          <p>
            Регулярные учебно-научные конференции для ординаторов, аспирантов и
            студентов, интересующихся неврологией
          </p>
        </div>
        <div class="hero-actions">
          <button @click="scrollToSection('about')" class="btn-primary">
            Узнать больше
          </button>
          <button @click="scrollToSection('schedule')" class="btn-secondary">
            Расписание
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
