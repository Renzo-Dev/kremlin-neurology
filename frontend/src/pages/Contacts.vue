<template>
  <div class="contacts-page">
    <HeroSection />
    <ContactInfo />
    <ContactPerson />
    <LocationMap />
    <TransportInfo />
  </div>
</template>

<script>
import ContactInfo from '@/components/pages/Contacts/ContactInfo/ContactInfo.vue'
import ContactPerson from '@/components/pages/Contacts/ContactPerson/ContactPerson.vue'
import HeroSection from '@/components/pages/Contacts/HeroSection/HeroSection.vue'
import LocationMap from '@/components/pages/Contacts/LocationMap/LocationMap.vue'
import TransportInfo from '@/components/pages/Contacts/TransportInfo/TransportInfo.vue'

export default {
  name: 'ContactsPage',
  components: {
    HeroSection,
    ContactInfo,
    ContactPerson,
    LocationMap,
    TransportInfo,
  },
  metaInfo: {
    title: 'Контакты - Кафедра неврологии',
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/Contacts/contacts';

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
