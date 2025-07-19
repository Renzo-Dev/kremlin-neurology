<template>
  <ul class="nav-list">
    <li v-for="item in navListItems">
      <router-link :to="{ name: item.route }">{{ item.text }}</router-link>
    </li>
  </ul>
</template>

<script setup>
const navListItems = [
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
  { text: 'Новости и обновления', route: 'Home' },

  { text: 'Контактная информация', route: 'Home' },
]
</script>

<style scoped lang="scss">
.nav-list {
  position: absolute;
  top: 110px;
  display: flex;
  width: 100%;
  padding: 0 7%;
  justify-content: center;
  flex-wrap: wrap;

  a {
    text-wrap: nowrap;
    margin: 5px;
    border-radius: 7px;
    padding: 12px;
    background-color: var(--nav-bg-item);
    display: inline-block;
    color: var(--h-font-color);
    font-size: var(--nav-font-size);
    transition: 0.4s ease;
    &:hover {
      background-color: var(--nav-bg-h-item);
    }
  }
}
</style>
