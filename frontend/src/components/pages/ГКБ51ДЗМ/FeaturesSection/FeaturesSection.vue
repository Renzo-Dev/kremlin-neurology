<template>
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Возможности отделения</h2>
        <div class="section-divider"></div>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="feature-title">Мультидисциплинарная бригада</h3>
          <p class="feature-description">
            Ведение больных осуществляет бригада специалистов, включающая
            неврологов, кардиологов, анестезиологов-реаниматологов, специалистов
            по функциональной диагностике и реабилитации.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <h3 class="feature-title">Современная диагностика</h3>
          <p class="feature-description">
            Дуплексное сканирование брахиоцефальных артерий, транскраниальная
            доплерография, электроэнцефалография, нейровизуализация.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="feature-title">Терапевтическое окно</h3>
          <p class="feature-description">
            Госпитализация пациентов с инсультом в рамках первых 6 часов от
            начала инсульта, включая тромболизис.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 class="feature-title">Ранняя реабилитация</h3>
          <p class="feature-description">
            Современные средства ранней реабилитации пациентов с ОНМК, включая
            компьютеризированные системы с биологической обратной связью.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 class="feature-title">Круглосуточное наблюдение</h3>
          <p class="feature-description">
            В БИНе проводится круглосуточное лечение и наблюдение больных с ОНМК
            врачами и средним медицинским персоналом.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 class="feature-title">Образовательная база</h3>
          <p class="feature-description">
            Отделение предоставляет отличные возможности для овладения базовыми
            знаниями и навыками врача-невролога.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
}
</script>

<style lang="scss" scoped>
@use './FeaturesSection.scss';
</style>
