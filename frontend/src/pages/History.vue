<template>
  <div class="history-page">
    <div class="container">
      <div class="history-header">
        <div class="header-badge">История</div>
        <h1>Учебно-научный медицинский центр</h1>
        <p>
          Федеральное государственное бюджетное учреждение "Учебно-научный
          медицинский центр" Управления делами президента Российской Федерации
        </p>
        <div class="header-stats">
          <div class="stat-item">
            <span class="stat-number">1968</span>
            <span class="stat-label">Год основания</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Лет опыта</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">1000+</span>
            <span class="stat-label">Выпускников</span>
          </div>
        </div>
      </div>

      <HistoryAccordion />
    </div>
  </div>
</template>

<script>
import HistoryAccordion from '@/components/pages/History/HistoryAccordion/HistoryAccordion.vue';

export default {
  name: 'History',
  components: {
    HistoryAccordion,
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/History/history.scss';
</style>
