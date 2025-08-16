<template>
  <section class="education-features">
    <div class="container">
      <h2 class="section-title">Особенности обучения</h2>
      <div class="features-content">
        <div class="features-text">
          <p class="feature-description">
            При обучении осуществляются следующие основные виды и формы учебных
            занятий: лекции, практические, семинарские и выездные занятия,
            стажировка на рабочем месте, контрольные и другие работы,
            методическое руководство, консультации, самостоятельная работа
            обучаемых, проведение экспертизы и разбора конкретных случаев и т.д.
          </p>
          <p class="feature-description">
            При проведении учебных занятий активно используются телемедицинские
            и симуляционные технологии.
          </p>
        </div>

        <div class="features-list">
          <div class="feature-item">
            <div class="feature-icon">📖</div>
            <div class="feature-content">
              <h3 class="feature-title">Лекции и семинары</h3>
              <p class="feature-text">
                Теоретические и практические занятия по неврологии
              </p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">🏥</div>
            <div class="feature-content">
              <h3 class="feature-title">Клиническая практика</h3>
              <p class="feature-text">
                Стажировка на рабочем месте и выездные занятия
              </p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">💻</div>
            <div class="feature-content">
              <h3 class="feature-title">Телемедицина</h3>
              <p class="feature-text">
                Современные технологии дистанционного обучения
              </p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <div class="feature-content">
              <h3 class="feature-title">Симуляционные технологии</h3>
              <p class="feature-text">
                Практические навыки на современных тренажерах
              </p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">👥</div>
            <div class="feature-content">
              <h3 class="feature-title">Экспертиза и разборы</h3>
              <p class="feature-text">Анализ реальных клинических случаев</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">📋</div>
            <div class="feature-content">
              <h3 class="feature-title">Контроль знаний</h3>
              <p class="feature-text">
                Регулярная оценка и квалификационные экзамены
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationFeatures',
}
</script>

<style lang="scss" scoped>
@use './EducationFeatures.scss';
</style>
