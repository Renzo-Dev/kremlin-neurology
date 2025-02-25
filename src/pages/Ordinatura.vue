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
    const title = 'Ординатура'
    const specialties = [
      { specialty: 'терапия', price: '62 000' },
      { specialty: 'кардиология', price: '66 000' },
      { specialty: 'гастроэнтерология', price: '66 000' },
      { specialty: 'неврология', price: '66 000' },
      { specialty: 'ЛФК и спортивная медицина', price: '62 000' },
      { specialty: 'хирургия', price: '85 000' },
      { specialty: 'анестезиология и реаниматология', price: '74 000' },
      { specialty: 'травматология и ортопедия', price: '74 000' },
      { specialty: 'оториноларингология', price: '74 000' },
      { specialty: 'функциональная диагностика', price: '66 000' },
      { specialty: 'клиническая лабораторная диагностика', price: '66 000' },
      { specialty: 'ультразвуковая диагностика', price: '85 000' },
      { specialty: 'рентгенология', price: '69 000' },
      { specialty: 'урология', price: '85 000' },
      { specialty: 'эндоскопия', price: '69 000' },
      { specialty: 'скорая медицинская помощь', price: '66 000' },
      { specialty: 'дерматовенерология', price: '90 000' },
      { specialty: 'косметология', price: '90 000' },
      { specialty: 'клиническая микология', price: '90 000' },
      { specialty: 'стоматология детская', price: '110 000' },
      { specialty: 'стоматология терапевтическая', price: '120 000' },
      { specialty: 'стоматология хирургическая', price: '130 000' },
      { specialty: 'стоматология ортопедическая', price: '140 000' },
      { specialty: 'ортодонтия', price: '140 000' },
      { specialty: 'физиотерапия', price: '90 000' },
      {
        specialty: 'организация здравоохранения и общественное здоровье',
        price: '120 000',
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
