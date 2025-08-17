<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">О больнице</h2>
        <div class="section-divider"></div>
      </div>
      
      <div class="about-content">
        <div class="about-text">
          <p class="about-paragraph">
            Исторически с момента создания ЦНИЛ 4-го ГУ МЗ СССР в 1968 году первой клинической базой кафедры (тогда клиники) неврологии была Городская клиническая больница №51 ДЗМ. Это плодотворное сотрудничество продолжается и по сей день, благодаря чему многие сотрудники и заведующий неврологичеким отделением Сергей Александрович Иванов являются выпускниками нашей кафедры.
          </p>
          
          <p class="about-paragraph">
            Неврологическое отделение с блоком интенсивной неврологии ГКБ №51 имеет статус сосудистого с 2001 года и входит в состав Сердечно-сосудистого центра ГКБ №51. В отделении имеется 48 коек для больных с ОНМК и 12 коек в Блоке интенсивной неврологии.
          </p>
        </div>
        
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">1968</div>
            <div class="stat-label">Год основания</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">48</div>
            <div class="stat-label">Койки для ОНМК</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">12</div>
            <div class="stat-label">Койки в БИНе</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2001</div>
            <div class="stat-label">Статус сосудистого</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style lang="scss" scoped>
@use './AboutSection.scss';
</style>
