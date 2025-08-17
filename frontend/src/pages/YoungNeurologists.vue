<template>
  <div class="young-neurologists-page">
    <HeroSection />
    <AboutSection />
    <ScheduleSection />
    <ArchiveSection />
  </div>
</template>

<script>
import AboutSection from '@/components/pages/YoungNeurologists/AboutSection/AboutSection.vue'
import ArchiveSection from '@/components/pages/YoungNeurologists/ArchiveSection/ArchiveSection.vue'
import HeroSection from '@/components/pages/YoungNeurologists/HeroSection/HeroSection.vue'
import ScheduleSection from '@/components/pages/YoungNeurologists/ScheduleSection/ScheduleSection.vue'

export default {
  name: 'YoungNeurologists',
  components: {
    HeroSection,
    AboutSection,
    ScheduleSection,
    ArchiveSection,
  },
}
</script>

<style lang="scss" scoped>
.young-neurologists-page {
  min-height: 100vh;
}
</style>
