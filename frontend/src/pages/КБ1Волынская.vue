<template>
  <div class="kb1vol-page">
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <ContactSection />
  </div>
</template>

<script>
import AboutSection from '@/components/pages/КБ1Волынская/AboutSection/AboutSection.vue'
import ContactSection from '@/components/pages/КБ1Волынская/ContactSection/ContactSection.vue'
import FeaturesSection from '@/components/pages/КБ1Волынская/FeaturesSection/FeaturesSection.vue'
import HeroSection from '@/components/pages/КБ1Волынская/HeroSection/HeroSection.vue'

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
