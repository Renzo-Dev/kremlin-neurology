<template>
  <div class="footer">
    © {{ year }} Кафедра неврологии. Все права защищены.
  </div>
</template>

<script lang="js">
export default {
  setup() {
    const year = new Date().getUTCFullYear()
    return {
      year,
    }
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/components/footer/Footer';
</style>
