<template>
  <section id="map" class="map-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Как добраться</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Схема прохода в неврологическое отделение ГКБ № 51 ДЗМ от ст.м. Филевский парк
        </p>
      </div>
      
      <div class="map-container">
        <div class="map-wrapper">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3Afe782deb03bfc4bd36cde7b42eac04a7f4b2774a27088b4886cb079fc8ce01ff" 
            frameborder="0" 
            allowfullscreen="true" 
            width="100%" 
            height="600"
            title="Карта проезда к ГКБ №51 ДЗМ"
          ></iframe>
        </div>
        
        <div class="map-info">
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div class="info-content">
              <h3 class="info-title">Адрес</h3>
              <p class="info-text">Москва, ул. Алябьева, д. 7</p>
            </div>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="info-content">
              <h3 class="info-title">Режим работы</h3>
              <p class="info-text">Круглосуточно</p>
            </div>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div class="info-content">
              <h3 class="info-title">Телефон</h3>
              <p class="info-text">+7 (495) 123-45-67</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MapSection',
}
</script>

<style lang="scss" scoped>
@use './MapSection.scss';
</style>
