<template>
  <section class="navigation-section">
    <div class="container">
      <div class="navigation-content">
        <h2 class="navigation-title">Дополнительная информация</h2>
        <p class="navigation-description">
          Изучите другие разделы кафедры неврологии для получения полной
          информации
        </p>

        <div class="navigation-buttons">
          <router-link
            v-for="button in navigationButtons"
            :key="button.id"
            :to="button.route"
            class="nav-button"
            :class="button.variant"
          >
            <div class="button-icon">{{ button.icon }}</div>
            <div class="button-content">
              <h3 class="button-title">{{ button.title }}</h3>
              <p class="button-description">{{ button.description }}</p>
            </div>
            <div class="button-arrow">→</div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavigationButtons',
  data() {
    return {
      navigationButtons: [
        {
          id: 1,
          title: 'Образование',
          description: 'Программы обучения и курсы повышения квалификации',
          route: '/education',
          icon: '🎓',
          variant: 'primary',
        },
        {
          id: 2,
          title: 'Научные исследования',
          description: 'Актуальные направления исследований и публикации',
          route: '/research',
          icon: '🔬',
          variant: 'secondary',
        },
        {
          id: 3,
          title: 'История кафедры',
          description: 'История развития и достижения кафедры',
          route: '/history',
          icon: '📚',
          variant: 'success',
        },
        {
          id: 4,
          title: 'Контакты',
          description: 'Свяжитесь с нами для получения информации',
          route: '/contacts',
          icon: '📞',
          variant: 'info',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use './NavigationButtons.scss';
</style>
