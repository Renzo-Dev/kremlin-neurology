<template>
  <section id="contacts" class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Контакты</h2>
        <p class="section-subtitle">
          Свяжитесь с нами для получения дополнительной информации
        </p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-block">
            <div class="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="contact-details">
              <h3>Адрес</h3>
              <p>г. Москва, ул. Волынская, д. 9</p>
            </div>
          </div>

          <div class="contact-block">
            <div class="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div class="contact-details">
              <h3>Телефон</h3>
              <p>+7 (495) 234-56-78</p>
              <p>+7 (495) 234-56-79</p>
            </div>
          </div>

          <div class="contact-block">
            <div class="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="contact-details">
              <h3>Email</h3>
              <p>info@kb1vol.ru</p>
              <p>reception@kb1vol.ru</p>
            </div>
          </div>

          <div class="contact-block">
            <div class="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="contact-details">
              <h3>Режим работы</h3>
              <p>Пн-Пт: 8:00 - 20:00</p>
              <p>Сб-Вс: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
}
</script>

<style lang="scss" scoped>
@use './ContactSection.scss';
</style>
