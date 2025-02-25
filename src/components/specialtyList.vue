<template>
  <table class="table table-hover w-50">
    <thead>
      <tr>
        <th class="table-item">№</th>
        <th class="table-item">Специальность</th>
        <th class="table-item">СТОИМОСТЬ ОБУЧЕНИЯ (руб./год)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in specialties" :key="index">
        <td class="table-item">{{ index + 1 }}</td>
        <td class="table-item">{{ item.specialty }}</td>
        <td class="table-item text-center">{{ item.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    specialties: [
      {
        specialty: '',
        price: '',
      },
    ],
  },
})
</script>

<style scoped lang="scss">
.table-item {
  font-size: calc(4 * 0.25vw);
}
</style>
