<template>
  <section id="contacts" class="contact-section">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">Контакты</span>
        <h2 class="section-title">
          Свяжитесь<br />
          <span class="title-accent">с нами</span>
        </h2>
      </div>

      <div class="contact-grid">
        <div class="contact-card">
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
          <h3>Телефоны</h3>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-label">ГКБ №51</span>
              <div class="contact-actions">
                <a href="tel:+74991468335" class="contact-value"
                  >+7 (499) 146-83-35</a
                >
                <button
                  @click="copyPhone('+74991468335')"
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
            <div class="contact-item">
              <span class="contact-label">Учебная комната №4-26</span>
              <div class="contact-actions">
                <a href="tel:+74955300086" class="contact-value"
                  >+7 (495) 530-00-86</a
                >
                <button
                  @click="copyPhone('+74955300086')"
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
            <div class="contact-item">
              <span class="contact-label">Заведующий кафедрой</span>
              <div class="contact-actions">
                <a href="tel:+74955300673" class="contact-value"
                  >+7 (495) 530-06-73</a
                >
                <button
                  @click="copyPhone('+74955300673')"
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
        </div>

        <div class="contact-card">
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
          <h3>Email</h3>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-actions">
                <a href="mailto:alexvasiliev@mail.ru" class="contact-email">
                  alexvasiliev@mail.ru
                </a>
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
        </div>

        <div class="contact-card">
          <div class="contact-icon">
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
          <h3>Адрес</h3>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-actions">
                <p class="contact-address">
                  Москва, ул. Маршала Тимошенко, 19, стр 1а<br />
                  ФГБУ ДПО "Центральная государственная медицинская академия"<br />
                  УД Президента РФ
                </p>
                <button
                  @click="
                    copyAddress('Москва, ул. Маршала Тимошенко, 19, стр 1а')
                  "
                  class="copy-btn"
                  title="Копировать адрес"
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
  name: 'ContactSection',
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
    copyAddress(address) {
      copyToClipboard(address, {
        successMessage: 'Адрес скопирован!',
        duration: 2000,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@use './ContactSection.scss';
</style>
