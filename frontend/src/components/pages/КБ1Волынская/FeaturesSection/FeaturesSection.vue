<template>
  <section id="features" class="features-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Наши преимущества</h2>
        <p class="section-subtitle">
          Почему пациенты доверяют нам свое здоровье
        </p>
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
          <h3>Качественная диагностика</h3>
          <p>
            Использование современного диагностического оборудования для точного
            определения заболеваний и выбора оптимальной тактики лечения
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
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>
          <h3>Команда профессионалов</h3>
          <p>
            Высококвалифицированные врачи с многолетним опытом работы в
            различных областях медицины и постоянным повышением квалификации
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
          <h3>Современные технологии</h3>
          <p>
            Внедрение инновационных медицинских технологий и методик для
            повышения эффективности лечения и улучшения качества жизни пациентов
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
          <h3>Оперативность</h3>
          <p>
            Быстрое реагирование на экстренные ситуации и минимальное время
            ожидания для плановых пациентов
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
          <h3>Забота о пациентах</h3>
          <p>
            Индивидуальный подход к каждому пациенту с учетом его особенностей и
            потребностей для достижения наилучших результатов лечения
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
          <h3>Безопасность</h3>
          <p>
            Соблюдение всех международных стандартов безопасности и гигиены для
            обеспечения здоровья пациентов и медицинского персонала
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
