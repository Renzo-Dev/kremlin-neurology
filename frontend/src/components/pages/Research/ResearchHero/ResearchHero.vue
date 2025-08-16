<template>
  <section class="research-hero">
    <div class="container">
      <div class="hero-content">
        <span class="section-tag">Наука</span>
        <h1 class="hero-title">
          Научно-исследовательская<br />
          <span class="title-accent">деятельность</span>
        </h1>
        <p class="hero-description">
          Кафедра неврологии осуществляет активную научную деятельность с момента своего создания в 1968 году. 
          Более полувека мы развиваем инновационные подходы в неврологии, получаем патенты и готовим 
          высококвалифицированных специалистов.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Лет научной работы</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">20</div>
            <div class="stat-label">Патентов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">4</div>
            <div class="stat-label">Темы НИР</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResearchHero',
}
</script>

<style lang="scss" scoped>
@use './ResearchHero.scss';
</style>
