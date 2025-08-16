<template>
  <ul
    id="main-navlist"
    class="header-navigation__list"
    :class="{ 'header-navigation__list--mobile-open': isMobileOpen }"
  >
    <NavigationItem
      v-for="item in navigationItems"
      :key="item.to"
      :to="item.to"
      :text="item.text"
      :icon-component="item.iconComponent"
    />
  </ul>
</template>

<script>
import NavigationItem from './NavigationItem.vue'
import NavigationIcons from './NavigationIcons.vue'

export default {
  name: 'NavigationList',
  components: {
    NavigationItem,
    ...NavigationIcons.components,
  },
  props: {
    isMobileOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navigationItems: [
        {
          to: '/',
          text: 'Главная',
          iconComponent: 'HomeIcon',
        },
        {
          to: '/education',
          text: 'Обучение',
          iconComponent: 'EducationIcon',
        },
        {
          to: '/history',
          text: 'История',
          iconComponent: 'HistoryIcon',
        },
        {
          to: '/research',
          text: 'Научная работа',
          iconComponent: 'ResearchIcon',
        },
        {
          to: '/library',
          text: 'Библиотека',
          iconComponent: 'LibraryIcon',
        },
        {
          to: '/clients',
          text: 'Клиентская база',
          iconComponent: 'ClientsIcon',
        },
        {
          to: '/conferences',
          text: 'Ежегодные конференции',
          iconComponent: 'ConferencesIcon',
        },
        {
          to: '/young-neurologists',
          text: 'Научный кружок "Школа молодых неврологов"',
          iconComponent: 'YoungNeurologistsIcon',
        },
        {
          to: '/news',
          text: 'Новости',
          iconComponent: 'NewsIcon',
        },
        {
          to: '/contacts',
          text: 'Контактная информация',
          iconComponent: 'ContactsIcon',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as vr;
@use '@/assets/styles/mixins' as mx;
@use './HeaderNavigation.scss';
</style>
