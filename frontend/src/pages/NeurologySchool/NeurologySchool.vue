<template>
  <div class="neurology-school">
    <div class="container">
      <header class="page-header">
        <h1 class="main-title">Школа молодых неврологов</h1>
      </header>

      <section class="description">
        <p>
          С марта 2020г. при кафедре неврологии работает Научный кружок "Школа
          молодых неврологов", предназначенный для ординаторов и аспирантов
          кафедры неврологии ФГБУ ФПО "ЦГМА" УД Президента РФ и интересующихся
          неврологией студентов медицинских вузов.
        </p>
        <p>
          Работа кружка будет осуществляться в форме общих заседаний, а также
          уже традиционных учебно-научных конференций и иных мероприятий.
        </p>
        <p>
          "Школа молодых неврологов" представляет собой регулярно проводимые (8
          раз в год) учебно-научные конференции, на которых делается по 2-3
          доклада, в том числе один (до 2 ак. часов по избранной проблеме)
          сотрудником кафедры или приглашенным лектором, остальные (по 20 минут)
          студентом, ординатором или аспирантом. После доклада проводится его
          обсуждение. Такой формат позволяет обучающимся расширить свой кругозор
          и получить опыт публичных выступлений. Для ординаторов и аспирантов
          кафедры участие в работе Кружка и Конференции является одной из форм
          педагогической практики.
        </p>
      </section>

      <LeadershipSection :leaders="leadership" />

      <section class="events-info">
        <h3>Мероприятия:</h3>
        <p>
          Мероприятия проводятся по вторым вторникам февраля, марта, апреля,
          мая, июня, октября, ноября и декабря. При выпадении на второй вторник
          праздничного дня или совпадении с иным мероприятием, в котором
          принимает участие кафедра, – перенос на третий вторник или иной день.
          Дата проведения и тематический план ближайшего мероприятия публикуются
          на этой странице. Начало мероприятий, если не указано иное, в 15:00.
          Место проведения - ЦГМА, г.Москва, ул. М. Тимошенко, 19-1А, зал будет
          указан на информационном табло при входе.
        </p>
        <p class="covid-notice">
          С 9 марта 2021г. восстанавливается очное проведение заседаний. Не
          забывайте маски и рекомендуемую дистанцию!
        </p>
      </section>

      <section class="events-by-year">
        <div v-for="year in eventsByYear" :key="year.year" class="year-section">
          <h3>{{ year.year }}г.</h3>
          <EventSchedule :events="year.events" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LeadershipSection from '../../components/LeadershipSection/LeadershipSection.vue'
import EventSchedule from '../../components/EventSchedule/EventSchedule.vue'
import { neurologySchoolData } from '@/data/neurologySchoolData.js'

export default {
  name: 'NeurologySchool',
  components: {
    LeadershipSection,
    EventSchedule,
  },
  data() {
    return {
      leadership: neurologySchoolData.leadership,
      eventsByYear: neurologySchoolData.eventsByYear,
    }
  },
}
</script>

<style scoped>
.neurology-school {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 3px solid #3498db;
}

.main-title {
  font-size: 2.5em;
  color: #2c3e50;
  margin: 0;
  font-weight: 700;
}

.description {
  margin-bottom: 40px;
}

.description p {
  margin-bottom: 20px;
  text-align: justify;
  font-size: 1.1em;
}

.events-info {
  margin-bottom: 40px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border-left: 5px solid #3498db;
}

.events-info h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.covid-notice {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
  font-weight: 500;
}

.year-section {
  margin-bottom: 40px;
}

.year-section h3 {
  color: #2c3e50;
  font-size: 1.4em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
}

@media (max-width: 768px) {
  .neurology-school {
    padding: 15px;
  }

  .main-title {
    font-size: 2em;
  }

  .description p {
    font-size: 1em;
  }

  .events-info {
    padding: 20px;
  }
}
</style>
