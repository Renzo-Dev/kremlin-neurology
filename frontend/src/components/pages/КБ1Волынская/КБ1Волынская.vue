<template>
  <div class="kb1vol-page">
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <ContactSection />
  </div>
</template>

<script>
import AboutSection from './AboutSection/AboutSection.vue'
import ContactSection from './ContactSection/ContactSection.vue'
import FeaturesSection from './FeaturesSection/FeaturesSection.vue'
import HeroSection from './HeroSection/HeroSection.vue'

export default {
  name: 'КБ1Волынская',
  components: {
    HeroSection,
    AboutSection,
    FeaturesSection,
    ContactSection,
  },
}
</script>

<style lang="scss" scoped>
.kb1vol-page {
  min-height: 100vh;
}
</style>
