<template>
  <section class="research-current">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">Текущая работа</span>
        <h2 class="section-title">
          Актуальные<br />
          <span class="title-accent">направления</span>
        </h2>
        <p class="section-description">
          В настоящее время кафедра ведет активную научно-исследовательскую
          работу по 4 темам НИР, что подтверждается высокими результатами в виде
          защищенных диссертаций и публикаций.
        </p>
      </div>

      <div class="current-research">
        <div class="research-topics">
          <h3>Темы научно-исследовательских работ</h3>
          <div class="topics-list">
            <div class="topic-item">
              <div class="topic-number">01</div>
              <div class="topic-content">
                <h4>Нейродегенеративные заболевания</h4>
                <p>Исследование механизмов развития и методов лечения</p>
              </div>
            </div>
            <div class="topic-item">
              <div class="topic-number">02</div>
              <div class="topic-content">
                <h4>Цереброваскулярная патология</h4>
                <p>Современные подходы к диагностике и терапии</p>
              </div>
            </div>
            <div class="topic-item">
              <div class="topic-number">03</div>
              <div class="topic-content">
                <h4>Нейроиммунология</h4>
                <p>Изучение иммунных механизмов в неврологии</p>
              </div>
            </div>
            <div class="topic-item">
              <div class="topic-number">04</div>
              <div class="topic-content">
                <h4>Нейрореабилитация</h4>
                <p>Инновационные методы восстановления функций</p>
              </div>
            </div>
          </div>
        </div>

        <div class="research-results">
          <h3>Результаты 2017 года</h3>
          <div class="results-grid">
            <div class="result-item">
              <div class="result-icon">🎓</div>
              <div class="result-number">3</div>
              <div class="result-label">Защищенные диссертации</div>
            </div>
            <div class="result-item">
              <div class="result-icon">📚</div>
              <div class="result-number">2</div>
              <div class="result-label">Монографии</div>
            </div>
            <div class="result-item">
              <div class="result-icon">📄</div>
              <div class="result-number">2</div>
              <div class="result-label">Статьи ВАК</div>
            </div>
            <div class="result-item">
              <div class="result-icon">📝</div>
              <div class="result-number">16</div>
              <div class="result-label">Тезисов</div>
            </div>
            <div class="result-item">
              <div class="result-icon">🎤</div>
              <div class="result-number">20</div>
              <div class="result-label">Докладов</div>
            </div>
            <div class="result-item">
              <div class="result-icon">📖</div>
              <div class="result-number">2</div>
              <div class="result-label">Сборника трудов</div>
            </div>
          </div>
        </div>
      </div>

      <div class="future-plans">
        <div class="plans-icon">🚀</div>
        <div class="plans-content">
          <h3>Планы на будущее</h3>
          <p>
            В настоящее время готовятся к подаче 2 заявки на полезные модели и
            изобретения, что свидетельствует о продолжении активной
            инновационной деятельности кафедры.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResearchCurrent',
}
</script>

<style lang="scss" scoped>
@use './ResearchCurrent.scss';
</style>
