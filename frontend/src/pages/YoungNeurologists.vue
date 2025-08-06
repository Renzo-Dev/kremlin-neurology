<template>
  <div class="container">
    <h1 class="title">Школа молодых неврологов</h1>
    <section class="intro">
      <p>
        С марта 2020 г. при кафедре неврологии работает Научный кружок
        <strong>"Школа молодых неврологов"</strong>, предназначенный для
        ординаторов, аспирантов и студентов.
      </p>
      <p>
        Кружок включает 8 учебно-научных конференций в год, где выступают
        сотрудники кафедры и обучающиеся.
      </p>
    </section>

    <section class="info">
      <h2>Организаторы</h2>
      <ul>
        <li><strong>Научный руководитель:</strong> Алексей Сергеевич Васильев
        </li>
        <li><strong>Научные руководители конференций:</strong> Владимир Иванович
          Шмырев, Алексей Сергеевич Васильев
        </li>
        <li><strong>Секретарь:</strong> Надежда Владимировна Михайлова</li>
      </ul>
    </section>

    <section class="schedule">
      <h2>Расписание</h2>
      <p>Конференции проводятся по вторым вторникам февраля, марта, апреля, мая,
        июня, октября, ноября и декабря в 15:00. Адрес: г. Москва, ул. М.
        Тимошенко, 19-1А</p>
      <p class="note">* В случае совпадения с праздником — перенос</p>
    </section>

    <section class="archive">
      <h2>Архив мероприятий</h2>
      <div v-for="(year, index) in archive" :key="index" class="year">
        <h3>{{ year.year }} г.</h3>
        <div v-for="(event, i) in year.events" :key="i" class="event">
          <h4>{{ event.date }}</h4>
          <ul>
            <li v-for="(item, j) in event.topics" :key="j">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const archive = [
  {
    year: 2022,
    events: [
      {
        date: '18 января 2022 (16:00)',
        topics: [
          'Доцент Васильев А.С.: "Диабет"',
          'Доцент Васильев А.С.: "Диабетическая полинейропатия"'
        ]
      },
      {
        date: '25 января 2022 (16:00)',
        topics: ['Доцент Васильев А.С.: "Альтернирующие синдромы в клинической практике"']
      },
      {
        date: '22 февраля 2022 (16:00)',
        topics: [
          'Доцент Васильев А.С.: "Головокружение"',
          'Доцент Васильев А.С.: "Синкопальные состояния"'
        ]
      },
      {
        date: '15 марта 2022 (16:00)',
        topics: ['Ординатор Коваленко А.А.: "Черепно-мозговая травма"']
      }
    ]
  }
  // Добавить другие года аналогично
]
</script>

<style scoped>
.container {
  padding: 2rem;
  font-size: 1.2rem;
  margin: auto;
  color: #222;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}

.intro,
.info,
.schedule,
.archive {
  margin-bottom: 2rem;
}

.intro p,
.schedule p {
  margin: 0.5rem 0;
}

.info ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.year {
  margin-bottom: 1.5rem;
}

.event {
  background: #f9f9f9;
  border-left: 5px solid #4b9ed6;
  padding: 1rem;
  margin: 0.75rem 0;
  border-radius: 0.5rem;
}

.event h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.note {
  font-style: italic;
  color: #666;
}
</style>
