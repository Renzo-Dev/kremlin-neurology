<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="facade-overlay"></div>
      <div class="facade-image"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Клинические базы<br />
          <span class="title-accent">кафедры неврологии</span>
        </h1>
        <p class="hero-subtitle">
          Многопрофильные клинические базы для обучения врачей-неврологов<br />
          с современным оборудованием и широкими возможностями
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style lang="scss" scoped>
@use './HeroSection.scss';
</style>
