<template>
  <div class="research-page">
    <ResearchHero />
    <ResearchHistory />
    <ResearchAchievements />
    <ResearchCurrent />
    <ResearchStats />
  </div>
</template>

<script>
import ResearchHero from '@/components/pages/Research/ResearchHero/ResearchHero.vue'
import ResearchHistory from '@/components/pages/Research/ResearchHistory/ResearchHistory.vue'
import ResearchAchievements from '@/components/pages/Research/ResearchAchievements/ResearchAchievements.vue'
import ResearchCurrent from '@/components/pages/Research/ResearchCurrent/ResearchCurrent.vue'
import ResearchStats from '@/components/pages/Research/ResearchStats/ResearchStats.vue'

export default {
  name: 'Research',
  components: {
    ResearchHero,
    ResearchHistory,
    ResearchAchievements,
    ResearchCurrent,
    ResearchStats,
  },
  metaInfo: {
    title: 'Научно-исследовательская деятельность - Кафедра неврологии',
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.research-page {
  background: v.$white;
}
</style>
