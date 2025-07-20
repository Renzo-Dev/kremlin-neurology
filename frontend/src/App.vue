<template>
  <Header />
  <NavList />
  <main class="main-container">
    <router-view />
  </main>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import Header from '@/components/Header/Header.vue'
import NavList from '@/components/Header/NavList.vue'

export default defineComponent({
  components: { NavList, Header },
})
</script>

<style scoped lang="scss">
.main-container {
  margin-top: 15px;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 220px;
  width: 100%;
  height: auto;
}
</style>
