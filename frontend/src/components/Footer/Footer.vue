<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- О кафедре -->
          <div class="footer-section">
            <h3 class="footer-title">Кафедра неврологии</h3>
            <p class="footer-description">
              Ведущий центр неврологии, основанный в 1968 году. Осуществляем
              методическое руководство неврологической службой ГМУ.
            </p>
          </div>

          <!-- Быстрые ссылки -->
          <div class="footer-section">
            <h3 class="footer-title">Разделы сайта</h3>
            <ul class="footer-links">
                             <li><a href="/education">Образование</a></li>
               <li><a href="/research">Научная работа</a></li>

               <li><a href="/news">Новости</a></li>
              <li><a href="/library">Библиотека</a></li>
              <li><a href="/young-neurologists">Молодые неврологи</a></li>
            </ul>
          </div>

          <!-- Контакты -->
          <div class="footer-section">
            <h3 class="footer-title">Контакты</h3>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                  Москва, ул. Маршала Тимошенко, 19, стр 1а
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-text">
                  <a href="tel:+74955300673">+7 (495) 530-06-73</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-text">
                  <a href="mailto:alexvasiliev@mail.ru">alexvasiliev@mail.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <div class="copyright">
            © 2025 Кафедра неврологии ФГБУ ДПО "ЦГМА" УД Президента РФ
          </div>
          <div class="footer-bottom-links">
            <a href="/privacy">Политика конфиденциальности</a>
            <span class="separator">•</span>
            <a href="/terms">Условия использования</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as vars;
@use '@/assets/styles/mixins' as mix;
@use './Footer.scss' as footer;
</style>
