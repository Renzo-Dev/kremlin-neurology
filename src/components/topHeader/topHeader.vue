<template>
  <header class="top_header">
    <div class="top_header_content">
      <Flag />
      <topHeader__Context />
      <topHeader__Images />
    </div>
    <div class="georgy_lenta">
      <div class="georgy_lenta__context">80 лет Победы</div>
      <div class="georgy_lenta__ribbon-row">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <nav-panel />
  </header>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import Flag from './flag.vue'
import topHeader__Context from './topHeader__Context.vue'
import NavPanel from './navPanel/navPanel.vue'
import topHeader__Images from '@/components/topHeader/topHeader__Images.vue'

export default defineComponent({
  components: { topHeader__Images, NavPanel, topHeader__Context, Flag },
  name: 'topHeader',
  setup() {},
})
</script>

<style lang="scss">
@use '@/assets/styles/components/topHeader/topHeader.scss';
</style>
