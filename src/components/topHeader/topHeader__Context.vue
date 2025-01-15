<template>
  <div class="top_header__context">
    <router-link class="link" :to="{ name: 'home' }">
      <div class="context">Кафедра неврологии Официальный сайт</div>
      <div class="context">
        ФГБУ ДПО "Центральная государственная медицинская академия" УД
        Президента РФ
      </div>
    </router-link>
  </div>
</template>

<script lang="js">
export default {
  name: "topHeader__Context",
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/components/topHeader/topHeader__context";
</style>
