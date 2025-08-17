<template>
  <div class="ckbp-page">
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <ContactSection />
  </div>
</template>

<script>
import AboutSection from '@/components/pages/ЦКБП/AboutSection/AboutSection.vue'
import ContactSection from '@/components/pages/ЦКБП/ContactSection/ContactSection.vue'
import FeaturesSection from '@/components/pages/ЦКБП/FeaturesSection/FeaturesSection.vue'
import HeroSection from '@/components/pages/ЦКБП/HeroSection/HeroSection.vue'

export default {
  name: 'ЦКБП',
  components: {
    HeroSection,
    AboutSection,
    FeaturesSection,
    ContactSection,
  },
}
</script>

<style lang="scss" scoped>
.ckbp-page {
  min-height: 100vh;
}
</style>
