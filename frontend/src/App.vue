<template>
  <Header />
  <router-view />
</template>

<script lang="js">
import { defineComponent } from 'vue'
import Header from '@/components/Header/Header.vue'

export default defineComponent({
  components: { Header },
})
</script>

<style scoped lang="scss">
#app {
}
</style>
