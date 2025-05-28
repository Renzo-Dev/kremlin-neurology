<template>
  <div class="container">
    <div class="library mt-4">
      <div class="library__content">
        <div class="library__header">
          <h2 class="library__title">
            Приветная библиотека сайта "Кремлевская неврология"
          </h2>
        </div>

        <div class="library__accordion mb-4 w-100">
          <div
            v-if="Object.keys(items).length === 0"
            class="text-muted text-center"
          >
            Каталог пуст.
          </div>
          <LibraryAccordion :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import LibraryAccordion from '@/components/library/LibraryAccordion.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { loadPrivateLibrary } from '@/utils/loadPrivateLibrary'
import { transformCatalogToItems } from '@/utils/transformCatalogToItems'

export default defineComponent({
  components: { LibraryAccordion },
  setup() {
    const items = ref([])

    onMounted(async () => {
      const rawCatalog = await loadPrivateLibrary() // load the private library
      items.value = transformCatalogToItems(rawCatalog)
    })

    return {
      items,
    }
  },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/pages/Library';
</style>
