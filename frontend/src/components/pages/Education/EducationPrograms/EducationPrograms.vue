<template>
  <section class="education-programs">
    <div class="container">
      <h2 class="section-title">Образовательные программы</h2>
      <div class="programs-grid">
        <div class="program-card" @click="navigateToProgram('ordinatura')">
          <div class="card-header">
            <div class="program-icon">👨‍⚕️</div>
            <h3 class="program-title">Ординатура</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              2 года обучения по специальностям неврологического профиля
            </p>
            <div class="program-details">
              <span class="detail-item">2 года</span>
              <span class="detail-item">Очная форма</span>
              <span class="detail-item">Клинические базы</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>

        <div class="program-card" @click="navigateToProgram('aspirantura')">
          <div class="card-header">
            <div class="program-icon">🎓</div>
            <h3 class="program-title">Аспирантура</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              По специальности 14.01.11 "Нервные болезни"
            </p>
            <div class="program-details">
              <span class="detail-item">Очная форма</span>
              <span class="detail-item">Заочная форма</span>
              <span class="detail-item">Кандидатский минимум</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>

        <div class="program-card" @click="navigateToProgram('perepodgotovka')">
          <div class="card-header">
            <div class="program-icon">📋</div>
            <h3 class="program-title">Профессиональная переподготовка</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              504 часа и более для получения новой специальности
            </p>
            <div class="program-details">
              <span class="detail-item">504+ часов</span>
              <span class="detail-item">Новая специальность</span>
              <span class="detail-item">Сертификат</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>

        <div class="program-card" @click="navigateToProgram('kvalifikatsiya')">
          <div class="card-header">
            <div class="program-icon">⭐</div>
            <h3 class="program-title">Сертификационные циклы</h3>
          </div>
          <div class="card-content">
            <p class="program-description">
              Повышение квалификации 144 часа и более
            </p>
            <div class="program-details">
              <span class="detail-item">144+ часов</span>
              <span class="detail-item">Усовершенствование</span>
              <span class="detail-item">Сертификат</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">Подробнее →</span>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationPrograms',
  methods: {
    navigateToProgram(program) {
      // Здесь будет навигация на соответствующие страницы
      console.log('Переход к программе:', program)
      // this.$router.push(`/education/${program}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@use './EducationPrograms.scss';
</style>
