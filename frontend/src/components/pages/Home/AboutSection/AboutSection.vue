<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">О кафедре</span>
        <h2 class="section-title">
          Ведущий центр<br />
          <span class="title-accent">неврологии</span>
        </h2>
        <p class="section-description">
          Кафедра неврологии осуществляет методическое руководство всей
          неврологической службой ГМУ, ведет научную работу и организует учебные
          мероприятия международного уровня.
        </p>
      </div>

      <div class="about-grid">
        <div class="about-card">
          <div class="card-number">01</div>
          <h3>История</h3>
          <p>
            Основана в 1968 году с первого дня образования ЦНИЛ на базе
            Городской клинической больницы № 51 г. Москвы.
          </p>
        </div>

        <div class="about-card">
          <div class="card-number">02</div>
          <h3>Миссия</h3>
          <p>
            Методическое руководство неврологической службой ГМУ, научная работа
            и организация учебных мероприятий.
          </p>
        </div>

        <div class="about-card">
          <div class="card-number">03</div>
          <h3>Руководство</h3>
          <p>
            Первый заведующий (1968-1980) - профессор В.Я. Неретин.<br />
            Нынешний руководитель - профессор В.И. Шмырев.
          </p>
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
@import './AboutSection.scss';
</style>
