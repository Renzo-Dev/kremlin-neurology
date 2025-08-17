<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">О больнице</h2>
        <p class="section-subtitle">
          Ведущее медицинское учреждение с богатой историей и современными
          технологиями
        </p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <div class="about-block">
            <h3>История и миссия</h3>
            <p>
              Центральная клиническая больница с поликлиникой УД Президента РФ
              является одним из ведущих медицинских учреждений страны,
              обеспечивающим высококачественную медицинскую помощь с
              использованием передовых технологий и методов лечения.
            </p>
          </div>

          <div class="about-block">
            <h3>Специализация</h3>
            <p>
              Больница специализируется на диагностике и лечении широкого
              спектра заболеваний, включая неврологические патологии,
              кардиологические заболевания, онкологию и другие сложные
              медицинские случаи.
            </p>
          </div>

          <div class="about-block">
            <h3>Технологии и оборудование</h3>
            <p>
              Оснащена современным диагностическим и лечебным оборудованием, что
              позволяет проводить точную диагностику и эффективное лечение
              пациентов.
            </p>
          </div>
        </div>

        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Лет опыта</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">1000+</div>
            <div class="stat-label">Пациентов в год</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">200+</div>
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
