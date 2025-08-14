<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img src="@/assets/images/fasad.jpg" alt="Фасад здания" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">
            <span class="title-line">Кафедра неврологии</span>
            <span class="title-line">ФГБУ ДПО "Центральная государственная медицинская академия"</span>
            <span class="title-line">УД Президента РФ</span>
          </h1>
          <p class="hero-subtitle">Ведущий центр неврологического образования и науки с 1968 года</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">55+</span>
              <span class="stat-label">Лет опыта</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">13</span>
              <span class="stat-label">Специалистов</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">4</span>
              <span class="stat-label">Доктора наук</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <div class="text-card">
              <h2 class="section-title">О кафедре</h2>
              <p>Кафедра неврологии (до 1990 года – клиника неврологии) основана в 1968 году с первого дня образования ЦНИЛ на базе Городской клинической больницы № 51 г. Москвы. Она осуществляет методическое руководство всей неврологической службой ГМУ.</p>
              <p>Ее первым заведующим (1968-1980г.г.) был профессор Вячеслав Яковлевич Неретин. В настоящее время кафедру возглавляет профессор Владимир Иванович Шмырев.</p>
            </div>
            
            <div class="text-card">
              <h2 class="section-title">Научная деятельность</h2>
              <p>Сотрудниками кафедры постоянно ведется научная работа, организуются научные и учебные мероприятия. Они входят в состав редакционных коллегий ряда научных журналов, в организационные, научные и методические комитеты конференций, симпозиумов и других мероприятий различного, в том числе и международного уровня.</p>
              <p>На кафедре работают 13 сотрудников, в том числе 4 доктора и 6 кандидатов медицинских наук.</p>
            </div>
          </div>
          
          <div class="content-visual">
            <div class="image-card">
              <img src="@/assets/images/fasad.jpg" alt="Фасад здания" class="content-image" />
              <div class="image-overlay">
                <h3>Современная инфраструктура</h3>
                <p>База для обучения и исследований</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-header">
          <h2 class="section-title">Контактная информация</h2>
          <p class="section-subtitle">Свяжитесь с нами для получения дополнительной информации</p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">📞</div>
            <h3>Телефон</h3>
            <div class="contact-details">
              <p>+7 (499) 146-83-35 (ГКБ №51)</p>
              <p>+7 (495) 530-00-86 (ЦКБП, учебная комната №4-26)</p>
              <p>+7 (495) 530-06-73 (ЦКБП, заведующий кафедрой)</p>
            </div>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">📧</div>
            <h3>Email</h3>
            <div class="contact-details">
              <p>alexvasiliev@mail.ru</p>
            </div>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">📍</div>
            <h3>Адрес</h3>
            <div class="contact-details">
              <p>Москва, ул. Маршала Тимошенко, 19, стр 1а</p>
              <p>ФГБУ ДПО "Центральная государственная медицинская академия" УД Президента РФ</p>
              <p>Кафедра неврологии</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js">
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

// Hero Section
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7) contrast(1.1);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(147, 51, 234, 0.6) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  color: white;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.title-line {
  display: block;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 400;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #fbbf24;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

// Main Content
.main-content {
  padding: 6rem 0;
  background: white;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.content-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.text-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.text-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-card p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 1rem;
}

.text-card p:last-child {
  margin-bottom: 0;
}

.content-visual {
  position: relative;
}

.image-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.content-image {
  width: 100%;
  height: auto;
  display: block;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.image-card:hover .image-overlay {
  transform: translateY(0);
}

.image-overlay h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.image-overlay p {
  opacity: 0.9;
}

// Contact Section
.contact-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
  color: white;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-header .section-title {
  color: white;
  background: none;
  -webkit-text-fill-color: white;
}

.section-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.contact-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-details p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
  line-height: 1.5;
}

// Responsive Design
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-stats {
    gap: 1.5rem;
  }
  
  .stat-number {
    font-size: 1.8rem;
  }
  
  .text-card {
    padding: 1.5rem;
  }
  
  .contact-card {
    padding: 1.5rem;
  }
}

// Animations
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-card,
.image-card,
.contact-card {
  animation: fadeInUp 0.6s ease forwards;
}

.text-card:nth-child(2) {
  animation-delay: 0.2s;
}

.image-card {
  animation-delay: 0.4s;
}

.contact-card:nth-child(1) {
  animation-delay: 0.6s;
}

.contact-card:nth-child(2) {
  animation-delay: 0.8s;
}

.contact-card:nth-child(3) {
  animation-delay: 1s;
}
</style>
