<template>
  <button
    class="header-navigation__mobile-toggle"
    :class="{ 'header-navigation__mobile-toggle--active': isActive }"
    @click="$emit('toggle')"
    aria-label="Открыть меню"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'MobileMenuToggle',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['toggle'],
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as vr;
@use '@/assets/styles/mixins' as mx;
@use './HeaderNavigation.scss';
</style>
