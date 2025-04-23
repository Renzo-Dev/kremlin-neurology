<template>
  <div class="conference-2017 container py-4">
    <years-section />
    <!-- Основной заголовок -->
    <header class="text-center mb-5">
      <h1 class="display-6 fw-bold">
        VIII Российская научно-практическая конференция с международным участием
      </h1>
      <h2 class="display-6 text-primary">
        «Инновационные технологии в области неврологии и смежных специальностей»
      </h2>
      <div
        class="conference-date bg-primary text-white d-inline-block px-4 py-2 rounded mt-3"
      >
        <h3 class="mb-0">24 октября 2017г.</h3>
      </div>
    </header>

    <!-- Основное содержание -->
    <section class="mb-5">
      <div class="card shadow-sm mb-4">
        <div class="card-body">
          <p class="lead">
            Приглашаем к участию коллег всех специальностей, специалистов
            экспериментальной медицины, разработчиков новой медицинской техники.
            Конференция
            <a
              href="http://www.sovetnmo.ru/conf_posts/9183.html?SSr=370133c90d14ffffffff27c__07e10a150e252f-237a"
              target="_blank"
              class="fw-bold"
              >аккредитована</a
            >
            Советом НМО для получения участниками конференции образовательных
            кредитов (баллов) по специальности "Неврология" (4 балла).
          </p>
        </div>
      </div>
    </section>

    <!-- Научные руководители -->
    <section class="mb-5">
      <h3 class="mb-4 text-primary border-bottom pb-2">
        Научные руководители конференции:
      </h3>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">Шмырев Владимир Иванович</h5>
              <p class="card-text">
                д.м.н., профессор, заведующий кафедрой неврологии ФГБУ «ЦГМА» УД
                Президента РФ, главный специалист по неврологии ГМУ УД
                Президента РФ
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">Яхно Николай Николаевич</h5>
              <p class="card-text">
                академик РАН, заслуженный деятель науки РФ, доктор медицинских
                наук, заведующий научно-исследовательским отделом неврологии
                научно-исследовательского центра, профессор кафедры нервных
                болезней лечебного факультета, директор научно-образовательного
                клинического центра неврологии ФГАОУ ВО «Первый МГМУ
                им.И.М.Сеченова» МЗ РФ (Сеченовский Университет)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секретарь конференции -->
    <section class="mb-5">
      <h3 class="mb-3 text-primary border-bottom pb-2">
        Секретарь конференции:
      </h3>
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-primary">Васильев Алексей Сергеевич</h5>
          <p class="card-text">
            к.м.н., доцент кафедры неврологии ФГБУ «ЦГМА» УД Президента РФ
          </p>
        </div>
      </div>
    </section>

    <!-- Основные темы -->
    <section class="mb-5">
      <h3 class="mb-3 text-primary border-bottom pb-2">
        Основные темы конференции:
      </h3>
      <div class="card shadow-sm">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li v-for="topic in topics" :key="topic" class="list-group-item">
              {{ topic }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Для кого конференция -->
    <section class="mb-5">
      <div class="card bg-light border-primary">
        <div class="card-body">
          <h5 class="card-title text-primary">
            Конференция предназначена для:
          </h5>
          <p class="card-text">
            врачей неврологов, терапевтов, кардиологов, пульмонологов,
            гастроэнтерологов, травматологов, хирургов, эндокринологов, врачей
            лучевой диагностики, мануальных терапевтов, остеопатов и
            представителей других специальностей.
          </p>
        </div>
      </div>
    </section>

    <!-- Участие и тезисы -->
    <section class="mb-5">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">Участие и подача тезисов</h4>
        </div>
        <div class="card-body">
          <p>
            <strong>Участие для врачей бесплатное.</strong> Тезисы необходимо
            оформлять в формате MS Word'95 и старше (*.doc, *.docx) в
            соответствии с образцом, который можно скачать
            <a href="standart_abstract.doc" class="fw-bold">по ссылке</a>.
            Публикация тезисов бесплатная.
          </p>
          <p>
            Ваши работы Вы можете присылать до 25 сентября 2017г. включительно
            по адресу
            <a href="mailto:kremlinneurology@yandex.ru" class="fw-bold"
              >kremlinneurology@yandex.ru</a
            >, указав в теме письма
            <strong
              >"Тезисы на конференцию "Инновационные технологии - 2017"</strong
            >.
          </p>
          <div class="alert alert-info mt-3">
            <h5>Школа молодых ученых</h5>
            <p>
              Для авторов в возрасте до 35 лет включительно доступно участие в
              секции "Школа молодых ученых". Для этого необходимо при отправке
              тезисов дополнительно отметить в теме письма "Школа молодых
              ученых".
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Материалы конференции -->
    <section class="mb-5">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">Материалы конференции</h4>
        </div>
        <div class="card-body">
          <p>
            Сборник материалов Конференции можно загрузить
            <a
              href="library/Conference_neuro-2017.pdf"
              class="btn btn-outline-primary"
              ><i class="bi bi-file-earmark-pdf"></i> по этой ссылке</a
            >
          </p>
        </div>
      </div>
    </section>

    <!-- Регистрация и трансляция -->
    <section class="mb-5">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">Регистрация и онлайн-трансляция</h4>
        </div>
        <div class="card-body">
          <p>
            <strong>Возможна предварительная регистрация участников</strong> на
            сайте технического организатора
            <a href="http://www.medQ.ru" target="_blank" class="fw-bold"
              >www.medQ.ru</a
            >
            в разделе конференции.
          </p>
          <p>
            На этом же сайте будет организована онлайн-трансляция Конференции и
            позже выложен ее
            <a
              href="https://medq.ru/videokonferentsii/nevrologija"
              target="_blank"
              class="fw-bold"
              >видеоархив</a
            >.
          </p>
        </div>
      </div>
    </section>

    <!-- Место проведения -->
    <section class="mb-5">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white text-center">
          <h4 class="mb-0">Место проведения конференции</h4>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">Здание Правительства Москвы</h5>
          <p class="card-text">Москва, Новый Арбат, 36</p>
          <div class="map-container mt-3">
            <iframe
              src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Ab768b48660dd3fc9763725da2ae74117683ec79bbdf72195852c9a903d9f758a"
              frameborder="0"
              allowfullscreen="true"
              width="100%"
              height="400px"
              style="display: block"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Программа конференции -->
    <section class="mb-5">
      <h3 class="mb-4 text-primary border-bottom pb-2">
        Программа конференции
      </h3>

      <div class="program-tabs">
        <ul class="nav nav-tabs" id="programTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="main-tab"
              data-bs-toggle="tab"
              data-bs-target="#main-program"
              type="button"
              role="tab"
              aria-controls="main-program"
              aria-selected="true"
            >
              Основная программа
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="school-tab"
              data-bs-toggle="tab"
              data-bs-target="#school-program"
              type="button"
              role="tab"
              aria-controls="school-program"
              aria-selected="false"
            >
              Школа молодых ученых
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="satellite-tab"
              data-bs-toggle="tab"
              data-bs-target="#satellite-program"
              type="button"
              role="tab"
              aria-controls="satellite-program"
              aria-selected="false"
            >
              Сателлитные симпозиумы
            </button>
          </li>
        </ul>

        <div
          class="tab-content p-3 border border-top-0 rounded-bottom"
          id="programTabsContent"
        >
          <!-- Основная программа -->
          <div
            class="tab-pane fade show active"
            id="main-program"
            role="tabpanel"
            aria-labelledby="main-tab"
          >
            <div class="timeline">
              <div
                v-for="item in mainProgram"
                :key="item.time"
                class="timeline-item"
              >
                <div class="timeline-time">{{ item.time }}</div>
                <div class="timeline-content card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p v-if="item.speaker" class="card-text text-muted">
                      {{ item.speaker }}
                    </p>
                    <ul v-if="item.subitems" class="list-unstyled mt-2">
                      <li
                        v-for="subitem in item.subitems"
                        :key="subitem"
                        class="mb-1"
                      >
                        <i class="bi bi-dot text-primary"></i> {{ subitem }}
                      </li>
                    </ul>
                    <div v-if="item.note" class="mt-2 small text-muted">
                      {{ item.note }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Школа молодых ученых -->
          <div
            class="tab-pane fade"
            id="school-program"
            role="tabpanel"
            aria-labelledby="school-tab"
          >
            <div class="timeline">
              <div
                v-for="item in schoolProgram"
                :key="item.time"
                class="timeline-item"
              >
                <div class="timeline-time">{{ item.time }}</div>
                <div class="timeline-content card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p v-if="item.speaker" class="card-text text-muted">
                      {{ item.speaker }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Сателлитные симпозиумы -->
          <div
            class="tab-pane fade"
            id="satellite-program"
            role="tabpanel"
            aria-labelledby="satellite-tab"
          >
            <div class="timeline">
              <div
                v-for="item in satelliteProgram"
                :key="item.time"
                class="timeline-item"
              >
                <div class="timeline-time">{{ item.time }}</div>
                <div class="timeline-content card shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p v-if="item.speaker" class="card-text text-muted">
                      {{ item.speaker }}
                    </p>
                    <ul v-if="item.subitems" class="list-unstyled mt-2">
                      <li
                        v-for="subitem in item.subitems"
                        :key="subitem"
                        class="mb-1"
                      >
                        <i class="bi bi-dot text-primary"></i> {{ subitem }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Провайдер конференции -->
    <footer class="mt-5 pt-4 border-top">
      <h5 class="text-primary">Провайдер Конференции:</h5>
      <address class="bg-light p-3 rounded">
        <strong>ООО "Медзнания"</strong><br />
        127083, г.Москва, Большой Каретный пер.,7<br />
        <i class="bi bi-telephone"></i> Тел: (495) 699-14-65; 699-81-84<br />
        <i class="bi bi-envelope"></i> E-mail:
        <a href="mailto:info@medq.ru">info@medq.ru</a>
      </address>
      <div class="social-links mt-3">
        <a
          href="https://www.facebook.com/medQ.ru/"
          target="_blank"
          class="btn btn-outline-primary me-2"
        >
          <i class="bi bi-facebook"></i> Страница на Фейсбуке
        </a>
        <a
          href="https://medq.ru/informatsionnaya-podderzhka/besplatnoe-prilozhenie-dlja-ios-i-android"
          target="_blank"
          class="btn btn-outline-primary"
        >
          <i class="bi bi-phone"></i> Приложение MedQ+
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import YearsSection from '../../components/scientific_practical/years-section.vue'

export default {
  name: 'Conference2017',
  components: { YearsSection },
  data() {
    return {
      topics: [
        'Острые и хронические нарушения мозгового кровообращения и постинсультные состояния',
        'Когнитивные расстройства',
        'Альгология (болевые синдромы, головные боли, мигрень)',
        'Нейроонкология',
        'Нейрореабилитация',
        'Неврологические аспекты внутренней медицины',
        'Возрастные аспекты неврологии',
        'Дегенеративные заболевания нервной системы',
        'Пароксизмальные состояния',
        'Нейроинфекции',
        'Дизиммунные заболевания нервной системы',
        'Клинические исследования новых лекарственных препаратов в неврологии',
        'Фундаментальные и экспериментальные исследования',
      ],
      mainProgram: [
        {
          time: '10.00 – 10.10',
          title: 'Приветствие участников конференции',
          speaker: 'Владимир Иванович Шмырев',
        },
        {
          time: '10.10 – 10.40',
          title:
            'Системная психоневрология: современные представления о структурно-функциональной организации головного мозга',
          speaker: 'Игорь Владимирович Дамулин',
        },
        {
          time: '10.40 – 11.00',
          title: 'Фармакотерапия тяжелой черепно-мозговой травмы',
          speaker: 'Олег Семенович Зайцев',
        },
        {
          time: '11.00 – 11.45',
          title: 'Симпозиум «Реабилитация пациентов после инсульта»',
          speaker: 'модератор: профессор В.И.Шмырев',
          subitems: [
            '«Реабилитация пациентов после инсульта: постинсультные двигательные, речевые нарушения, нарушения навыков самообслуживания» - Рафиз Каирович Шихкеримов',
          ],
          note: 'Доклад – 30 мин. Дискуссия – 15 мин',
        },
        {
          time: '11.45 – 12.05',
          title: 'Междисциплинарные клинические аспекты боли',
          speaker: 'Алексей Сергеевич Васильев',
        },
        {
          time: '12.05 – 12.25',
          title: 'Атипичная лицевая боль: возможности терапии',
          speaker: 'Ольга Николаевна Фищенко',
        },
        {
          time: '12.25 – 12.45',
          title: 'Боль в спине',
          speaker: 'Елена Евгеньевна Васенина',
          note: 'Доклад при поддержке компании «Байер»',
        },
        { time: '12.45 – 13.15', title: 'Перерыв' },
        {
          time: '13.15 – 13.35',
          title:
            'Эпидемиология, экономические и социальные аспекты лечения гипофизарного нанизма препаратами рГР',
          speaker: 'Мария Владимировна Воронцова',
        },
        {
          time: '13.35 – 13.55',
          title:
            'Современный взгляд на терапию генерализованных тревожных расстройств в повседневной практике невролога',
          speaker: 'Владимир Владимирович Захаров',
        },
        {
          time: '13.55 – 14.40',
          title: 'Симпозиум «От теории к практике»',
          speaker: 'модератор: профессор В.И.Шмырев',
          subitems: [
            'Коррекция когнитивных нарушений у больных с хронической ишемией головного мозга - Павел Рудольфович Камчатнов',
            'Тревога в неврологической практике. Какая она? - Анастасия Валерьевна Федотова',
          ],
          note: 'Доклады по 20 мин. Дискуссия 5 мин',
        },
        {
          time: '14.40 – 15.00',
          title: 'Хроническая ишемия мозга – территория инсульта',
          speaker: 'Любовь Петровна Соколова',
        },
        {
          time: '15.00 – 15.45',
          title: 'Симпозиум «Терапия болевых синдромов»',
          speaker: 'модератор: профессор В.И.Шмырев',
          subitems: [
            '«Современные технологии терапии болевых синдромов» - Андрей Петрович Рачин',
          ],
          note: 'Доклад – 30 мин. Дискуссия – 15 мин',
        },
        {
          time: '15.45 – 16.05',
          title: 'Неврологические «маски» ортопедической патологии таза',
          speaker: 'Сергей Борисович Извозчиков',
        },
        {
          time: '16.05 – 16.25',
          title:
            'Технологии диагностики и медицинской реабилитации больных с посттравматическими синдромами вследствие черепно-мозговой травмы',
          speaker: 'Тамара Ивановна Кравченко',
        },
        {
          time: '16.25 – 16.45',
          title:
            'Новые возможности низкоинтенсивного электромагнитного излучения в нейрореабилитации ишемического инсульта',
          speaker: 'Сауле Тлеубергеновна Туруспекова',
        },
        {
          time: '16.25 – 16.45',
          title: 'Ошибки в диагностике и лечении эпилепсии',
          speaker: 'Анжела Борисовна Кожокару',
        },
        {
          time: '16.45 – 17.05',
          title: 'Клещевой энцефалит в России и Московском регионе',
          speaker: 'Екатерина Геннадьевна Демьяновская',
        },
      ],
      schoolProgram: [
        {
          time: '13.00 – 13.10',
          title:
            'Остеопатическая коррекция хронических головных болей у студентов со средней и высокой степенью миопии',
          speaker: 'Т.Ю.Белкина',
        },
        {
          time: '13.10 – 13.20',
          title:
            'Лечение болевых синдромов у спортсменов методами ортопедической коррекции стоп индивидуальными ортезами системы «Футмастер» и остеопатии',
          speaker: 'Л.В.Лозинский',
        },
        {
          time: '13.20 – 13.30',
          title: 'Транзиторная глобальная амнезия',
          speaker: 'Н.В.Михайлова',
        },
        {
          time: '13.30 – 13.40',
          title:
            'Показатели параметров мозгового кровотока у больных сахарным диабетом I типа и диабетической нефропатией',
          speaker: 'К.Г.Саркисова',
        },
        {
          time: '13.40 – 13.50',
          title:
            'Преимущества эпидуральных блокад над стандартной терапией радикулопатии вследствие дегенеративно-дистрофических изменений позвоночного столба проводимой в условиях стационара',
          speaker: 'В.Д.Ткаченко',
        },
        {
          time: '13.50 – 14.00',
          title:
            'Динамика неврологических синдромов в процессе лечения больных со стенозом позвоночного канала на пояснично-крестцовом уровне',
          speaker: 'А.А.Тян',
        },
      ],
      satelliteProgram: [
        {
          time: '11.00 – 12.40',
          title: 'Симпозиум «Сестринское дело»',
          speaker: 'Модераторы: И.В.Козырева, В.Н.Овчаренко, Л.В.Головчанская',
          subitems: [
            '11.00 – 11.15: Сестринское дело от истоков к перспективам - И.В.Козырева',
            '11.15 – 11.35: Неотложная помощь при травмах - В.Н.Овчаренко',
            '11.35 – 11.50: Особенности сестринского ухода за лицами пожилого и старческого возраста - Л.В.Головчанская',
            '11.50 – 11.55: Особенности сестринского ухода за лицами пожилого и старческого возраста - А. Наумцева',
            '11.55 – 12.00: Выявление факторов риска и обучение самоуходу гериатрических пациентов, страдающих сахарным диабетом - В.Дьяконова',
            '12.00 – 12.05: О возможности применения сложноинструментальных методов исследования для гериатрических пациентов - И.Кохановская',
            '12.05 – 12.10: Психологические особенности пожилых людей и ухода за ними - О.Романов',
            '12.10 – 12.15: Практические методики «Позитивный настрой к процессу старения. Улучшение памяти и концентрации внимания» - О.Романов',
            '12.15 – 12.40: Сердечно-легочная реанимация (мастер-класс) - В.Н.Овчаренко',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.conference-2017 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
}

.conference-date {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.timeline {
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #dee2e6;
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-time {
  position: absolute;
  left: -50px;
  width: 40px;
  text-align: right;
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: 500;
}

.timeline-content {
  position: relative;
  margin-left: 30px;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -30px;
  top: 15px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #0d6efd;
  border: 2px solid white;
  box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.2);
}

.card {
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  border: none;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;
}

.text-primary {
  color: #0d6efd !important;
}

.border-bottom {
  border-bottom: 2px solid #dee2e6 !important;
}

.bi {
  margin-right: 5px;
}

.program-tabs .nav-tabs .nav-link {
  font-weight: 500;
}

.program-tabs .nav-tabs .nav-link.active {
  font-weight: bold;
}

.map-container {
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.social-links .btn {
  display: inline-flex;
  align-items: center;
}
</style>
