<template>
  <div class="header-text">
    <router-link :to="{ name: 'Home' }">
      <div>Кафедра неврологии Официальный сайт</div>
      <h5>
        ФГБУ ДПО "Центральная государственная медицинская академия" УД
        Президента РФ
      </h5>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/styles/Header/TextHeader.scss';
</style>
