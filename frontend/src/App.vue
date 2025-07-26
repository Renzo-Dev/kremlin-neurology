<template>
  <Header />
  <main class="main-container">
    <router-view />
  </main>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import Header from '@/components/Header/Header.vue'

export default defineComponent({
  components: { Header },
})
</script>

<style scoped lang="scss">
.main-container {
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 240px;
  width: 100%;
  height: auto;
}

@media (max-width: 1170px) {
  .main-container {
    top: 170px;
  }
}

@media (max-width: 1123px) {
  .main-container {
    top: 190px;
  }
}

@media (max-width: 950px) {
  .main-container {
    top: 180px;
  }
}

@media (max-width: 634px) {
  .main-container {
    top: 200px;
  }
}

@media (max-width: 572px) {
  .main-container {
    top: 220px;
  }
}

@media (max-width: 464px) {
  .main-container {
    top: 240px;
  }
}
</style>
