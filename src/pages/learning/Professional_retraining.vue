<template>
  <div class="content-container">
    <div class="content__title">{{ title }} Базовые цены на 2013 год</div>
    <specialty-list :table3="true" :specialties="specialties"></specialty-list>
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
    const title =
      'Профессиональная переподготовка (504 часа и более)\n' +
      'Базовые цены на 2013 год.'
    const specialties = [
      {
        specialty: 'Кафедра анестезиологии и реаниматологии',
        cycleName: 'Анестезиология и реаниматология',
        price: '46 000',
      },
      {
        specialty: 'Кафедра анестезиологии и реаниматологии',
        cycleName: 'Анестезиология и реаниматология',
        price: '46 000',
      },
      {
        specialty:
          'Кафедра семейной медицины с курсом клинической лабораторной диагностики',
        cycleName: 'Терапия',
        price: '35 000',
      },
      {
        specialty:
          'Кафедра семейной медицины с курсом клинической лабораторной диагностики',
        cycleName: 'Кардиология',
        price: '46 000',
      },
      {
        specialty:
          'Кафедра семейной медицины с курсом клинической лабораторной диагностики',
        cycleName: 'Нефрология',
        price: '35 000',
      },
      {
        specialty:
          'Кафедра семейной медицины с курсом клинической лабораторной диагностики',
        cycleName: 'Функциональная диагностика',
        price: '60 000',
      },
      {
        specialty:
          'Кафедра семейной медицины с курсом клинической лабораторной диагностики',
        cycleName: 'Пульмонология',
        price: '40 000',
      },
      {
        specialty: 'Кафедра терапии и гастроэнтерологии',
        cycleName: 'Гастроэнтерология',
        price: '35 000',
      },
      {
        specialty: 'Кафедра хирургии с курсами эндоскопии и урологии',
        cycleName: 'Эндоскопия',
        price: '60 000',
      },
      {
        specialty: 'Кафедра неврологии',
        cycleName: 'Неврология',
        price: '40 000',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология терапевтическая',
        price: '55 000',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология детская',
        price: '58 000',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология ортопедическая',
        price: '62 000',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология хирургическая',
        price: '62 000',
      },
      {
        specialty:
          'Кафедра медицинской реабилитации, лечебной физкультуры, физиотерапии и курортологии',
        cycleName: 'Лечебная физкультура и спортивная медицина',
        price: '35 000',
      },
      {
        specialty:
          'Кафедра медицинской реабилитации, лечебной физкультуры, физиотерапии и курортологии',
        cycleName: 'Физиотерапия',
        price: '36 000',
      },
      {
        specialty: 'Кафедра лучевой диагностики',
        cycleName: 'Ультразвуковая диагностика',
        price: '85 000',
      },
      {
        specialty: 'Кафедра травматологии и ортопедии',
        cycleName: 'Травматология и ортопедия',
        price: '60 000',
      },
      {
        specialty: 'Кафедра организации здравоохранения',
        cycleName: 'Организация здравоохранения и общественное здоровье',
        price: '65 000',
      },
      {
        specialty: 'Кафедра организации здравоохранения',
        cycleName: 'Профпатология',
        price: '65 000',
      },
      {
        specialty: 'Кафедра дерматовенерологии, микологии и косметологии',
        cycleName: 'Дерматовенерология',
        price: '90 000',
      },
      {
        specialty: 'Кафедра дерматовенерологии, микологии и косметологии',
        cycleName: 'Профпатология',
        price: '90 000',
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
    padding: 0 calc(5 * 0.25vw);
    margin-top: calc(5 * 0.25vw);
  }

  .contact__info {
    font-size: calc(4 * 0.25vw);
    margin-top: calc(5 * 0.25vw);
    margin-bottom: calc(5 * 0.25vw);
  }
}
</style>
