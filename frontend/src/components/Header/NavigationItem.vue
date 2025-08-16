<template>
  <li class="header-navigation__item">
    <router-link :to="to" exact class="header-navigation__link">
      <svg
        class="header-navigation__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <component :is="iconComponent" />
      </svg>
      <span class="header-navigation__text">{{ text }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    iconComponent: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as vr;
@use '@/assets/styles/mixins' as mx;
@use './HeaderNavigation.scss';
</style>
