<template>
  <div class="news-filter">
    <div class="filter-container">
      <div class="filter-group">
        <label class="filter-label">Фильтр по году:</label>
        <div class="filter-buttons">
          <button
            v-for="year in years"
            :key="year"
            @click="$emit('year-change', year)"
            :class="[
              'filter-btn',
              { 'filter-btn--active': selectedYear === year },
            ]"
          >
            {{ year }}
          </button>
          <button
            @click="$emit('year-change', 'all')"
            :class="[
              'filter-btn',
              { 'filter-btn--active': selectedYear === 'all' },
            ]"
          >
            Все годы
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsFilter',
  props: {
    years: {
      type: Array,
      required: true,
    },
    selectedYear: {
      type: String,
      required: true,
    },
  },
  emits: ['year-change'],
}
</script>

<style lang="scss" scoped>
@use './NewsFilter.scss';
</style>
