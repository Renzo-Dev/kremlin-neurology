<template>
  <div class="home-page">
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <ContactSection />
  </div>
</template>

<script>
import AboutSection from '@/components/pages/Home/AboutSection/AboutSection.vue'
import ContactSection from '@/components/pages/Home/ContactSection/ContactSection.vue'
import HeroSection from '@/components/pages/Home/HeroSection/HeroSection.vue'
import StatsSection from '@/components/pages/Home/StatsSection/StatsSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    AboutSection,
    StatsSection,
    ContactSection,
  },
  metaInfo: {
    title: 'Кафедра неврологии - Главная',
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/home/home';

// Добавляем глобальные стили для плавной прокрутки
:global(html) {
  scroll-behavior: smooth;
}

// Для браузеров, которые не поддерживают scroll-behavior: smooth
@media (prefers-reduced-motion: no-preference) {
  :global(html) {
    scroll-behavior: smooth;
  }
}
</style>
