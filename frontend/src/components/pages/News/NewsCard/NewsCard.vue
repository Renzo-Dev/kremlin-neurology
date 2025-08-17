<template>
  <article
    class="news-card"
    :class="{ 'news-card--important': news.isImportant }"
  >
    <div class="card-header">
      <div class="card-meta">
        <time class="news-date" :datetime="news.date">
          {{ formatDate(news.date) }}
        </time>
        <span class="news-category">{{ news.category }}</span>
      </div>
      <div v-if="news.isImportant" class="important-badge">
        <span class="badge-icon">⭐</span>
        <span class="badge-text">Важно</span>
      </div>
    </div>

    <div class="card-content">
      <h3 class="news-title">
        <a
          v-if="news.externalLink"
          :href="news.externalLink"
          target="_blank"
          rel="noopener noreferrer"
          class="news-title-link"
        >
          {{ news.title }}
        </a>
        <span v-else>{{ news.title }}</span>
      </h3>
      <p
        class="news-description"
        :class="{ 'news-description--expanded': isExpanded }"
      >
        {{ news.description }}
      </p>
    </div>

    <div class="card-footer">
      <button class="read-more-btn" @click="expandCard">
        {{ isExpanded ? 'Свернуть' : 'Читать далее' }}
        <span class="btn-icon">{{ isExpanded ? '↑' : '↓' }}</span>
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
      return date.toLocaleDateString('ru-RU', options)
    },
    expandCard() {
      this.isExpanded = !this.isExpanded
    },
  },
}
</script>

<style lang="scss" scoped>
@use './NewsCard.scss';
</style>
