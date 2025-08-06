<template>
  <Header />
  <div class="main-content">
    <InfoBlock />
    <ContactInfo />
  </div>
</template>

<script setup lang="js">
import InfoBlock from '@/components/HomeView/InfoBlock.vue'
import ContactInfo from '@/components/HomeView/ContactInfo.vue'
import Header from '@/components/HomeView/Header.vue'
</script>

<style scoped lang="scss">
.main-content {
  margin: 15px 0;
  display: flex;
  flex-direction: column;
}
</style>
