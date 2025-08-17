<template>
  <section class="research-history">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">История</span>
        <h2 class="section-title">
          Основание научной<br />
          <span class="title-accent">базы</span>
        </h2>
        <p class="section-description">
          В 1968 году была создана мощная научно-исследовательская
          инфраструктура, которая заложила основу для развития современной
          неврологии в России.
        </p>
      </div>

      <div class="history-timeline">
        <div class="timeline-item">
          <div class="timeline-date">1967</div>
          <div class="timeline-content">
            <h3>Постановление Коллегии Госкомитета СССР</h3>
            <p>
              Принято решение об организации Центральной
              научно-исследовательской лаборатории Четвертого главного
              управления при Министерстве здравоохранения СССР.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1968</div>
          <div class="timeline-content">
            <h3>Создание специализированных клиник</h3>
            <p>
              Организованы 7 специализированных клиник: общей терапии,
              неотложной терапии, кардиологии, гастроэнтерологии,
              психоневрологии, хирургии, реанимации и анестезиологии.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1968</div>
          <div class="timeline-content">
            <h3>Формирование научных отделов</h3>
            <p>
              Созданы 5 отделов: реабилитации, патоморфологии, патофизиологии,
              биохимии и кибернетики для междисциплинарных исследований.
            </p>
          </div>
        </div>
      </div>

      <div class="history-highlight">
        <div class="highlight-icon">🔬</div>
        <div class="highlight-content">
          <h3>Междисциплинарный подход</h3>
          <p>
            Столь мощный даже по современным меркам потенциал междисциплинарных
            исследований позволил обеспечить высочайший уровень научных
            разработок в области неврологии.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResearchHistory',
}
</script>

<style lang="scss" scoped>
@use './ResearchHistory.scss';
</style>
