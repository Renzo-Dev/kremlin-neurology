<template>
  <section id="contact-info" class="contact-info-section">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">Контактная информация</span>
        <h2 class="section-title">
          Основные<br />
          <span class="title-accent">контакты</span>
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
          <h3>Телефоны учебных комнат</h3>
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
              <span class="contact-label"
                >ЦКБП, корп. 10, учебная комната №426</span
              >
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
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <h3>Fax</h3>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-label">ГКБ №51</span>
              <div class="contact-actions">
                <span class="contact-value">+7 (499) 149-83-35</span>
                <button
                  @click="copyPhone('+74991498335')"
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
              <span class="contact-label">ЦКБП</span>
              <div class="contact-actions">
                <span class="contact-value">+7 (495) 530-06-73</span>
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
                  121359, Москва, ул. Маршала Тимошенко, 19, стр 1а<br />
                  ФГБУ ДПО "Центральная государственная медицинская академия"<br />
                  УД Президента РФ. Кафедра неврологии.
                </p>
                <button
                  @click="
                    copyAddress(
                      '121359, Москва, ул. Маршала Тимошенко, 19, стр 1а'
                    )
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

        <div class="contact-card">
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
          <h3>Сайт</h3>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-actions">
                <a
                  href="https://www.kremlin-neurology.ru"
                  target="_blank"
                  rel="noopener"
                  class="contact-website"
                >
                  www.kremlin-neurology.ru
                </a>
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
  name: 'ContactInfo',
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
@use './ContactInfo.scss';
</style>
