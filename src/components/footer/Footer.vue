<template>
  <footer>© 2024 Кафедра неврологии. Все права защищены.</footer>
</template>

<script setup></script>

<style lang="scss">
footer {
  bottom: 0;
  border-top: 1px solid #2e2e2e;
  width: 100%;
  text-align: center;
  text-wrap: nowrap;
  margin-top: auto;

  @media (min-width: 1280px) {
    & {
      font-size: calc(3 * 0.25vw);
    }
  }
}
</style>
