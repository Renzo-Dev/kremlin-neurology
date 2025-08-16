<template>
  <div class="history-leadership">
    <div class="leadership-header">
      <h3>Руководство учреждения</h3>
      <p>Руководители Учреждения на этапах его создания и развития</p>
    </div>

    <div class="leadership-timeline">
      <div
        v-for="(leader, index) in leaders"
        :key="index"
        class="timeline-item"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="period">{{ leader.period }}</div>
          <div class="leader-info">
            <h4>{{ leader.name }}</h4>
            <p>{{ leader.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryLeadership',
  data() {
    return {
      leaders: [
        {
          period: '1968 - 1973',
          name: 'В.А. Савенко',
          title:
            'Опытный организатор здравоохранения, талантливый ученый и педагог',
        },
        {
          period: '1973 - 1980',
          name: 'В.Г. Смагин',
          title: 'Член-корреспондент АМН СССР, профессор',
        },
        {
          period: '1980 - 1986',
          name: 'O.K. Скобелкин',
          title: 'Профессор',
        },
        {
          period: '1986 - 1995',
          name: 'Ю.Л. Перов',
          title: 'Член-корреспондент РАМН, профессор',
        },
        {
          period: '1995 - 2002',
          name: 'В.Н. Семенов',
          title: 'Член-корреспондент РАМН, профессор',
        },
        {
          period: '2002 - 2008',
          name: 'В.К. Решетняк',
          title: 'Член-корреспондент РАМН, профессор',
        },
        {
          period: '2008 - 2009',
          name: 'П.С. Турзин',
          title: 'Профессор',
        },
        {
          period: '2009 - 2011',
          name: 'А.М. Мкртумян',
          title: 'Профессор',
        },
        {
          period: '2012 - настоящее время',
          name: 'В.Ф. Казаков',
          title: 'Профессор',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use './HistoryLeadership.scss';
</style>
