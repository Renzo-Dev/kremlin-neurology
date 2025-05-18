<template>
  <div class="accordion" id="accordionFlushExample">
    <div v-for="(item, index) in $props.items" :key="index">
      <accordion-item :index="index" :item="item" />
    </div>
  </div>
</template>

<script lang="js">
import AccordionItem from '@/components/library/AccordionItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: { AccordionItem },
  setup() {},
})
</script>

<style scoped lang="scss">
.accordion {
  height: auto;
  max-height: 60vh;
  overflow: auto;
}
</style>
