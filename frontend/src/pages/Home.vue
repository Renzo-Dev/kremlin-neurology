<template>
  <Header />
  <div class="main-content">
    <InfoBlock />
    <ContactInfo />
  </div>
</template>

<script setup lang="js">
import InfoBlock from '@/components/pages/Home/InfoBlock.vue'
import ContactInfo from '@/components/pages/Home/ContactInfo.vue'
import Header from '@/components/pages/Home/Header.vue'
</script>

<style scoped lang="scss">
.main-content {
  margin: 15px 0;
  display: flex;
  flex-direction: column;
}
</style>
