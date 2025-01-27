<template>
  <header class="top_header">
    <div class="top_header_content">
      <Flag />
      <topHeader__Context />
      <top-header__Images />
    </div>
    <nav-panel />
  </header>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import Flag from './flag.vue'
import UDPRF from '../../assets/icons/UDPRF.vue'
import TopHeader__Context from './topHeader__Context.vue'
import TopHeader__Images from './topHeader__Images.vue'
import NavPanel from './navPanel/navPanel.vue'

export default defineComponent({
  components: { NavPanel, TopHeader__Images, TopHeader__Context, UDPRF, Flag },
  name: 'topHeader',
})
</script>

<style lang="scss">
@use '@/assets/styles/components/topHeader/topHeader.scss';
</style>
