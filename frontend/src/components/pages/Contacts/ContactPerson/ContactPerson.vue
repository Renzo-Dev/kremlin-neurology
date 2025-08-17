<template>
  <section id="contact-person" class="contact-person-section">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">Персонал</span>
        <h2 class="section-title">
          Заведующий<br />
          <span class="title-accent">кафедрой</span>
        </h2>
      </div>

      <div class="person-card">
        <div class="person-header">
          <div class="person-avatar">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <div class="person-info">
            <h3 class="person-name">Васильев Алексей Сергеевич</h3>
            <p class="person-position">
              Заведующий учебной частью кафедры, доцент
            </p>
            <div class="person-badges">
              <span class="badge primary">Заведующий</span>
              <span class="badge secondary">Доцент</span>
            </div>
          </div>
        </div>

        <div class="person-contacts">
          <div class="contact-item">
            <div class="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Телефон</span>
              <div class="contact-actions">
                <a href="tel:+79166050879" class="contact-value"
                  >+7 (916) 605-08-79</a
                >
                <button
                  @click="copyPhone('+79166050879')"
                  class="copy-btn"
                  title="Копировать номер"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path
                      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Email</span>
              <div class="contact-actions">
                <a href="mailto:alexvasiliev@mail.ru" class="contact-email"
                  >alexvasiliev@mail.ru</a
                >
                <button
                  @click="copyEmail('alexvasiliev@mail.ru')"
                  class="copy-btn"
                  title="Копировать email"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path
                      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Администратор сайта</span>
              <div class="contact-actions">
                <span class="contact-value">www.kremlin-neurology.ru</span>
                <button
                  @click="copyWebsite('www.kremlin-neurology.ru')"
                  class="copy-btn"
                  title="Копировать ссылку"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path
                      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { copyToClipboard } from '@/utils/helpers/copyToClipboard'

export default {
  name: 'ContactPerson',
  methods: {
    copyPhone(phone) {
      copyToClipboard(phone, {
        successMessage: 'Номер телефона скопирован!',
        duration: 2000,
      })
    },
    copyEmail(email) {
      copyToClipboard(email, {
        successMessage: 'Email скопирован!',
        duration: 2000,
      })
    },
    copyWebsite(website) {
      copyToClipboard(website, {
        successMessage: 'Ссылка скопирована!',
        duration: 2000,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@use './ContactPerson.scss';
</style>
