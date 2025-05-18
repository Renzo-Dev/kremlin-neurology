<template>
  <div class="news">
    <div class="container">
      <h1 class="news_title text-center mt-3">Новости, объявления, события</h1>
      <div v-for="year in newsData" :key="year.year" class="news__year">
        <h2 class="news__year-title">{{ year.year }}</h2>
        <div
          v-for="event in year.events"
          :key="event.date"
          class="news__event card mb-3"
        >
          <div class="card-body">
            <h5 class="news__event-date">{{ event.date }}</h5>
            <h3 class="news__event-title">{{ event.title }}</h3>
            <p class="news__event-description" v-html="event.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewsUpdates',
  setup() {
    const newsData = [
      {
        year: 2020,
        events: [
          {
            date: '26 февраля 2020 г.',
            title: 'Восстановлена работа информационной рассылки',
            description:
              'Новости сайта "Кремлевская неврология". Подписаться можно по <a href=\'http://www.kremlin-neurology.ru/subscribe.htm\'>ссылке</a>.',
          },
          {
            date: '27 февраля 2020 г.',
            title: '16-я конференция "Вейновские чтения"',
            description:
              'Посвящена памяти выдающегося российского невролога, академика РАМН, заслуженного деятеля науки, лауреата Государственной премии СССР, профессора Александра Моисеевича Вейна. <br> Время: 27 - 29 февраля 2020г. <br> Место: Конгресс-парк гостиницы <strong>Рэдиссон Коллекшн, Москва</strong>.',
          },
          {
            date: '04 марта 2020 г.',
            title: 'Конференция "Психосоматика и реабилитация"',
            description:
              "Место проведения: г. Москва, ул. маршала Тимошенко, 15. корпус №5 ЦКБ, аудитория 8 этаж. <br> <a href='https://medq.ru/events/199'>Регистрация</a>. Внимание! Для прохода необходим паспорт.",
          },
          {
            date: '10 марта 2020 г.',
            title: 'Научный кружок "Школа молодых неврологов"',
            description:
              'Предназначен для ординаторов и аспирантов кафедры неврологии ФГБУ ФПО "ЦГМА" УД Президента РФ. <br> Будет проходить в формате учебно-научных конференций, включающих доклады и обсуждения.',
          },
        ],
      },
    ]
    return {
      newsData,
    }
  },
})
</script>

<style scoped lang="scss"></style>
