<template>
  <Header />
  <main class="main-container">
    <router-view />
  </main>
</template>

<script lang="js">
import Header from '@/components/Header/Header.vue'
import { defineComponent } from 'vue'

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
    top: 230px;
  }
}

@media (max-width: 1123px) {
  .main-container {
    top: 240px;
  }
}

@media (max-width: 950px) {
  .main-container {
    top: 270px;
  }
}

@media (max-width: 720px) {
  .main-container {
    top: 120px;
  }
}

@media (max-width: 689px) {
  .main-container {
    top: 140px;
  }
}

@media (max-width: 634px) {
  .main-container {
    top: 130px;
  }
}

@media (max-width: 624px) {
  .main-container {
    top: 150px;
  }
}

@media (max-width: 572px) {
  .main-container {
    top: 140px;
  }
}

@media (max-width: 505px) {
  .main-container {
    top: 160px;
  }
}

@media (max-width: 464px) {
  .main-container {
    top: 170px;
  }
}

@media (max-width: 450px) {
  .main-container {
    top: 150px;
  }
}
</style>
