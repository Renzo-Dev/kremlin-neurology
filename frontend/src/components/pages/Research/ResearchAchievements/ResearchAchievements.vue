<template>
  <section class="research-achievements">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">Достижения</span>
        <h2 class="section-title">
          Научные<br />
          <span class="title-accent">достижения</span>
        </h2>
        <p class="section-description">
          Сотрудники кафедры получили около 20 патентов на полезные модели и изобретения, 
          а также стали лауреатами престижных премий за разработки в области антиоксидантной терапии.
        </p>
      </div>

      <div class="achievements-grid">
        <div class="achievement-card">
          <div class="card-icon">🏆</div>
          <h3>Премия Правительства РФ</h3>
          <p>
            Профессор Шмырёв В.И. и доцент Миронов Н.В. стали лауреатами Премии Правительства 
            Российской Федерации в области науки и техники за 2002 год за разработки в области антиоксидантной терапии.
          </p>
        </div>

        <div class="achievement-card">
          <div class="card-icon">📜</div>
          <h3>Патентная активность</h3>
          <p>
            Заведующий кафедрой проф. В.И Шмырев является соавтором 13 патентов, 
            доцент Н.В. Миронов - 10, доцент А.С. Васильев - 3, ассистент М.В. Шишкина - 2.
          </p>
        </div>

        <div class="achievement-card">
          <div class="card-icon">🔬</div>
          <h3>Инновационные разработки</h3>
          <p>
            Кафедра ведет активную работу по созданию новых методов диагностики и лечения 
            неврологических заболеваний, что подтверждается высоким количеством полученных патентов.
          </p>
        </div>
      </div>

      <div class="patents-summary">
        <div class="summary-header">
          <h3>Общее количество патентов</h3>
          <div class="patent-count">20</div>
        </div>
        <div class="patent-breakdown">
          <div class="patent-item">
            <span class="researcher">Проф. В.И. Шмырев</span>
            <span class="count">13 патентов</span>
          </div>
          <div class="patent-item">
            <span class="researcher">Доц. Н.В. Миронов</span>
            <span class="count">10 патентов</span>
          </div>
          <div class="patent-item">
            <span class="researcher">Доц. А.С. Васильев</span>
            <span class="count">3 патента</span>
          </div>
          <div class="patent-item">
            <span class="researcher">Асс. М.В. Шишкина</span>
            <span class="count">2 патента</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResearchAchievements',
}
</script>

<style lang="scss" scoped>
@use './ResearchAchievements.scss';
</style>
