<template>
  <section class="education-info">
    <div class="container">
      <div class="info-content">
        <div class="info-text">
          <h2 class="section-title">О кафедре неврологии</h2>
          <p class="info-description">
            Кафедра неврологии ФГБУ ДПО «ЦГМА» УД Президента РФ организует и проводит 
            послевузовское и дополнительное образование врачей лечебно-профилактических и 
            санаторно-курортных учреждений Управления делами президента Российской Федерации 
            в виде интернатуры, клинической ординатуры и аспирантуры (очной и заочной форм обучения), 
            сертификационных циклов, циклов тематического усовершенствования и повышения квалификации 
            медицинских специалистов неврологического профиля, в том числе на договорной основе.
          </p>
          <p class="info-description">
            ФГБУ ДПО «ЦГМА» обладает правом первичной специализации и использует основные и 
            дополнительные медицинские профессиональные программы и программы послевузовского 
            профессионального медицинского образования. На кафедре проводится подготовка аспирантов 
            по специальности 14.01.11 "Нервные болезни". В ЦГМА организован прием экзаменов 
            кандидатского минимума.
          </p>
        </div>
        
        <div class="info-features">
          <div class="feature-item">
            <div class="feature-icon">🎓</div>
            <h3 class="feature-title">Аккредитация</h3>
            <p class="feature-text">Право первичной специализации и послевузовского образования</p>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">🏥</div>
            <h3 class="feature-title">Клинические базы</h3>
            <p class="feature-text">ГКБ №51 ДЗМ и ФГБУ "ЦКБ с поликлиникой" УД Президента РФ</p>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">📚</div>
            <h3 class="feature-title">Формы обучения</h3>
            <p class="feature-text">Очная и заочная формы, стажировки, телемедицина</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationInfo',
}
</script>

<style lang="scss" scoped>
@use './EducationInfo.scss';
</style>
