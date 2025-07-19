<template>
  <header class="header">
    <!--    Flag    -->
    <Flag />
    <!--    Text    -->
    <TextHeader />
    <!--    Images  -->
    <Images />
    <!--  Nav list  -->
    <NavList />
  </header>
</template>

<script setup lang="ts">
import Flag from '@/components/Header/Flag.vue'
import TextHeader from '@/components/Header/TextHeader.vue'
import Images from '@/components/Header/Images.vue'
import NavList from '@/components/Header/NavList.vue'
</script>

<style scoped lang="scss">
@use '@/assets/styles/Header/Header.scss';
</style>
