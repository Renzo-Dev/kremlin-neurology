<template>
  <div class="content-container">
    <div class="content__title">{{ title }} Базовые цены на 2013 год</div>
    <specialty-list :specialties="specialties"></specialty-list>
    <div class="content__contact-info">
      По всем вопросам, связанным с обучением, Вы можете обратиться по тел. 8
      (499) 1410471 Лосева Любовь Андреевна или 8 (499) 1402953 - методисты.
    </div>
    <div class="contact__info">
      <div>
        1. Лицензия на право осуществления образовательной деятельности,
        выданная Федеральной службой НСОН серия ААА № 002875, регистрационный №
        2750 от 19 апреля 2012г. срок действия - бессрочно.
      </div>
      <div>
        2. Свидетельство о государственной аккредитации выданное Федеральной
        службой НСОН, № 25-2107 от 17 июля 2009 г. Государственный
        аккредитационный статус установлен до 17 июля 2014г.
      </div>
    </div>
  </div>
</template>

<script lang="js">
import SpecialtyList from '@/components/specialtyList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    SpecialtyList,
  },

  setup() {
    const title = 'Аспирантура '
    const specialties = [
      { specialty: 'внутренние болезни', price: 62000 },
      { specialty: 'кардиология', price: 66000 },
      { specialty: 'нервные болезни', price: 66000 },
      {
        specialty:
          'восстановительная медицина, ЛФК и спортивная медицина, курортология и физиотерапия',
        price: 62000,
      },
      { specialty: 'хирургия', price: 85000 },
      { specialty: 'урология', price: 85000 },
      { specialty: 'анестезиология и реаниматология', price: 74000 },
      { specialty: 'травматология и ортопедия', price: 74000 },
      { specialty: 'болезни уха, горла и носа', price: 74000 },
      { specialty: 'клиническая лабораторная диагностика', price: 66000 },
      { specialty: 'лучевая диагностика, лучевая терапия', price: 85000 },
      { specialty: 'пульмонология', price: 62000 },
      { specialty: 'кожные и венерические болезни', price: 90000 },
      { specialty: 'стоматология', price: 130000 },
      { specialty: 'общественное здоровье и здравоохранение', price: 100000 },
      {
        specialty:
          'соискатели учёной степени кандидатов наук (не являющиеся сотрудниками учреждений УД Президента РФ)',
        price: '50% от стоимости обучения в аспирантуре',
      },
    ]

    return {
      title,
      specialties,
    }
  },
})
</script>

<style scoped lang="scss">
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content__title {
    font-family: Avenir, sans-serif;
    font-weight: 600;
    margin-bottom: calc(5 * 0.25vw);
    margin-top: calc(5 * 0.25vw);
    font-size: calc(5 * 0.25vw);
  }

  .content__contact-info {
    align-self: center;
    display: flex;
    font-size: calc(4 * 0.25vw);
    background-color: #f9dbd2;
    border-radius: 7px;
    padding: 0 10px;
  }

  .contact__info {
    font-size: calc(4 * 0.25vw);
    margin-top: calc(5 * 0.25vw);
    margin-bottom: calc(5 * 0.25vw);
  }
}
</style>
