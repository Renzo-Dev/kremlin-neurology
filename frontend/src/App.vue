<template>
  <Header />
  <NavList />
  <router-view />
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
#app {
}
</style>
