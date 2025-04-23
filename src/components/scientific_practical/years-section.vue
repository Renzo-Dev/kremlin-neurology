<template>
  <!-- Годы проведения -->
  <section class="years-section mb-5">
    <h4 class="mb-3 text-primary">Годы проведения:</h4>
    <div class="d-flex flex-wrap gap-2">
      <router-link
        v-for="year in years"
        :key="year"
        :to="`/scientific_practical/${year}`"
        class="btn btn-outline-primary btn-sm"
      >
        {{ year }}
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'YearsSection',
  components: {},
  data() {
    return {
      years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    }
  },
}
</script>
<style scoped lang="scss">
.years-section {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
</style>
