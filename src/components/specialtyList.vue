<template>
  <div class="custom-table">
    <table class="table table-hover">
      <thead class="table-thead">
        <tr>
          <th class="table-item">№</th>
          <th v-if="!table3" class="table-item">Специальность</th>
          <th v-if="table3" class="table-item">Кафедры, курсы</th>
          <th v-if="table3" class="table-item">Наименование цикла</th>
          <th class="table-item text-center">СТОИМОСТЬ ОБУЧЕНИЯ (руб./год)</th>
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
.custom-table {
  overflow-y: auto;
  display: flex;
  justify-content: center;
  height: calc(50 * 1vh);
  width: 60%;

  .table-thead {
    position: sticky;
    top: 0;
  }
}

.table-item {
  font-size: calc(4 * 0.25vw);
}
</style>
