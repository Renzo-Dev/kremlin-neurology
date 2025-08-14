<template>
  <div id="app">
    <Header />
    <main class="main-container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/app.scss';
</style>
