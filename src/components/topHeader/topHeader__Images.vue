<template>
  <div class="top_header__images">
    <UDPRF />
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import UDPRF from '@/assets/icons/UDPRF.vue'

export default defineComponent({
  components: { UDPRF },
  name: 'topHeader__Images',
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/topHeader/topHeader_images';
</style>
