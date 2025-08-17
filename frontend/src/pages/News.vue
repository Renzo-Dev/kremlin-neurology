<template>
  <div class="news-page">
    <div class="container">
      <header class="news-header">
        <h1 class="page-title">Новости и события</h1>
        <p class="page-subtitle">
          Актуальная информация о конференциях, научных мероприятиях и важных
          событиях кафедры неврологии
        </p>
      </header>

      <NewsFilter
        :years="availableYears"
        :selectedYear="selectedYear"
        @year-change="handleYearChange"
      />

      <NewsTimeline :news="filteredNews" :selectedYear="selectedYear" />
    </div>
  </div>
</template>

<script>
import NewsFilter from '@/components/pages/News/NewsFilter/NewsFilter.vue'
import NewsTimeline from '@/components/pages/News/NewsTimeline/NewsTimeline.vue'

export default {
  name: 'NewsPage',
  components: {
    NewsFilter,
    NewsTimeline,
  },
  data() {
    return {
      selectedYear: '2020',
      news: [
        {
          id: 1,
          date: '2020-02-26',
          year: '2020',
          title: 'Восстановлена работа информационной рассылки',
          description:
            'Восстановлена работа информационной рассылки Новости сайта "Кремлевская неврология". Подписаться можно по ссылке: Рассылка Новости сайта "Кремлевская неврология". Администратор рассылки к.м.н., доцент А.С. Васильев.',
          category: 'Объявления',
          isImportant: true,
        },
        {
          id: 2,
          date: '2020-02-27',
          year: '2020',
          title: '16-я конференция "Вейновские чтения"',
          description:
            'Открывается 16-я конференция "Вейновские чтения", посвящённая памяти выдающегося российского невролога, академика РАМН, заслуженного деятеля науки, лауреата Государственной премии СССР, профессора Александра Моисеевича Вейна. Время проведения: 27 - 29 февраля 2020г. Место проведения: Конгресс-парк гостиницы "Рэдиссон Коллекшн, Москва" (Кутузовский проспект, д. 2/1, стр. 1).',
          category: 'Конференции',
          isImportant: true,
        },
        {
          id: 3,
          date: '2020-03-04',
          year: '2020',
          title: 'Конференция "Психосоматика и реабилитация"',
          description:
            'Состоится конференция "Психосоматика и реабилитация: параллели и пересечения". Место проведения г. Москва, ул. маршала Тимошенко, 15. корпус №5 ЦКБ, аудитория 8 этаж. Дополнительная информация и регистрация на странице Конференции https://medq.ru/events/199. Внимание! Для прохода на Конференцию необходим паспорт!',
          category: 'Конференции',
          isImportant: false,
          externalLink: 'https://medq.ru/events/199',
        },
        {
          id: 4,
          date: '2020-03-10',
          year: '2020',
          title: 'Научный кружок "Школа молодых неврологов"',
          description:
            'При кафедре неврологии начинает работу Научный кружок "Школа молодых неврологов", предназначенный для ординаторов и аспирантов кафедры неврологии ФГБУ ФПО "ЦГМА" УД Президента РФ и интересующихся неврологией студентов медицинских вузов.',
          category: 'Образование',
          isImportant: true,
        },
      ],
    }
  },
  computed: {
    availableYears() {
      return [...new Set(this.news.map(item => item.year))].sort(
        (a, b) => b - a
      )
    },
    filteredNews() {
      if (this.selectedYear === 'all') {
        return this.news
      }
      return this.news.filter(item => item.year === this.selectedYear)
    },
  },
  methods: {
    handleYearChange(year) {
      this.selectedYear = year
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.news-page {
  min-height: 100vh;
  background: linear-gradient(135deg, v.$gray-50 0%, v.$white 100%);
  padding: v.$spacing-2xl 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 v.$spacing-lg;
}

.news-header {
  text-align: center;
  margin-bottom: v.$spacing-3xl;

  .page-title {
    font-size: v.$font-size-4xl;
    font-weight: v.$font-weight-bold;
    color: v.$gray-900;
    margin-bottom: v.$spacing-lg;
    background: linear-gradient(
      135deg,
      v.$primary-color 0%,
      v.$primary-dark 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: v.$breakpoint-md) {
      font-size: v.$font-size-3xl;
    }
  }

  .page-subtitle {
    font-size: v.$font-size-lg;
    color: v.$gray-600;
    max-width: 600px;
    margin: 0 auto;
    line-height: v.$line-height-relaxed;
  }
}
</style>
