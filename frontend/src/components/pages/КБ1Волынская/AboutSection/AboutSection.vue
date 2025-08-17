<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">О больнице</h2>
        <p class="section-subtitle">
          Клиническая больница №1 (Волынская) - современное медицинское
          учреждение
        </p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <div class="about-block">
            <h3>История и традиции</h3>
            <p>
              Клиническая больница №1 (Волынская) УД Президента РФ имеет богатую
              историю и традиции в оказании высококачественной медицинской
              помощи. Больница является одним из ведущих медицинских учреждений
              страны.
            </p>
          </div>

          <div class="about-block">
            <h3>Медицинские направления</h3>
            <p>
              Больница специализируется на лечении широкого спектра заболеваний,
              включая неврологические патологии, кардиологические заболевания,
              травматологию, хирургию и другие медицинские направления.
            </p>
          </div>

          <div class="about-block">
            <h3>Инновационные технологии</h3>
            <p>
              Использует современные диагностические и лечебные технологии, что
              позволяет проводить точную диагностику и эффективное лечение
              пациентов с применением передовых медицинских методик.
            </p>
          </div>
        </div>

        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">40+</div>
            <div class="stat-label">Лет опыта</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">800+</div>
            <div class="stat-label">Пациентов в год</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">150+</div>
            <div class="stat-label">Специалистов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Доступность</div>
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
