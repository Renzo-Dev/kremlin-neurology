<template>
  <div class="conferences-page">
    <div class="container">
      <header class="page-header">
        <h1>Ежегодные конференции</h1>
        <p class="subtitle">
          Научно-практические конференции с международным участием "Современные подходы к диагностике и лечению неврологических заболеваний"
        </p>
      </header>

      <section class="conferences-overview">
        <h2>О конференциях</h2>
        <p>
          Конференции проводятся с 2010 года, в них принимают участие более 410 ведущих специалистов неврологии, 
          представляющих различные регионы Российской Федерации. Основная цель - обмен опытом и внедрение 
          современных технологий диагностики и лечения неврологических заболеваний.
        </p>
        <p>
          В рамках конференций обсуждаются актуальные вопросы неврологии, представляются новейшие достижения 
          в области диагностики и лечения, а также проводятся мастер-классы и практические занятия.
        </p>
      </section>

      <section class="annual-conferences">
        <h2>Ежегодные конференции</h2>
        <div class="conferences-grid">
          <div 
            v-for="conference in conferences" 
            :key="conference.year"
            class="conference-card"
            :class="{ 'has-link': conference.link }"
          >
            <div class="conference-year">{{ conference.year }}</div>
            <div class="conference-date">{{ conference.date }}</div>
            <router-link 
              v-if="conference.link" 
              :to="conference.link" 
              class="conference-link"
            >
              Подробнее
            </router-link>
          </div>
        </div>
      </section>

      <section class="neuro-conference">
        <h2>Конференция "Нейро"</h2>
        <div class="neuro-info">
          <p>
            С 2018 года проводится конференция "Нейро" - это инновационная площадка для обмена опытом 
            между специалистами неврологии, где обсуждаются современные подходы к диагностике и лечению.
          </p>
          <p>
            В 2019 году конференция прошла в отеле "Метрополь" в центре Москвы (ул. Театральный проезд, 19-1).
          </p>
        </div>
        
        <div class="neuro-details">
          <h3>Организатор конференции "Нейро"</h3>
          <div class="organizer-info">
            <p><strong>ООО "МедКью"</strong></p>
            <p>Адрес: 127083, г. Москва, Петровско-Разумовский проезд, д. 7</p>
            <p>Телефон: (495) 699-14-65; 699-81-84</p>
            <p>E-mail: <a href="mailto:info@medq.ru">info@medq.ru</a></p>
            <div class="social-links">
              <a href="https://medq.ru/informatsionnaya-podderzhka/besplatnoe-prilozhenie-dlja-ios-i-android" target="_blank" class="social-link">
                MedQ+ приложение для iOS и Android
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="conference-features">
        <h2>Особенности конференций</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <h3>Практическая направленность</h3>
            <p>Мастер-классы и практические занятия с ведущими специалистами</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🌍</div>
            <h3>Международное участие</h3>
            <p>Обмен опытом с зарубежными коллегами и ведущими экспертами</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📚</div>
            <h3>Научная программа</h3>
            <p>Презентации новейших исследований и клинических случаев</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🤝</div>
            <h3>Нетворкинг</h3>
            <p>Возможность установить профессиональные связи и партнерства</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conferences',
  data() {
    return {
      conferences: [
        { year: '2010', date: '17 ноября', link: '/conference/2010' },
        { year: '2011', date: '21 декабря', link: '/conference/2011' },
        { year: '2012', date: '15 ноября', link: '/conference/2012' },
        { year: '2013', date: '13 ноября', link: '/conference/2013' },
        { year: '2014', date: '9 декабря', link: '/conference/2014' },
        { year: '2015', date: '12 ноября', link: '/conference/2015' },
        { year: '2016', date: '2 ноября', link: '/conference/2016' },
        { year: '2017', date: '24 октября', link: '/conference/2017' },
        { year: '2018', date: '30 октября', link: '/conference/2018' },
        { year: '2019', date: '6 ноября', link: '/conference/2019' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.conferences-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: v.$primary-color;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: v.$text-secondary;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: v.$primary-color;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid v.$accent-color;
    padding-bottom: 0.5rem;
  }
  
  h3 {
    color: v.$secondary-color;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.7;
    margin-bottom: 1rem;
    color: v.$text-primary;
  }
}

.conferences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.conference-card {
  background: linear-gradient(135deg, v.$primary-color, v.$secondary-color);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  &.has-link {
    cursor: pointer;
  }
  
  .conference-year {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .conference-date {
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 1rem;
  }
  
  .conference-link {
    color: white;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: background 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
}

.neuro-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.organizer-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  
  p {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: v.$primary-color;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

.social-links {
  margin-top: 1rem;
  
  .social-link {
    display: block;
    color: v.$primary-color;
    text-decoration: none;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
    
    &:hover {
      color: v.$secondary-color;
    }
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.feature-item {
  text-align: center;
  padding: 1.5rem;
  
  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: v.$primary-color;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    color: v.$text-secondary;
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .conferences-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
