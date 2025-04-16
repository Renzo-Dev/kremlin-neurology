<template>
  <div class="custom-table">
    <table class="table table-hover">
      <thead class="table-thead">
        <tr>
          <th class="table-header">№</th>
          <th v-if="!table3" class="table-header">Специальность</th>
          <th v-if="table3" class="table-header">Кафедры, курсы</th>
          <th v-if="table3" class="table-header">Наименование цикла</th>
          <th class="table-header text-center">
            СТОИМОСТЬ ОБУЧЕНИЯ (руб./год)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in specialties" :key="index">
          <td class="table-item">{{ index + 1 }}</td>
          <td class="table-item">{{ item.specialty }}</td>
          <td v-if="table3" class="table-item">{{ item.cycleName }}</td>
          <td class="table-item text-center">{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    table3: Boolean,
    specialties: {
      type: Array,
      default: () => [
        {
          specialty: '',
          cycleName: '',
          price: '',
        },
      ],
    },
  },
  setup() {},
})
</script>

<style scoped lang="scss">
@use 'sass:map';
@use '@/assets/styles/mixins';

$sizes: (
  small: (
    table-item-ft_size: calc(14 * 0.27vw),
    table-header-ft-size: calc(12 * 0.27vw),
    width: 100%,
  ),
  xsmall: (
    table-item-ft_size: calc(10 * 0.27vw),
    table-header-ft-size: calc(10 * 0.27vw),
    width: 80%,
  ),
  medium: (
    table-item-ft_size: calc(7 * 0.27vw),
    table-header-ft-size: calc(6 * 0.27vw),
    width: 80%,
  ),
  large: (
    table-item-ft_size: calc(5 * 0.25vw),
    table-header-ft-size: calc(5 * 0.25vw),
    width: 80%,
  ),
  xlarge: (
    table-item-ft_size: calc(5 * 0.25vw),
    table-header-ft-size: calc(5 * 0.25vw),
    width: 80%,
  ),
  xxlarge: (
    table-item-ft_size: calc(4 * 0.25vw),
    table-header-ft-size: calc(4 * 0.25vw),
    width: 80%,
  ),
);

.custom-table {
  overflow-y: auto;
  display: flex;
  justify-content: center;
  height: calc(50 * 1vh);
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      width: map.get($values, width);
    }
  }

  .table-thead {
    position: sticky;
    top: 0;

    .table-header {
      @each $size, $values in $sizes {
        @include mixins.respond-to($size) {
          font-size: map.get($values, table-header-ft-size);
        }
      }
    }
  }
}

.table-item {
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      font-size: map.get($values, table-item-ft_size);
    }
  }
}
</style>
