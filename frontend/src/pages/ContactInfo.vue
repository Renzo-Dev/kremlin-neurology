<template>
  <section class="contact-info">
    <div class="hero-section">
      <h1 class="hero-title">Контактная информация</h1>
      <div class="hero-subtitle">Свяжитесь с нами любым удобным способом</div>
    </div>

    <div class="contact-cards">
      <div class="contact-card main-info">
        <div class="card-header">
          <div class="card-icon">📞</div>
          <h3>Основная информация</h3>
        </div>
        <div class="card-content">
          <div class="info-section phones">
            <h4 class="section-title">Телефоны учебных комнат</h4>
            <div class="phone-list">
              <div class="phone-item">
                <span class="phone-label">ГКБ №51:</span>
                <div class="phone-actions">
                  <a href="tel:+74991468335" class="phone-btn">+7 (499) 146-83-35</a>
                  <button
                      @click="copyToClipboard('+7 (499) 146-83-35')"
                      class="copy-btn"
                      :class="{ 'copied': copiedNumber === '+7 (499) 146-83-35' }"
                  >
                    <span class="copy-icon">{{
                        copiedNumber === '+7 (499) 146-83-35' ? '✓' : '📋'
                      }}</span>
                  </button>
                </div>
              </div>
              <div class="phone-item">
                <span
                    class="phone-label">ЦКБП, корп. 10, учебная комната №426:</span>
                <div class="phone-actions">
                  <a href="tel:+74955300086" class="phone-btn">+7 (495) 530-00-86</a>
                  <button
                      @click="copyToClipboard('+7 (495) 530-00-86')"
                      class="copy-btn"
                      :class="{ 'copied': copiedNumber === '+7 (495) 530-00-86' }"
                  >
                    <span class="copy-icon">{{
                        copiedNumber === '+7 (495) 530-00-86' ? '✓' : '📋'
                      }}</span>
                  </button>
                </div>
              </div>
              <div class="phone-item">
                <span class="phone-label">Заведующий кафедрой:</span>
                <div class="phone-actions">
                  <a href="tel:+74955300673" class="phone-btn">+7 (495) 530-06-73</a>
                  <button
                      @click="copyToClipboard('+7 (495) 530-06-73')"
                      class="copy-btn"
                      :class="{ 'copied': copiedNumber === '+7 (495) 530-06-73' }"
                  >
                    <span class="copy-icon">{{
                        copiedNumber === '+7 (495) 530-06-73' ? '✓' : '📋'
                      }}</span>
                  </button>
                </div>
              </div>
            </div>

            <h4 class="section-title">Факс</h4>
            <div class="phone-list">
              <div class="phone-item">
                <span class="phone-label">ГКБ №51:</span>
                <div class="phone-actions">
                  <span class="phone-text">+7 (499) 149-83-35</span>
                  <button
                      @click="copyToClipboard('+7 (499) 149-83-35')"
                      class="copy-btn"
                      :class="{ 'copied': copiedNumber === '+7 (499) 149-83-35' }"
                  >
                    <span class="copy-icon">{{
                        copiedNumber === '+7 (499) 149-83-35' ? '✓' : '📋'
                      }}</span>
                  </button>
                </div>
              </div>
              <div class="phone-item">
                <span class="phone-label">ЦКБП:</span>
                <div class="phone-actions">
                  <span class="phone-text">+7 (495) 530-06-73</span>
                  <button
                      @click="copyToClipboard('+7 (495) 530-06-73')"
                      class="copy-btn"
                      :class="{ 'copied': copiedNumber === '+7 (495) 530-06-73' }"
                  >
                    <span class="copy-icon">{{
                        copiedNumber === '+7 (495) 530-06-73' ? '✓' : '📋'
                      }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="info-section address">
            <h4 class="section-title">Адрес</h4>
            <div class="address-content">
              <div class="address-icon">📍</div>
              <div class="address-text">
                121359, Москва, ул. Маршала Тимошенко, 19, стр 1а.<br>
                ФГБУ ДПО "Центральная государственная медицинская академия" УД
                Президента РФ.<br>
                Кафедра неврологии.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-card contact-person">
        <div class="card-header">
          <div class="card-icon">👨‍⚕️</div>
          <h3>Контактное лицо</h3>
        </div>
        <div class="card-content">
          <div class="person-info">
            <div class="person-role">Заведующий учебной частью кафедры доц.
            </div>
            <div class="person-name">Васильев Алексей Сергеевич</div>

            <div class="contact-links">
              <div class="contact-item">
                <div class="contact-icon">🌐</div>
                <div class="contact-details">
                  <span class="contact-label">Сайт:</span>
                  <a href="http://www.kremlin-neurology.ru" class="contact-link"
                     target="_blank">
                    www.kremlin-neurology.ru
                  </a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div class="contact-details">
                  <span class="contact-label">E-mail:</span>
                  <div class="contact-actions">
                    <a href="mailto:alexvasiliev@mail.ru" class="contact-link">
                      alexvasiliev@mail.ru
                    </a>
                    <button
                        @click="copyToClipboard('alexvasiliev@mail.ru')"
                        class="copy-btn small"
                        :class="{ 'copied': copiedNumber === 'alexvasiliev@mail.ru' }"
                    >
                      <span class="copy-icon">{{
                          copiedNumber === 'alexvasiliev@mail.ru' ? '✓' : '📋'
                        }}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div class="contact-details">
                  <span class="contact-label">Телефон:</span>
                  <div class="contact-actions">
                    <a href="tel:+79166050879" class="contact-link">+7 (916)
                      6050879</a>
                    <button
                        @click="copyToClipboard('+7 (916) 6050879')"
                        class="copy-btn small"
                        :class="{ 'copied': copiedNumber === '+7 (916) 6050879' }"
                    >
                      <span class="copy-icon">{{
                          copiedNumber === '+7 (916) 6050879' ? '✓' : '📋'
                        }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="warning-card">
      <div class="warning-icon">⚠️</div>
      <div class="warning-content">
        <h4>Внимание!</h4>
        <p>Все учреждения являются режимными, при отсутствии пропуска не
          забывайте его заказать и иметь с собой паспорт для прохода.</p>
      </div>
    </div>

    <div class="directions-card">
      <div class="card-header">
        <div class="card-icon">🚇</div>
        <h3>Как добраться</h3>
      </div>
      <div class="directions-content">
        <p>
          <strong>От ст. метро Молодежная</strong> (выход из головного вагона),
          далее на автобусе 251 до 2-й (учебные комнаты в ЦКБП) или 3-й
          остановки (учебная комната в Симуляционном центре ЦГМА).
        </p>
        <p>
          <strong>От ст. метро Крылатское</strong> (выход из последнего вагона),
          далее пешком (см. схему).
        </p>
        <p>
          Вход в ЦКБП через 2-ю проходную ЦКБП или проходную ЦГМА,
          соответственно (см. схемы). Если у Вас нет пропуска – не забудьте
          заказать и взять с собой паспорт.
        </p>
      </div>
    </div>

    <div class="maps-section">
      <h2 class="maps-title">Схемы прохода</h2>

      <div class="maps-grid">
        <div class="map-card">
          <div class="map-header">
            <div class="map-icon">🏥</div>
            <h4>Симуляционный центр ЦГМА</h4>
            <p class="map-address">ул. М. Тимошенко, д.19, стр. 1А, аудитория
              314</p>
          </div>
          <div class="map-container">
            <iframe
                src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Af48bbfefa42b01696b0e4503f3138dee0cc76ebcc5d1d3e5d0979b04e868fb3d"
                frameborder="0"
                allowfullscreen="true"
                width="100%"
                height="400px"
            ></iframe>
          </div>
        </div>

        <div class="map-card">
          <div class="map-header">
            <div class="map-icon">🏥</div>
            <h4>Неврологическое отделение ГКБ № 51</h4>
            <p class="map-address">От ст.м. Филевский парк</p>
          </div>
          <div class="map-container">
            <iframe
                src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Afe782deb03bfc4bd36cde7b42eac04a7f4b2774a27088b4886cb079fc8ce01ff"
                frameborder="0"
                allowfullscreen="true"
                width="100%"
                height="400px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Notification toast -->
    <div v-if="showNotification" class="notification-toast"
         :class="{ 'show': showNotification }">
      <div class="notification-content">
        <span class="notification-icon">✓</span>
        <span class="notification-text">{{ notificationText }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const copiedNumber = ref('')
const showNotification = ref(false)
const notificationText = ref('')

// Fallback для старых браузеров
const fallbackCopyToClipboard = (text) => {
  const textArea = document.createElement('textarea')
  textArea.value = text

  // Избегаем прокрутки к элементу
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    document.body.removeChild(textArea)
    return successful
  } catch (err) {
    document.body.removeChild(textArea)
    return false
  }
}

const copyToClipboard = async (text) => {
  try {
    // Проверяем поддержку современного Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
    } else {
      // Fallback для старых браузеров
      const success = fallbackCopyToClipboard(text)
      if (!success) {
        throw new Error('Fallback copy failed')
      }
    }

    copiedNumber.value = text
    notificationText.value = `Скопировано: ${text}`
    showNotification.value = true

    // Reset copied state after 2 seconds
    setTimeout(() => {
      copiedNumber.value = ''
    }, 2000)

    // Hide notification after 3 seconds
    setTimeout(() => {
      showNotification.value = false
    }, 3000)

  } catch (err) {
    console.error('Ошибка копирования:', err)
    notificationText.value = 'Ошибка копирования'
    showNotification.value = true

    setTimeout(() => {
      showNotification.value = false
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/ContactInfo.scss';
</style>

