<template>
  <div class="base-card" @click="$emit('click', base)">
    <div class="card-header">
      <div class="base-icon">{{ base.icon }}</div>
      <div class="base-type">{{ base.type }}</div>
    </div>
    
    <div class="card-content">
      <h3 class="base-title">{{ base.title }}</h3>
      <p class="base-full-title">{{ base.fullTitle }}</p>
      <p class="base-description">{{ base.description }}</p>
      
      <div class="base-features">
        <h4 class="features-title">Основные отделения:</h4>
        <ul class="features-list">
          <li v-for="feature in base.features" :key="feature" class="feature-item">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class="card-footer">
      <button class="learn-more-btn">
        Подробнее
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    base: {
      type: Object,
      required: true
    }
  },
  emits: ['click']
}
</script>

<style lang="scss" scoped>
@use './BaseCard.scss';
</style>
