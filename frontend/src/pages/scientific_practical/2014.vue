<template>
  <div class="conference-page container py-4">
    <years-section />
    <!-- Заголовок конференции -->
    <header class="text-center mb-5">
      <h1 class="display-6 fw-bold">
        VII Российская научно-практическая конференция с международным участием
      </h1>
      <h2 class="display-6 text-primary">
        «Инновационные технологии в области неврологии и смежных специальностей»
      </h2>
      <div
        class="conference-date bg-primary text-white d-inline-block px-3 py-2 rounded mt-3"
      >
        <h3 class="mb-0">02 ноября 2016г.</h3>
      </div>
    </header>

    <!-- Научные руководители -->
    <section class="mb-5">
      <h3 class="mb-4 text-primary border-bottom pb-2">
        Научные руководители конференции
      </h3>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">Шмырев Владимир Иванович</h5>
              <p class="card-text">
                д.м.н., профессор, заведующий кафедрой неврологии ФГБУ ДПО
                «ЦГМА» УД Президента РФ, член Президиума Всероссийского общества
                неврологов
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">Яхно Николай Николаевич</h5>
              <p class="card-text">
                академик РАМН, заслуженный деятель науки РФ, д.м.н., заведующий
                научно-исследовательским отделом неврологии
                научно-исследовательского центра, профессор кафедры нервных
                болезней лечебного факультета, директор научно-образовательного
                клинического центра неврологии ФГБОУ ВО «Первый МГМУ им.
                И.М.Сеченова» МЗ РФ
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">Бойко Алексей Николаевич</h5>
              <p class="card-text">
                д.м.н., профессор кафедры неврологии и нейрохирургии с курсом
                ФУВ ЛФ ФГБОУ ВО «РНИМУ им.Н.И.Пирогова» МЗ РФ, Президент
                Общероссийской общественной организации «Российский комитет
                исследователей рассеянного склероза»(РОКИРС)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Сопредседатель -->
    <section class="mb-5">
      <h3 class="mb-3 text-primary border-bottom pb-2">
        Сопредседатель конференции:
      </h3>
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-primary">Васильев Алексей Сергеевич</h5>
          <p class="card-text">
            к.м.н., доцент, кафедры неврологии ФГБУ ДПО «ЦГМА» УД Президента РФ
            (научный секретарь конференции)
          </p>
        </div>
      </div>
    </section>

    <!-- Программа конференции -->
    <section class="mb-5">
      <h3 class="mb-4 text-primary border-bottom pb-2">
        Программа конференции
      </h3>

      <!-- Регистрация -->
      <div class="card mb-4 shadow-sm">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">09.00 – 10.00</h4>
        </div>
        <div class="card-body">
          <p class="card-text lead">Регистрация участников</p>
        </div>
      </div>

      <!-- Основная программа -->
      <h4 class="mt-5 mb-4 text-primary border-bottom pb-2">
        Основная программа
      </h4>

      <div class="timeline">
        <!-- Элементы программы -->
        <div class="timeline-item">
          <div class="timeline-time">10.00 – 10.10</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Приветствие участников конференции</h5>
              <p class="card-text text-muted">В.И.Шмырев</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">10.10 – 10.40</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Актуальные вопросы нейрогериатрии</h5>
              <p class="card-text text-muted">Н.Н.Яхно</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">10.40 – 11.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Прогрессирующая мультифокальная лейкоэнцефалопатия
              </h5>
              <p class="card-text text-muted">Н.В.Хачанова</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">11.00 – 11.15</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Когнитивные нарушения в практике невролога и терапевта
              </h5>
              <p class="card-text text-muted">В.В.Захаров</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">11.15 – 12.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Симпозиум «Цереброваскулярная болезнь и боль: от парадигмы до
                клинических рекомендаций» при поддержке Берлин-Хеми
              </h5>
              <p class="card-text text-muted">(Председатель А.И.Федин)</p>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="bi bi-dot text-primary"></i> Управляемый
                  гиперагрегационный эффект как механизм профилактики инсульта.
                  М.В.Путилина
                </li>
                <li>
                  <i class="bi bi-dot text-primary"></i> Версии и контраверсии
                  безопасности лечения боли в спине. Э.Ю.Соловьева
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">12.00 – 12.15</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Когнитивное снижение, психастения или органика?
              </h5>
              <p class="card-text text-muted">Л.П.Соколова</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">12.15 – 12.30</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Медикаметозная поддержка востановительного лечения после
                перенесенного инсульта
              </h5>
              <p class="card-text text-muted">П.Р.Камчатнов</p>
            </div>
          </div>
        </div>

        <!-- Перерыв -->
        <div class="timeline-item">
          <div class="timeline-time">12.30 – 13.00</div>
          <div class="timeline-content card bg-light">
            <div class="card-body">
              <h5 class="card-title text-center">Перерыв</h5>
            </div>
          </div>
        </div>

        <!-- Продолжение программы -->
        <div class="timeline-item">
          <div class="timeline-time">13.00 – 13.15</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Организационные и нормативно-правовые аспекты нейрореабилитации
                пациентов, перенесших инсульт
              </h5>
              <p class="card-text text-muted">Г.Н.Бельская</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">13.15 – 13.30</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Межвизитная вариабельность артериального давления у больных
                ишемическим инсультом
              </h5>
              <p class="card-text text-muted">А.В.Казакова, Л.О.Минушкина</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">13.30 – 13.45</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Ортопедическая поддержка при проблемно-ориентированном подходе в
                реабилитационном ведении пациентов после инсульта
              </h5>
              <p class="card-text text-muted">А.М.Саркисян</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">13.45 – 14.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Применение нейротропных витаминов в неврологии
              </h5>
              <p class="card-text text-muted">М.Л.Кукушкин</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.00 – 14.15</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Современные подходы к диагностике и лечению диабетической
                полинейропатии
              </h5>
              <p class="card-text text-muted">И.А.Строков</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.15 – 14.30</div>
          <div class="timeline-conte~nt card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Терапия хронических нарушений мозгового кровообращения
              </h5>
              <p class="card-text text-muted">О.В.Воробьева</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.30 – 14.45</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Влияние препарата Мемоплант в режиме монотерапии на
                головокружение
              </h5>
              <p class="card-text text-muted">Н.Л.Кунельская, Е.С.Янюшкина</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.45 – 15.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Неврологические проявления синдрома эмоционального выгорания
              </h5>
              <p class="card-text text-muted">Л.С.Чутко</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.00 – 15.15</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Рекомендации по диагностике и лечению сосудистых когнитивных
                нарушений
              </h5>
              <p class="card-text text-muted">И.Г.Смоленцева, Ю.В.Павлов</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.15 – 15.30</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Трудности ведения пациента с болью в спине
              </h5>
              <p class="card-text text-muted">П.Р.Камчатнов</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.30 – 15.45</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Хронические нарушения спинального кровообращения
              </h5>
              <p class="card-text text-muted">А.А.Скоромец</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.45 – 16.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Клиническая значимость ортостатической гипотензии при
                нейродегенеративных заболеваниях
              </h5>
              <p class="card-text text-muted">О.А.Маслюк</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">16.00 – 16.15</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Аналитический обзор тазовой боли в амбулаторной практике
                невролога
              </h5>
              <p class="card-text text-muted">С.Б.Извозчиков</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">16.15 – 16.30</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Дискорадикулярная декомпрессия системами DRX на поликлиническом
                этапе лечения
              </h5>
              <p class="card-text text-muted">Е.Е.Беляева</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">16.30 – 16.45</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Профиль качества неврологической медицинской помощи
              </h5>
              <p class="card-text text-muted">Т.Г.Маховская</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">16.45 – 17.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Междисциплинарные аспекты торакалгий и безболевых торакальных
                синдромов в клинической практике
              </h5>
              <p class="card-text text-muted">А.С.Васильев</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">17.00 – 18.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Вопросы организации здравоохранения в Российской Федерации
              </h5>
              <p class="card-text text-muted">М.В.Кочнева</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">18.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Дискуссия</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Школа молодых ученых -->
    <section class="mb-5">
      <h3 class="mb-4 text-primary border-bottom pb-2">
        Секция "Школа молодых ученых"
      </h3>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-time">14.00 – 14.10</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Вступительное слово</h5>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.10 – 14.20</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Дисфункция эндотелия как предиктор прогноза сердечно-сосудистой
                патологии
              </h5>
              <p class="card-text text-muted">Гайса Н.Н.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.20 – 14.30</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Взаимосвязь нейпропсихологического и нейрофункционального
                статуса у пациентов с первичными головными болями
              </h5>
              <p class="card-text text-muted">Аветисова К.Н.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.30 – 14.40</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Особенности выбора метода родоразрешения при последствиях
                черепно-мозговой травмы
              </h5>
              <p class="card-text text-muted">Волынкин А.А.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.40 – 14.50</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                ЭЭГ у пациентов с острыми поражениями головного мозга
              </h5>
              <p class="card-text text-muted">Устинская С.А.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">14.50 – 15.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Влияние хирургического лечения на качество жизни больных с
                нормотензивной гидроцефалией
              </h5>
              <p class="card-text text-muted">Пономарева В.И.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.00 – 15.10</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Клинические критерии первичной ангиохирургической профилактики
                ишемического инсульта
              </h5>
              <p class="card-text text-muted">Баскова Т.Г.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.10 – 15.20</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Неврологические проявления постмастэктомического синддрома после
                нервсберегающих операций у больных раком молочной железы
              </h5>
              <p class="card-text text-muted">Обманов И.В.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.20 – 15.30</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Остеоартрит при иксодовом клещевом боррелиозе
              </h5>
              <p class="card-text text-muted">Демьяновская Е.Г.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.30 – 15.40</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Когнитивные нарушения у пациентов с психовегетативным синдромом
                (нейрометаболические аспекты)
              </h5>
              <p class="card-text text-muted">Князева И.В.</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-time">15.40 – 16.00</div>
          <div class="timeline-content card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Вручение Свидетельств</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Материалы конференции -->
    <section class="mb-5">
      <div class="card shadow">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">Материалы конференции</h4>
        </div>
        <div class="card-body">
          <p class="card-text">
            Скачать сборник материалов VII Российской научно-практической
            конференции с международным участием «Инновационные технологии в
            области неврологии и смежных специальностей» можно по
            <a href="#" class="btn btn-outline-primary">этой ссылке</a>
            (документ в формате *.pdf)<br />
            <span class="text-muted">ISBN 978-5-906210-01-2</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Футер -->
    <footer class="mt-5 pt-4 border-top">
      <h5 class="text-primary">Провайдер Конференции:</h5>
      <address class="bg-light p-3 rounded">
        <strong>ООО "Медзнания"</strong><br />
        127083, г.Москва,Большой Каретный пер.,7<br />
        <i class="bi bi-telephone"></i> Тел: (495) 699-14-65; 699-81-84<br />
        <i class="bi bi-envelope"></i> E-mail:
        <a href="mailto:info@medq.ru">info@medq.ru</a>
      </address>
    </footer>
  </div>
</template>

<script>
import YearsSection from '../../components/scientific_practical/years-section.vue'

export default {
  name: 'ConferencePage',
  components: { YearsSection },
  data() {
    return {}
  },
}
</script>

<style scoped>
.conference-page {
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
  cursor: default;
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
</style>
