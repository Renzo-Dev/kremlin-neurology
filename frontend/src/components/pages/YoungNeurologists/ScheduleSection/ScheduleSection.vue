<template>
  <section id="schedule" class="schedule-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Расписание мероприятий</h2>
        <div class="section-divider"></div>
      </div>

      <div class="schedule-tabs">
        <button
          v-for="year in years"
          :key="year"
          @click="activeYear = year"
          :class="['tab-button', { active: activeYear === year }]"
        >
          {{ year }}г.
        </button>
      </div>

      <div class="schedule-content">
        <div v-if="activeYear === 2022" class="year-schedule">
          <div
            class="schedule-item"
            v-for="(event, index) in schedule2022"
            :key="index"
          >
            <div class="event-header">
              <h3 class="event-title">{{ event.title }}</h3>
              <span class="event-time">{{ event.time }}</span>
            </div>
            <div class="event-content">
              <div
                class="presentation"
                v-for="(presentation, pIndex) in event.presentations"
                :key="pIndex"
              >
                <span class="presentation-number">{{ pIndex + 1 }}.</span>
                <span class="presentation-author">{{
                  presentation.author
                }}</span>
                <span class="presentation-topic"
                  >"{{ presentation.topic }}"</span
                >
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeYear === 2021" class="year-schedule">
          <div
            class="schedule-item"
            v-for="(event, index) in schedule2021"
            :key="index"
          >
            <div class="event-header">
              <h3 class="event-title">{{ event.title }}</h3>
              <span class="event-time" v-if="event.time">{{ event.time }}</span>
            </div>
            <div class="event-content">
              <div
                class="presentation"
                v-for="(presentation, pIndex) in event.presentations"
                :key="pIndex"
              >
                <span class="presentation-number">{{ pIndex + 1 }}.</span>
                <span class="presentation-author">{{
                  presentation.author
                }}</span>
                <span class="presentation-topic"
                  >"{{ presentation.topic }}"</span
                >
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeYear === 2020" class="year-schedule">
          <div
            class="schedule-item"
            v-for="(event, index) in schedule2020"
            :key="index"
          >
            <div class="event-header">
              <h3 class="event-title">{{ event.title }}</h3>
            </div>
            <div class="event-content">
              <div
                class="presentation"
                v-for="(presentation, pIndex) in event.presentations"
                :key="pIndex"
              >
                <span class="presentation-number">{{ pIndex + 1 }}.</span>
                <span class="presentation-author">{{
                  presentation.author
                }}</span>
                <span class="presentation-topic"
                  >"{{ presentation.topic }}"</span
                >
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeYear === 2019" class="year-schedule">
          <div
            class="schedule-item"
            v-for="(event, index) in schedule2019"
            :key="index"
          >
            <div class="event-header">
              <h3 class="event-title">{{ event.title }}</h3>
            </div>
            <div class="event-content">
              <div
                class="presentation"
                v-for="(presentation, pIndex) in event.presentations"
                :key="pIndex"
              >
                <span class="presentation-number">{{ pIndex + 1 }}.</span>
                <span class="presentation-author">{{
                  presentation.author
                }}</span>
                <span class="presentation-topic"
                  >"{{ presentation.topic }}"</span
                >
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeYear === 2018" class="year-schedule">
          <div
            class="schedule-item"
            v-for="(event, index) in schedule2018"
            :key="index"
          >
            <div class="event-header">
              <h3 class="event-title">{{ event.title }}</h3>
            </div>
            <div class="event-content">
              <div
                class="presentation"
                v-for="(presentation, pIndex) in event.presentations"
                :key="pIndex"
              >
                <span class="presentation-number">{{ pIndex + 1 }}.</span>
                <span class="presentation-author">{{
                  presentation.author
                }}</span>
                <span class="presentation-topic"
                  >"{{ presentation.topic }}"</span
                >
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeYear === 2017" class="year-schedule">
          <div
            class="schedule-item"
            v-for="(event, index) in schedule2017"
            :key="index"
          >
            <div class="event-header">
              <h3 class="event-title">{{ event.title }}</h3>
            </div>
            <div class="event-content">
              <div
                class="presentation"
                v-for="(presentation, pIndex) in event.presentations"
                :key="pIndex"
              >
                <span class="presentation-number">{{ pIndex + 1 }}.</span>
                <span class="presentation-author">{{
                  presentation.author
                }}</span>
                <span class="presentation-topic"
                  >"{{ presentation.topic }}"</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScheduleSection',
  data() {
    return {
      activeYear: 2022,
      years: [2022, 2021, 2020, 2019, 2018, 2017],
      schedule2022: [
        {
          title: 'План Школы на 18 января 2022г.',
          time: '16:00',
          presentations: [
            { author: 'Доцент Васильев А.С. (ЦГМА)', topic: 'Диабет' },
            {
              author: 'Доцент Васильев А.С. (ЦГМА)',
              topic: 'Диабетическая полинейропатия',
            },
          ],
        },
        {
          title: 'План Школы на 25 января 2022г.',
          time: '16:00',
          presentations: [
            {
              author: 'Доцент Васильев А.С. (ЦГМА)',
              topic: 'Альтернирующие синдромы в клинической практике',
            },
          ],
        },
        {
          title: 'План Школы на 22 февраля 2022г.',
          time: '16:00',
          presentations: [
            { author: 'Доцент Васильев А.С. (ЦГМА)', topic: 'Головокружение' },
            {
              author: 'Доцент Васильев А.С. (ЦГМА)',
              topic: 'Синкопальные состояния',
            },
          ],
        },
        {
          title: 'План Школы на 15 марта 2022г.',
          time: '16:00',
          presentations: [
            {
              author: 'Ординатор Коваленко А.А. (ЦГМА)',
              topic: 'Черепно-мозговая травма',
            },
          ],
        },
      ],
      schedule2021: [
        {
          title: 'План Школы на 19 января 2021г.',
          time: '17:00',
          presentations: [
            {
              author: 'Ординатор Мирошкина П.В. (ЦГМА)',
              topic: 'Артерио-венозные мальформации',
            },
            { author: 'Ординатор Фисенко Д.А. (ЦГМА)', topic: 'LWG' },
          ],
        },
        {
          title: 'План Школы на 24 февраля 2021г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Нейростоматология',
            },
            {
              author: 'Ординатор Кедрова Е.А. (ЦГМА)',
              topic:
                'Проводящие пути и центральный отдел слухового анализатора',
            },
          ],
        },
        {
          title: 'План Школы на 9 марта 2021г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Современные возможности нейрореабилитации',
            },
            {
              author: 'Ординатор Фурцева Е.А. (ЦГМА)',
              topic: 'Хронический болевой синдром',
            },
          ],
        },
        {
          title: 'План Школы на 13 апреля 2021г.',
          presentations: [
            {
              author: 'Мусорина В.Л. (ЦГМА)',
              topic:
                'Диагностика и лечение миофасциальных болевых синдромов пояснично-крестцовой локализации у больных с дегенеративно-дистрофическими заболеваниями позвоночника',
            },
            {
              author: 'Ординатор Белякова Е.Т. (ЦГМА)',
              topic: 'Болезнь Крейтцфельдта-Якоба',
            },
          ],
        },
        {
          title: 'План Школы на 11 мая 2021г.',
          presentations: [
            {
              author: 'Помогаева Е.Ю. (Промфарм, Москва)',
              topic:
                'Особенности ведения коморбидных пациентов с болевыми синдромами в период коронавирусной инфекции',
            },
          ],
        },
        {
          title: 'План Школы на 12 октября 2021г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic:
                'Мышечные дистонии и миофасциальные дисфункции у детей различного возраста',
            },
          ],
        },
        {
          title: 'План Школы на 09 ноября 2021г.',
          presentations: [
            {
              author: 'К.м.н., доцент Е.Г. Демьяновская (ЦГМА)',
              topic: 'Вирусные энцефалиты',
            },
          ],
        },
      ],
      schedule2020: [
        {
          title: 'План Школы на 11 февраля 2020г.',
          presentations: [
            {
              author:
                'Помогаева Е.Ю. (ТРБ Кемедика Интернешнл С.А., Швейцария, Представительство в Москве)',
              topic: 'Суставной синдром в практике невролога',
            },
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic:
                'Биомеханические компоненты патогенеза хронических болевых синдромов',
            },
          ],
        },
        {
          title: 'План Школы на 10 марта 2020г.',
          presentations: [
            {
              author: 'К.м.н., доцент Васильев А.С.(ЦГМА)',
              topic: 'Доказательная медицина глазами практикующего врача',
            },
            {
              author: 'Ординатор Тян А.А. (ЦГМА)',
              topic: 'Немедикаментозные методы лечения неспецифической боли',
            },
          ],
        },
        {
          title: 'План Школы на 28 октября 2020г.',
          presentations: [
            {
              author: 'Ординатор Кедрова Е.А. (ЦГМА)',
              topic: 'Аномалия Киари',
            },
            {
              author: 'Ординатор Жимжим В.И. (ЦГМА)',
              topic: 'Травмы спинного мозга',
            },
          ],
        },
        {
          title: 'План Школы на 11 ноября 2020г.',
          presentations: [
            {
              author: 'Ординатор Фисенко Д.А. (ЦГМА)',
              topic: 'Рассеянный склероз',
            },
            {
              author: 'Ординатор Фурсова Е.А. (ЦГМА)',
              topic: 'Болезнь Альцгеймера',
            },
          ],
        },
        {
          title: 'План Школы на 25 ноября 2020г.',
          presentations: [
            {
              author: 'Ординатор Мирошкина П.В. (ЦГМА)',
              topic: 'Болезнь Паркинсона',
            },
            {
              author: 'К.м.н., доцент Васильев А.С.(ЦГМА)',
              topic:
                'История и современность инструментальной диагностики в неврологии',
            },
          ],
        },
        {
          title: 'План Школы на 16 декабря 2020г.',
          presentations: [
            { author: 'Ординатор Жимжим В.И. (ЦГМА)', topic: 'БАС' },
            { author: 'Ординатор Кедрова Е.А. (ЦГМА)', topic: 'Гидроцефалии' },
          ],
        },
        {
          title: 'План Школы на 23 декабря 2020г.',
          presentations: [
            {
              author: 'Ординатор Фурсова Е.А. (ЦГМА)',
              topic: 'Болезнь Гийена-Барре',
            },
            {
              author: 'К.м.н., доцент Васильев А.С.(ЦГМА)',
              topic: 'Междисциплинарные аспекты болевых синдромов',
            },
          ],
        },
      ],
      schedule2019: [
        {
          title: 'План Школы на 11 июня 2019г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic:
                'Нозологический и патогенетический подход в ведении больных',
            },
          ],
        },
        {
          title: 'План Школы на 14 мая 2019г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Сложности инструментальной диагностики в неврологии',
            },
            {
              author: 'Аспирант К.Н. Аветисова (ЦГМА, КБ№ 1)',
              topic:
                'Особенности клинического течения и ведения пациентов с первичными головными болями',
            },
          ],
        },
        {
          title: 'План Школы на 9 апреля 2019г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic:
                'Значение сердечно-сосудистой хирургии в практике врача-невролога',
            },
          ],
        },
        {
          title: 'План Школы на 12 марта 2019г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Типичные и атипичные дорсалгии в клинической практике',
            },
          ],
        },
        {
          title: 'План Школы на 12 февраля 2019г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Аномалии развития в практике невролога',
            },
            {
              author: 'Аспирант К.Н. Аветисова (ЦГМА, КБ№ 1)',
              topic:
                'Особенности нейрофункциональных показателей у пациентов с первичными головными болями',
            },
            {
              author: 'Ординатор А.А. Гарманова (ЦГМА)',
              topic:
                'Нарушения ходьбы и равновесия у пациентов пожилого возраста',
            },
          ],
        },
      ],
      schedule2018: [
        {
          title: 'План Школы на 13 ноября 2018г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic:
                'Визуализационные технологи в неврологии - от истории к современности',
            },
            {
              author: 'Ординатор А.А. Гарманова (ЦГМА)',
              topic: 'Нарушения акта глотания в неврологической практике',
            },
          ],
        },
        {
          title: 'План Школы на 9 октября 2018г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Редкие заболевания в практике невролога',
            },
          ],
        },
        {
          title: 'План Школы на 5 июня 2018г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic:
                'Демиелинизирующие заболевания центральной и периферической нервной системы',
            },
          ],
        },
        {
          title: 'План Школы на 15 мая 2018г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Экстравазальные компрессии в неврологии',
            },
          ],
        },
        {
          title: 'План Школы на 10 апреля 2018г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Аномалии развития в неврологии',
            },
            {
              author: 'ординатор Е.О. Чугунова (ЦГМА)',
              topic: 'Аномалия Арнольда-Киари',
            },
          ],
        },
        {
          title: 'План Школы на 20 марта 2018г.',
          presentations: [
            {
              author: 'К.м.н., доцент Е.Г. Демьяновская (ЦГМА)',
              topic:
                'Клещевой энцефалит в Московском регионе. Важные аспекты профилактики, диагностики и лечения',
            },
            {
              author: 'ординатор О.И. Зырянова (ЦГМА)',
              topic: 'Неврологический осмотр новорожденного',
            },
          ],
        },
        {
          title: 'План Школы на 20 февраля 2018г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Нейроэндокринные аспекты боли',
            },
            {
              author: 'ординатор А.А. Чеснокова (ЦГМА)',
              topic: 'Синдром беспокойных ног',
            },
          ],
        },
      ],
      schedule2017: [
        {
          title: 'План Школы на 12 декабря 2017г.',
          presentations: [
            {
              author: 'К.м.н, доцент А.В. Фадеев (ПМГМУ им. И.М. Сеченова)',
              topic: 'Основы кинезиотейпирования',
            },
          ],
        },
        {
          title: 'План Школы на 14 ноября 2017г.',
          presentations: [
            {
              author: 'К.м.н, ассистент Е.Г. Демьяновская (ЦГМА)',
              topic:
                'Клещевой энцефалит в России и Московском регионе. К 80-летию открытия возбудителя',
            },
            {
              author: 'Ординатор Л.В. Лозинский (ЦГМА)',
              topic:
                'Лечение болевых синдромов у спортсменов методами ортопедической коррекции стоп индивидуальными ортезами системы «Футмастер» и остеопатии',
            },
          ],
        },
        {
          title: 'План Школы на 10 октября 2017г.',
          presentations: [
            {
              author: 'К.м.н., доцент А.С. Васильев (ЦГМА)',
              topic: 'Болевые синдромы в клинической практике',
            },
            {
              author: 'Ординатор Ю.В. Дерюга (ЦГМА)',
              topic:
                'Формирование навыка правильной осанки у детей дошкольного возраста',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use './ScheduleSection.scss';
</style>
