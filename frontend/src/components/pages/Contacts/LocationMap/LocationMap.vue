<template>
  <section id="location-map" class="location-map-section">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">Схемы прохода</span>
        <h2 class="section-title">
          Как добраться<br />
          <span class="title-accent">до нас</span>
        </h2>
      </div>

      <div class="maps-grid">
        <div class="map-card">
          <div class="map-header">
            <div class="map-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Симуляционный центр ЦГМА</h3>
            <p class="map-description">
              ул. М. Тимошенко, д.19, стр. 1А, аудитория 314
            </p>
          </div>
          <div class="map-container">
            <iframe
              src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Af48bbfefa42b01696b0e4503f3138dee0cc76ebcc5d1d3e5d0979b04e868fb3d"
              frameborder="0"
              allowfullscreen="true"
              width="100%"
              height="400"
              title="Схема прохода в Симуляционный центр ЦГМА"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div class="map-card">
          <div class="map-header">
            <div class="map-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Неврологическое отделение ГКБ № 51</h3>
            <p class="map-description">Схема прохода от ст.м. Филевский парк</p>
          </div>
          <div class="map-container">
            <iframe
              src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Afe782deb03bfc4bd36cde7b42eac04a7f4b2774a27088b4886cb079fc8ce01ff"
              frameborder="0"
              allowfullscreen="true"
              width="100%"
              height="400"
              title="Схема прохода в неврологическое отделение ГКБ № 51"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="map-notice">
        <div class="notice-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <div class="notice-content">
          <h4>Внимание!</h4>
          <p>
            Все учреждения являются режимными. При отсутствии пропуска не
            забудьте его заказать и иметь с собой паспорт для прохода.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LocationMap',
}
</script>

<style lang="scss" scoped>
@use './LocationMap.scss';
</style>
