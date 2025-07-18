<template>
  <header class="header">
    <!--    Flag    -->
    <Flag />
    <!--    Text    -->
    <TextHeader />
    <!--    Images  -->
    <Images />
    <!--  Nav list  -->
  </header>
</template>

<script setup lang="ts">
import Flag from '@/components/Header/Flag.vue'
import TextHeader from '@/components/Header/TextHeader.vue'
import Images from '@/components/Header/Images.vue'
import NavList from '@/components/Header/NavList.vue'
</script>

<style scoped lang="scss">
.header {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 5px 1%;
  display: flex;
  justify-content: space-between;
  transition: 0.5s ease;
  background-color: #d9effc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
