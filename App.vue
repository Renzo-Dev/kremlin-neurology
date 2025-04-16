<template>
  <topHeader />
  <main id="main-container">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import topHeader from '@/components/topHeader/topHeader.vue'
import Footer from '@/components/footer/Footer.vue'
</script>

<style lang="scss">
@use '@/assets/styles/app.scss';
@use '@/assets/styles/reset.css';
</style>
