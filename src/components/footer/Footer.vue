<template>
  <div class="footer">© 2024 Кафедра неврологии. Все права защищены.</div>
</template>

<script setup></script>

<style lang="scss">
.footer {
  height: 20px;
  margin-top: auto;
  border-top: 1px solid #2e2e2e;
  width: 100%;
  text-align: center;
  text-wrap: nowrap;

  @media (min-width: 1280px) {
    & {
      font-size: calc(3 * 0.25vw);
    }
  }
}
</style>
