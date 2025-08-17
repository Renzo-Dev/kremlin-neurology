<template>
  <div class="gkb51-page">
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <MapSection />
  </div>
</template>

<script>
import AboutSection from '@/components/pages/ГКБ51ДЗМ/AboutSection/AboutSection.vue'
import FeaturesSection from '@/components/pages/ГКБ51ДЗМ/FeaturesSection/FeaturesSection.vue'
import HeroSection from '@/components/pages/ГКБ51ДЗМ/HeroSection/HeroSection.vue'
import MapSection from '@/components/pages/ГКБ51ДЗМ/MapSection/MapSection.vue'

export default {
  name: 'ГКБ51ДЗМ',
  components: {
    HeroSection,
    AboutSection,
    FeaturesSection,
    MapSection,
  },
}
</script>

<style lang="scss" scoped>
.gkb51-page {
  min-height: 100vh;
}
</style>
