<template>
  <div class="conference-dropdown">Hello World</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  props: {},
  setup(props, { emit }) {
    emit('dropDownActive', true)
    return {}
  },
})
</script>

<style scoped lang="scss">
.conference-dropdown {
  position: absolute;
  z-index: 1000;
  top: 100px;
  left: 0;
  width: 100%;
  background-color: #fff;
}
</style>
