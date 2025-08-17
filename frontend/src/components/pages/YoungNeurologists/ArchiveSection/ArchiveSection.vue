<template>
  <section class="archive-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Архив и дополнительная информация</h2>
        <div class="section-divider"></div>
      </div>

      <div class="archive-content">
        <div class="archive-info">
          <div class="info-card">
            <div class="info-icon">📅</div>
            <h3>Регулярность проведения</h3>
            <p>
              Мероприятия проводятся 8 раз в год по вторым вторникам месяца. При
              необходимости даты могут быть перенесены на третий вторник или
              иной день.
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>Место проведения</h3>
            <p>
              ЦГМА, г.Москва, ул. М. Тимошенко, 19-1А. Конкретный зал
              указывается на информационном табло при входе.
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">⏰</div>
            <h3>Время проведения</h3>
            <p>
              Начало мероприятий в 15:00 (если не указано иное).
              Продолжительность: 2-3 доклада по 20 минут каждый.
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">🎯</div>
            <h3>Формат мероприятий</h3>
            <p>
              Учебно-научные конференции с докладами сотрудников кафедры,
              приглашенных лекторов, ординаторов и аспирантов.
            </p>
          </div>
        </div>

        <div class="participation-section">
          <h3>Участие в работе кружка</h3>
          <div class="participation-benefits">
            <div class="benefit-item">
              <div class="benefit-icon">📚</div>
              <div class="benefit-content">
                <h4>Расширение кругозора</h4>
                <p>
                  Изучение актуальных проблем неврологии и современных методов
                  диагностики
                </p>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">🎤</div>
              <div class="benefit-content">
                <h4>Опыт публичных выступлений</h4>
                <p>Развитие навыков презентации и защиты научных работ</p>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">👥</div>
              <div class="benefit-content">
                <h4>Педагогическая практика</h4>
                <p>
                  Для ординаторов и аспирантов участие является формой
                  педагогической практики
                </p>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">🔬</div>
              <div class="benefit-content">
                <h4>Научное общение</h4>
                <p>Обсуждение докладов и обмен опытом с коллегами</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-info">
          <h3>Контакты для связи</h3>
          <div class="contact-grid">
            <div class="contact-item">
              <strong>Научный руководитель:</strong>
              <p>Алексей Сергеевич Васильев</p>
              <p>к.м.н., доцент кафедры неврологии</p>
            </div>
            <div class="contact-item">
              <strong>Секретарь кружка:</strong>
              <p>Надежда Владимировна Михайлова</p>
              <p>ассистент кафедры неврологии</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArchiveSection',
}
</script>

<style lang="scss" scoped>
@use './ArchiveSection.scss';
</style>
