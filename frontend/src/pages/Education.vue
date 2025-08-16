<template>
  <div class="education-page">
    <EducationHero />
    <EducationInfo />
    <EducationPrograms />
    <EducationFeatures />
  </div>
</template>

<script>
import EducationFeatures from '@/components/pages/Education/EducationFeatures/EducationFeatures.vue'
import EducationHero from '@/components/pages/Education/EducationHero/EducationHero.vue'
import EducationInfo from '@/components/pages/Education/EducationInfo/EducationInfo.vue'
import EducationPrograms from '@/components/pages/Education/EducationPrograms/EducationPrograms.vue'

export default {
  name: 'EducationPage',
  components: {
    EducationHero,
    EducationInfo,
    EducationPrograms,
    EducationFeatures,
  },
  metaInfo: {
    title: 'Образование - Кафедра неврологии',
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/pages/Education/education';

.education-page {
  min-height: 100vh;
}
</style>
