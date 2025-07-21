<template>
  <ul class="nav-list">
    <li v-for="item in navListItems">
      <router-link
        :class="{ active: isActiveRoute(item.route) }"
        :to="{ name: item.route }"
        >{{ item.text }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const navListItems = [
  { text: 'Обучение', route: 'Education' },
  { text: 'История', route: 'History' },
  { text: 'Научная работа', route: 'Research' },
  { text: 'Библиотека', route: 'Library' },
  { text: 'Клиентская база', route: 'Clients' },
  { text: 'Ежегодные конференции', route: 'Conferences' },
  {
    text: 'Научный кружек "Школа молодых неврологов"',
    route: 'YoungNeurologists',
  },
  { text: 'Новости и обновления', route: 'News' },
  { text: 'Контактная информация', route: 'Contacts' },
]

const isActiveRoute = routeName => {
  return route.name === routeName
}
</script>

<style scoped lang="scss">
.nav-list {
  font-family: 'Roboto', sans-serif;
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
      transform: translateY(3.5px);
    }
  }

  .active {
    background-color: #83888d;
  }
}
</style>
