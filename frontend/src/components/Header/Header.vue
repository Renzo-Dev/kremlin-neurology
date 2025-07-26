<template>
  <header
    data-aos="fade"
    data-aos-easing="ease"
    data-aos-duration="1500"
    class="header"
  >
    <!--    Flag    -->
    <Flag />
    <!--    Text    -->
    <TextHeader />
    <!--    Images  -->
    <Images />
    <!--    Navigation List    -->
    <NavList />
    <!--    Menu Nav Button    -->
    <MenuNavButton />
  </header>
</template>

<script setup lang="ts">
import Flag from '@/components/Header/Flag.vue'
import TextHeader from '@/components/Header/TextHeader.vue'
import Images from '@/components/Header/Images.vue'
import NavList from '@/components/Header/NavList.vue'
import MenuNavButton from '@/components/Header/MenuNavButton.vue'
</script>

<style scoped lang="scss">
@use '@/assets/styles/Header/Header.scss';
</style>
