<template>
  <router-link class="top_header__context_link" :to="{ name: 'Home' }">
    <div class="context">Кафедра неврологии Официальный сайт</div>
    <div class="context">
      ФГБУ ДПО "Центральная государственная медицинская академия" УД Президента
      РФ
    </div>
  </router-link>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'topHeader__Context',
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/topHeader/topHeader__context';
</style>
