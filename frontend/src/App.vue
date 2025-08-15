<template>
  <div id="app">
    <Header />
    <main class="main-container">
      <router-view />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ScrollToTop,
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/app.scss' as *;
</style>
