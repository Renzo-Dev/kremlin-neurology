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
            <button
              @click="handleDownload(generateFileLink(route.path), pub.link)"
              :disabled="!pub.img"
              class="btn btn-sm btn-outline-secondary"
            >
              Скачать
              <img
                :src="resolveImagePath(pub.img?.src)"
                :alt="pub.img?.src || 'file'"
                class="ms-2"
                style="width: 20px; height: 20px"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { handleDownload } from '@/utils/handleDownload'
import { generateFileLink } from '@/utils/generateFileLink'

export default defineComponent({
  methods: { generateFileLink, handleDownload },
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
  setup() {
    const route = useRoute()

    function resolveImagePath(filename) {
      const safeName = filename || 'default.png' // или 'pdf.gif'
      return new URL(`/src/assets/images/${safeName}`, import.meta.url).href
    }

    return {
      resolveImagePath,
      route,
      generateFileLink,
      handleDownload,
    }
  },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss';
@use 'sass:map';

$sizes: (
  small: (
    accordion-button-ft: calc(14 * 0.25vw),
    accordion-button-pt: 10px 10px 10px 15px,
  ),
  xsmall: (
    accordion-button-ft: calc(10 * 0.25vw),
    accordion-button-pt: 10px 10px 10px 15px,
  ),
  medium: (
    accordion-button-ft: calc(6 * 0.25vw),
    accordion-button-pt: 10px 10px 10px 15px,
  ),
  large: (
    accordion-button-ft: calc(5 * 0.25vw),
    accordion-button-pt: 10px 10px 10px 15px,
  ),
  xlarge: (
    accordion-button-ft: calc(5 * 0.25vw),
    accordion-button-pt: 10px 10px 10px 15px,
  ),
  xxlarge: (
    accordion-button-ft: calc(4 * 0.25vw),
    accordion-button-pt: 10px 10px 10px 15px,
  ),
);

@each $size, $value in $sizes {
  @include mixins.respond-to($size) {
    .accordion-button {
      font-size: map.get($value, accordion-button-ft);
    }
  }
}

.accordion-header {
  .accordion-button {
    padding: map.get($sizes, small, accordion-button-pt);
  }
}

.accordion-button:not(.collapsed) {
  background-color: white !important;
  color: inherit;
  box-shadow: none;
}

.accordion-button:focus {
  border-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}
</style>
