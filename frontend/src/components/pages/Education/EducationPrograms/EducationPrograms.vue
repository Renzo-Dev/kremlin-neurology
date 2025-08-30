<template>
  <section class="education-programs">
    <div class="container">
      <h2 class="section-title">Образовательные программы</h2>
      <div class="programs-grid">
        <div class="program-card" @click="navigateToProgram('ordinatura')">
          <div class="card-header">
            <div class="program-icon">👨‍⚕️</div>
            <h3 class="program-title">Ординатура</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              2 года обучения по специальностям неврологического профиля
            </p>
            <div class="program-details">
              <span class="detail-item">2 года</span>
              <span class="detail-item">Очная форма</span>
              <span class="detail-item">Клинические базы</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>

        <div class="program-card" @click="navigateToProgram('aspirantura')">
          <div class="card-header">
            <div class="program-icon">🎓</div>
            <h3 class="program-title">Аспирантура</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              По специальности 14.01.11 "Нервные болезни"
            </p>
            <div class="program-details">
              <span class="detail-item">Очная форма</span>
              <span class="detail-item">Заочная форма</span>
              <span class="detail-item">Кандидатский минимум</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>

        <div class="program-card" @click="navigateToProgram('professional-retraining')">
          <div class="card-header">
            <div class="program-icon">📋</div>
            <h3 class="program-title">Профессиональная переподготовка</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              504 часа и более для получения новой специальности. Базовые цены на 2013 год.
            </p>
            <div class="program-details">
              <span class="detail-item">504+ часов</span>
              <span class="detail-item">от 35 000 ₽</span>
              <span class="detail-item">13 кафедр</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>

        <div class="program-card" @click="navigateToProgram('certification-cycles')">
          <div class="card-header">
            <div class="program-icon">⭐</div>
            <h3 class="program-title">Сертификационные циклы</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              Повышение квалификации 144 часа и более
            </p>
            <div class="program-details">
              <span class="detail-item">144+ часов</span>
              <span class="detail-item">Усовершенствование</span>
              <span class="detail-item">Сертификат</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>

        <div class="program-card" @click="navigateToProgram('thematic-improvement')">
          <div class="card-header">
            <div class="program-icon">📚</div>
            <h3 class="program-title">Тематическое усовершенствование</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              Специализированные курсы по актуальным вопросам неврологии
            </p>
            <div class="program-details">
              <span class="detail-item">72 часа</span>
              <span class="detail-item">Очно-заочная</span>
              <span class="detail-item">Сертификат</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationPrograms',
  methods: {
    navigateToProgram(program) {
      const routes = {
        'ordinatura': '/education/ordinatura',
        'aspirantura': '/education/aspirantura',
        'professional-retraining': '/education/professional-retraining',
        'certification-cycles': '/education/certification-cycles',
        'thematic-improvement': '/education/thematic-improvement'
      };
      
      if (routes[program]) {
        this.$router.push(routes[program]);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use './EducationPrograms.scss';
</style>
