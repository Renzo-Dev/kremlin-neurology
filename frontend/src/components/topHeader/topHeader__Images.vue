<template>
  <div class="top_header__images">
    <UDPRF />
    <holiday-image />
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import UDPRF from '@/assets/icons/UDPRF.vue'
import HolidayImage from '@/components/topHeader/HolidayImage.vue'

export default defineComponent({
  components: { HolidayImage, UDPRF },
  name: 'topHeader__Images',
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/topHeader/topHeader_images';
</style>
