<template>
  <header class="top_header">
    <img
      class="background_holiday"
      src="@/assets/images/GeorgLenta.png"
      alt="Георгиевская лента"
    />
    <div class="top_header_content">
      <Flag />
      <topHeader__Context />
      <topHeader__Images />
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
})
</script>

<style lang="scss">
@use '@/assets/styles/components/topHeader/topHeader.scss';

.background_holiday {
  position: absolute;
  top: -50px;
  right: 150px;
  display: flex;
  flex-direction: column;
  z-index: -1;
  max-width: calc(250 * 0.25vw);
  max-height: calc(40 * 0.25vw);
}
</style>
