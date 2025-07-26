<template>
  <ul class="nav-list">
    <li v-for="(item, index) in navListItems" :key="index">
      <router-link
          :class="{ active: isActiveRoute(item.route) }"
          :to="{ name: item.route }"
          @click="closeNavMenu"
      >{{ item.text }}
      </router-link>
    </li>
    <li class="close-btn" @click="closeNavMenu()"><i class='bxr  bx-equal'
                                                     style='color:#000000'></i>
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

function closeNavMenu() {
  const navList = document.querySelector('.nav-list')
  if (navList) {
    navList.classList.add('close')
    navList.classList.remove('open')
  }
}

const isActiveRoute = routeName => {
  return route.name === routeName
}
</script>

<style scoped lang="scss">
.nav-list {
  font-family: 'Roboto', sans-serif;
  position: fixed;
  display: flex;
  width: 100%;
  padding: 10px 7%;
  justify-content: center;
  background-color: #ffffff;
  flex-wrap: wrap;
  z-index: 10000;
  top: 109px;

  a {
    margin: 5px 0;
    border-radius: 7px;
    padding: 12px;
    background-color: #c6cfd9;
    display: inline-block;
    color: var(--h-font-color);
    font-size: 1.2rem;
    transition: 0.4s ease;

    &:hover {
      background-color: var(--nav-bg-h-item);
      transform: translateY(3.5px);
    }
  }

  .close-btn {
    display: none;

    font-size: 2rem;
    color: var(--h-font-color);
    transition: all 0.2s ease;

    &:active {
      transform: scale(1.5);
      color: #83888d;
    }

    position: absolute;
    top: 45px;
    right: 5px;

    &:active {
      transform: scale(0.8);
      color: #939393;
    }

    a {
      text-wrap: wrap;
    }
  }

  .active {
    background-color: #83888d;
  }
}

@media (max-width: 1670px) {
  .nav-list {
    top: 109px;
  }
}

@media (max-width: 1280px) {
  .nav-list {
    top: 98px;
  }
}

@media (max-width: 1170px) {
  .nav-list {
    top: 98px;
    padding: 10px 5%;
  }
}

@media (max-width: 1123px) {
  .nav-list {
    top: 113px;
    padding: 10px 5%;

    a {
      font-size: 1rem;
    }
  }
}

@media (max-width: 950px) {
  .nav-list {
    top: 111px;
    padding: 10px 5%;

    a {
      font-size: 1rem;
    }
  }
}

@media (max-width: 740px) {
  .nav-list {
    top: 112px;
    padding: 10px 5%;

    a {
      font-size: 1rem;
    }
  }
}

@media (min-width: 720px) {
  .nav-list {
    transition: all 0.3s ease-in-out;
    animation: fade-nav-list 0.6s ease-in-out;
  }
}

@media (max-width: 720px) {
  .nav-list {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    left: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(32px);

    .close-btn {
      display: flex;
    }
  }
}

.nav-list.open {
  animation: open-nav-list 0.5s ease-in-out forwards;
}

.nav-list.close {
  animation: close-nav-list 0.5s ease-in-out forwards;
}

@keyframes open-nav-list {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}

@keyframes close-nav-list {
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
}

@keyframes fade-nav-list {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
