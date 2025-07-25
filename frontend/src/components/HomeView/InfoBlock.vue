<template>
  <div class="info-block">
    <img
        class="info-block__image"
        src="@/assets/images/fasad.jpg"
        alt="Фасад"
    />
    <div class="info-block__content">
      <p>
        Кафедра неврологии (до 1990 года – клиника неврологии) основана в 1968
        году с первого дня образования ЦНИЛ на базе Городской клинической
        больницы № 51 г. Москвы. Она осуществляет методическое руководство всей
        неврологической службой ГМУ. Ее первым заведующим (1968-1980г.г.) был
        профессор Вячеслав Яковлевич Неретин. В настоящее время кафедру
        возглавляет профессор Владимир Иванович Шмырев
      </p>
      <p>
        Сотрудниками кафедры постоянно ведется научная работа, организуются
        научные и учебные мероприятия. Они входят в состав редакционных коллегий
        ряда научных журналов, в организационные, научные и методические
        комитеты конференций, симпозиумов и других мероприятий различного, в том
        числе и международного уровня. На кафедре работают 13 сотрудников, в том
        числе 4 доктора и 6 кандидатов медицинских наук:
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.info-block {
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  background-color: #f9fbfd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &__image {
    flex: 1 1 300px;
    max-width: 400px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__content {
    flex: 2 1 400px;
    padding: 24px;
    color: #333;
    font-size: 1.2rem;
    line-height: 1.6;

    p {
      margin-bottom: 16px;
    }
  }
}
</style>
