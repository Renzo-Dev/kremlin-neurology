<template>
  <section class="research-stats">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">Статистика</span>
        <h2 class="section-title">
          Итоги научной<br />
          <span class="title-accent">деятельности</span>
        </h2>
        <p class="section-description">
          За годы работы кафедры накоплен значительный опыт и достигнуты
          впечатляющие результаты в области научных исследований и подготовки
          кадров.
        </p>
      </div>

      <div class="stats-overview">
        <div class="overview-card">
          <div class="card-header">
            <div class="card-icon">📊</div>
            <h3>Общие показатели</h3>
          </div>
          <div class="stats-list">
            <div class="stat-row">
              <span class="stat-label">Годы научной работы</span>
              <span class="stat-value">50+</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Получено патентов</span>
              <span class="stat-value">20</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Темы НИР</span>
              <span class="stat-value">4</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Защищенные диссертации</span>
              <span class="stat-value">3</span>
            </div>
          </div>
        </div>

        <div class="overview-card">
          <div class="card-header">
            <div class="card-icon">📚</div>
            <h3>Публикации</h3>
          </div>
          <div class="stats-list">
            <div class="stat-row">
              <span class="stat-label">Монографии</span>
              <span class="stat-value">2</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Статьи ВАК</span>
              <span class="stat-value">2</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Тезисы</span>
              <span class="stat-value">16</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Сборники трудов</span>
              <span class="stat-value">2</span>
            </div>
          </div>
        </div>

        <div class="overview-card">
          <div class="card-header">
            <div class="card-icon">🎤</div>
            <h3>Конференции</h3>
          </div>
          <div class="stats-list">
            <div class="stat-row">
              <span class="stat-label">Доклады</span>
              <span class="stat-value">20</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Уровень конференций</span>
              <span class="stat-value">Международный</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Симпозиумы</span>
              <span class="stat-value">Различные</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Научные форумы</span>
              <span class="stat-value">Многоуровневые</span>
            </div>
          </div>
        </div>
      </div>

      <div class="achievement-highlight">
        <div class="highlight-content">
          <h3>Премия Правительства РФ</h3>
          <p>
            За разработки в области антиоксидантной терапии профессор Шмырёв
            В.И., доцент Миронов Н.В. и их соавторы стали лауреатами Премии
            Правительства Российской Федерации в области науки и техники за 2002
            год.
          </p>
          <div class="award-details">
            <span class="award-number">№ 4861, 2003</span>
          </div>
        </div>
        <div class="highlight-icon">🏆</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResearchStats',
}
</script>

<style lang="scss" scoped>
@use './ResearchStats.scss';
</style>
