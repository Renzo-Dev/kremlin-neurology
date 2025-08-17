<template>
  <div class="news-timeline">
    <div v-if="news.length === 0" class="empty-state">
      <div class="empty-icon">📰</div>
      <h3>Новости не найдены</h3>
      <p>Попробуйте изменить фильтр или год</p>
    </div>

    <div v-else class="timeline-container">
      <div
        class="year-section"
        v-for="yearGroup in groupedNews"
        :key="yearGroup.year"
      >
        <div class="year-header">
          <h2 class="year-title">{{ yearGroup.year }}</h2>
          <div class="year-line"></div>
        </div>

        <div class="news-grid">
          <NewsCard
            v-for="newsItem in yearGroup.items"
            :key="newsItem.id"
            :news="newsItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from '@/components/pages/News/NewsCard/NewsCard.vue'

export default {
  name: 'NewsTimeline',
  components: {
    NewsCard,
  },
  props: {
    news: {
      type: Array,
      required: true,
    },
    selectedYear: {
      type: String,
      required: true,
    },
  },
  computed: {
    groupedNews() {
      if (this.selectedYear === 'all') {
        // Группируем по годам
        const groups = {}
        this.news.forEach(item => {
          if (!groups[item.year]) {
            groups[item.year] = []
          }
          groups[item.year].push(item)
        })

        return Object.keys(groups)
          .sort((a, b) => b - a)
          .map(year => ({
            year,
            items: groups[year].sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            ),
          }))
      } else {
        // Показываем только выбранный год
        return [
          {
            year: this.selectedYear,
            items: this.news.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            ),
          },
        ]
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use './NewsTimeline.scss';
</style>
