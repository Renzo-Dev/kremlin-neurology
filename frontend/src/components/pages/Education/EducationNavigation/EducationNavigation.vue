<template>
  <section class="education-navigation">
    <div class="container">

      <div class="navigation-grid">
        <div class="nav-card" @click="navigateToSection('ordinatura')">
          <div class="nav-icon">👨‍⚕️</div>
          <h3 class="nav-title">Ординатура</h3>
          <p class="nav-description">2 года обучения по специальностям неврологического профиля</p>
          <div class="nav-arrow">→</div>
        </div>

        <div class="nav-card" @click="navigateToSection('aspirantura')">
          <div class="nav-icon">🎓</div>
          <h3 class="nav-title">Аспирантура</h3>
          <p class="nav-description">По специальности 14.01.11 "Нервные болезни"</p>
          <div class="nav-arrow">→</div>
        </div>

        <div class="nav-card" @click="navigateToSection('perepodgotovka')">
          <div class="nav-icon">📋</div>
          <h3 class="nav-title">Профессиональная переподготовка</h3>
          <p class="nav-description">504 часа и более для получения новой специальности</p>
          <div class="nav-arrow">→</div>
        </div>

        <div class="nav-card" @click="navigateToSection('kvalifikatsiya')">
          <div class="nav-icon">⭐</div>
          <h3 class="nav-title">Сертификационные циклы</h3>
          <p class="nav-description">Повышение квалификации 144 часа и более</p>
          <div class="nav-arrow">→</div>
        </div>

        <div class="nav-card" @click="navigateToSection('tematicheskoe')">
          <div class="nav-icon">📚</div>
          <h3 class="nav-title">Тематическое усовершенствование</h3>
          <p class="nav-description">72 часа по узким темам неврологии</p>
          <div class="nav-arrow">→</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationNavigation',
  methods: {
    navigateToSection(section) {
      // Здесь будет навигация на соответствующие страницы
      console.log('Переход к разделу:', section)
      // this.$router.push(`/education/${section}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@use './EducationNavigation.scss';
</style>
