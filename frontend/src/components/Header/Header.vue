<template>
  <header class="header">
    <!--    Flag    -->
    <Flag />
    <!--    Text    -->
    <TextHeader />
    <!--    Images  -->
    <Images />
  </header>
</template>

<script setup lang="ts">
import Flag from '@/components/Header/Flag.vue'
import TextHeader from '@/components/Header/TextHeader.vue'
import Images from '@/components/Header/Images.vue'
</script>

<style scoped lang="scss">
@use '@/assets/styles/Header/Header.scss';
</style>
