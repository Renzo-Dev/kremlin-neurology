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
import {useRoute} from 'vue-router'

const route = useRoute()
const navListItems = [
  {text: 'Обучение', route: 'Education'},
  {text: 'История', route: 'History'},
  {text: 'Научная работа', route: 'Research'},
  {text: 'Библиотека', route: 'Library'},
  {text: 'Клиентская база', route: 'Clients'},
  {text: 'Ежегодные конференции', route: 'Conferences'},
  {
    text: 'Научный кружек "Школа молодых неврологов"',
    route: 'YoungNeurologists'
  },
  {text: 'Новости и обновления', route: 'News'},
  {text: 'Контактная информация', route: 'Contacts'}
]

const isActiveRoute = routeName => {
  return route.name === routeName
}
</script>

<style scoped lang="scss">
.nav-list {
  font-family: 'Roboto', sans-serif;
  position: absolute;
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

@media (max-width: 1670px) {
  .nav-list {
    top: 110px;
  }
}

@media (max-width: 1280px) {
  .nav-list {
    top: 100px;
  }
}

@media (max-width: 1135px) {
  .nav-list {
    top: 120px;
  }
}

@media (max-width: 950px) {
  .nav-list {
    background-color: red;
    position: absolute;
    width: 100%;
    height: 100vh;
    padding: 100px 50px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

@media (max-width: 570px) {
  .nav-list {
    top: 120px;
  }
}

@media (max-width: 440px) {

}


@media (max-width: 1470px) {
  .nav-list {
    flex-direction: column;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 100%;
    bottom: 0;
    transition: 0.6s ease-in-out;
    backdrop-filter: blur(32px);
  }
}
</style>
