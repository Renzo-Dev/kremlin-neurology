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
.header-text {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  a {
    width: auto;
    height: auto;
    text-wrap: balance;
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

    &:hover {
      color: var(--hv-text-color);
    }

    div {
      height: 100%;
      font-size: 1.4rem;
      font-weight: 400;
    }

    h5 {
      margin-top: 0.5rem;
      height: 100%;
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
}
</style>
