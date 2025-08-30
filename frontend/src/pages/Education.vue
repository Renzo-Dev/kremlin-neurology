<template>
  <div class="education-page">
    <EducationHero />
    <EducationInfo />
    <EducationPrograms />
    <EducationFeatures />

    <!-- Навигация по образовательным программам -->
    <div class="education-navigation">
      <div class="container">
        <h2 class="navigation-title">Образовательные программы</h2>
        <div class="programs-grid">
          <router-link to="/education/ordinatura" class="program-card">
            <div class="program-icon">🎓</div>
            <h3>Ординатура</h3>
            <p>Профессиональная переподготовка по специальности "Неврология"</p>
            <div class="program-details">
              <span class="duration">2 года обучения</span>
              <span class="format">Очная форма</span>
            </div>
          </router-link>

          <router-link to="/education/aspirantura" class="program-card">
            <div class="program-icon">🔬</div>
            <h3>Аспирантура</h3>
            <p>
              Научно-исследовательская подготовка для получения ученой степени
            </p>
            <div class="program-details">
              <span class="duration">3-4 года</span>
              <span class="format">Очная/заочная</span>
            </div>
          </router-link>

          <router-link
            to="/education/professional-retraining"
            class="program-card"
          >
            <div class="program-icon">📚</div>
            <h3>Профессиональная переподготовка</h3>
            <p>Программы повышения квалификации для врачей-неврологов</p>
            <div class="program-details">
              <span class="duration">504 часа в год</span>
              <span class="format">Очно-заочная</span>
            </div>
          </router-link>

          <router-link
            to="/education/certification-cycles"
            class="program-card"
          >
            <div class="program-icon">🏥</div>
            <h3>Сертификационные циклы</h3>
            <p>Повышение квалификации для получения сертификата специалиста</p>
            <div class="program-details">
              <span class="duration">144 часа в год</span>
              <span class="format">Очно-заочная</span>
            </div>
          </router-link>

          <router-link
            to="/education/thematic-improvement"
            class="program-card"
          >
            <div class="program-icon">⚡</div>
            <h3>Тематическое усовершенствование</h3>
            <p>Специализированные курсы по актуальным вопросам неврологии</p>
            <div class="program-details">
              <span class="duration">72 часа</span>
              <span class="format">Очно-заочная</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EducationFeatures from '@/components/pages/Education/EducationFeatures/EducationFeatures.vue'
import EducationHero from '@/components/pages/Education/EducationHero/EducationHero.vue'
import EducationInfo from '@/components/pages/Education/EducationInfo/EducationInfo.vue'
import EducationPrograms from '@/components/pages/Education/EducationPrograms/EducationPrograms.vue'

export default {
  name: 'EducationPage',
  components: {
    EducationFeatures,
    EducationHero,
    EducationInfo,
    EducationPrograms,
  },
  metaInfo: {
    title: 'Образование - Кафедра неврологии',
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/Education/education';

.education-page {
  min-height: 100vh;
}

.education-navigation {
  padding: 80px 0;
  background: #f8f9fa;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .navigation-title {
    font-size: 2.5rem;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 3rem;
  }
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.program-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    color: inherit;
  }

  .program-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .program-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      background: #e9ecef;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      color: #495057;
      font-weight: 500;
    }
  }
}

@media (max-width: 768px) {
  .education-navigation {
    padding: 60px 0;

    .navigation-title {
      font-size: 2rem;
    }
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }

  .program-card {
    padding: 2rem;

    .program-details {
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
