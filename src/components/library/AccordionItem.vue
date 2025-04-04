<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapse' + index"
        aria-expanded="false"
        :aria-controls="'collapse' + index"
      >
        {{ item.letter }}
      </button>
    </h2>
    <div
      :id="'collapse' + index"
      class="accordion-collapse collapse"
      :aria-labelledby="'heading' + index"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <div
          v-for="(pub, pubIndex) in item.publications"
          :key="pubIndex"
          class="d-flex mb-4 pb-3 border-bottom"
        >
          <div>
            <h6 class="mb-1 text-primary">{{ pub.authors }}</h6>
            <p class="mb-1">{{ pub.title }}</p>
            <a
              :href="pub.link"
              target="_blank"
              class="btn btn-sm btn-outline-secondary"
              :class="{ disabled: !pub.img }"
              >Скачать
              <img
                :src="resolveImagePath(pub.img?.src)"
                :alt="pub.img?.src || 'file'"
                class="ms-2"
                style="width: 20px; height: 20px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    index: {
      type: Number,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  components: {},
  setup(props) {
    function resolveImagePath(filename) {
      const safeName = filename || 'default.png' // или 'pdf.gif'
      return new URL(`/src/assets/images/${safeName}`, import.meta.url).href
    }

    return { resolveImagePath }
  },
})
</script>

<style scoped lang="scss"></style>
