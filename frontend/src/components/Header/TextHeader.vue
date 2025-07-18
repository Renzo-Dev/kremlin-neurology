<template>
  <div class="header-text">
    <router-link class="" :to="{ name: 'Home' }">
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
.header-text {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  a {
    text-wrap: balance;
    width: auto;
    height: auto;
    padding: 1rem;
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    transition: 0.2s ease;
    background-color: red;

    &:hover {
      color: var(--hv-text-color);
    }

    h5 {
      height: 100%;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
}
</style>
