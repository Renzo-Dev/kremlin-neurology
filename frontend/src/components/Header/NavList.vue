<template>
  <ul class="nav-list">
    <li v-for="item in navListItems">
      <router-link :to="{ name: item.route }">{{ item.text }}</router-link>
    </li>
  </ul>
</template>

<script setup>
const navListItems = [
  { text: 'Главная', route: 'Home' },
  {
    text: 'Обучение',
    route: 'Home',
  },
  { text: 'История', route: 'Home' },
  {
    text: 'Научная работа',
    route: 'Home',
  },
  { text: 'Библиотека', route: 'Home' },
  { text: 'Клиентская база', route: 'Home' },
  { text: 'Ежегодные конференции', route: 'Home' },
  { text: 'Научный кружек "Школа молодых неврологов"', route: 'Home' },
]
</script>

<style scoped lang="scss">
.nav-list {
  display: flex;
  height: auto;
  width: 10%;
  background-color: red;
}
</style>
