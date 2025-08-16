<template>
  <div class="clients-page">
    <HeroSection />
    <ClinicalBasesSection />
    <NavigationButtons />
  </div>
</template>

<script>
import ClinicalBasesSection from '@/components/pages/Clients/ClinicalBasesSection/ClinicalBasesSection.vue';
import HeroSection from '@/components/pages/Clients/HeroSection/HeroSection.vue';
import NavigationButtons from '@/components/pages/Clients/NavigationButtons/NavigationButtons.vue';

export default {
  name: 'ClientsPage',
  components: {
    HeroSection,
    ClinicalBasesSection,
    NavigationButtons,
  },
  metaInfo: {
    title: 'Клинические базы кафедры неврологии',
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/Clients/clients';

// Глобальные стили для плавной прокрутки
:global(html) {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: no-preference) {
  :global(html) {
    scroll-behavior: smooth;
  }
}
</style>
