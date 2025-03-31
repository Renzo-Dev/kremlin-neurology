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
import { defineComponent } from 'vue'
import SpecialtyList from '@/components/specialtyList.vue'

export default defineComponent({
  components: { SpecialtyList },
  name: 'Certification_Cycle',
  setup() {
    const title =
      'Сертификационные циклы повышения квалификации (144 часа и более)\n' +
      'Базовые цены на 2013 год.'

    const specialties = [
      {
        specialty: 'Кафедра анестезиологии и реаниматологии',
        cycleName: 'Анестезиология и реаниматология',
        price: '13 800',
      },
      {
        specialty: 'Кафедра скорой медицинской помощи и экстремальной медицины',
        cycleName: 'Скорая медицинская помощь',
        price: '18 400',
      },
      {
        specialty:
          'Кафедра семейной медицины с курсом клинической лабораторной диагностики',
        cycleName: 'Общая врачебная практика (семейная медицина)',
        price: '24 000',
      },
      {
        specialty:
          'Кафедра семейной медицины с курсом клинической лабораторной диагностики',
        cycleName: 'Терапия',
        price: '20 700',
      },
      {
        specialty:
          'Кафедра семейной медицины с курсом клинической лабораторной диагностики',
        cycleName: 'Клиническая лабораторная диагностика',
        price: '16 000',
      },
      {
        specialty: 'Кафедра терапии и гастроэнтерологии',
        cycleName: 'Гастроэнтерология',
        price: '18 400',
      },
      {
        specialty:
          'Кафедра терапии, кардиологии и функциональной диагностики с курсом нефрологии',
        cycleName: 'Функциональная диагностика',
        price: '23 000',
      },
      {
        specialty:
          'Кафедра терапии, кардиологии и функциональной диагностики с курсом нефрологии',
        cycleName: 'Терапия',
        price: '20 700',
      },
      {
        specialty:
          'Кафедра терапии, кардиологии и функциональной диагностики с курсом нефрологии',
        cycleName: 'Кардиология',
        price: '20 000',
      },
      {
        specialty:
          'Кафедра терапии, кардиологии и функциональной диагностики с курсом нефрологии',
        cycleName: 'Нефрология',
        price: '16 000',
      },
      {
        specialty: 'Кафедра хирургии с курсом эндоскопии и урологии',
        cycleName: 'Хирургия',
        price: '20 700',
      },
      {
        specialty: 'Кафедра хирургии с курсом эндоскопии и урологии',
        cycleName: 'Эндоскопия',
        price: '20 700',
      },
      {
        specialty: 'Кафедра хирургии с курсом эндоскопии и урологии',
        cycleName: 'Урология',
        price: '16 000',
      },
      {
        specialty: 'Кафедра неврологии',
        cycleName: 'Неврология',
        price: '16 000',
      },
      {
        specialty: 'Кафедра лучевой диагностики',
        cycleName: 'Ультразвуковая диагностика',
        price: '25 000',
      },
      {
        specialty:
          'Кафедра медицинской реабилитации, лечебной физкультуры  физиотерапии и курортологии',
        cycleName: 'Лечебная физкультура и спортивная медицина',
        price: '16 000',
      },
      {
        specialty:
          'Кафедра медицинской реабилитации, лечебной физкультуры  физиотерапии и курортологии',
        cycleName: 'Физиотерапия',
        price: '16 000',
      },
      {
        specialty: 'Кафедра оториноларингологии',
        cycleName: 'Оториноларингология',
        price: '18 400',
      },
      {
        specialty: 'Кафедра травматологии и ортопедии',
        cycleName: 'Травматология и ортопедия',
        price: '18 400',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология терапевтическая',
        price: '15 400',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология ортопедическая',
        price: '17 600',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология хирургическая',
        price: '16 500',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология детская',
        price: '13 200',
      },
      {
        specialty:
          'Кафедра стоматологии и организации стоматологической помощи',
        cycleName: 'Стоматология общей практики',
        price: '13 200',
      },
      {
        specialty: 'Кафедра дерматовенерологии, микологии и косметологии',
        cycleName: 'Дерматовенерология',
        price: '15 000',
      },
      {
        specialty: 'Кафедра дерматовенерологии, микологии и косметологии',
        cycleName: 'Клиническая микология',
        price: '15 000',
      },
      {
        specialty: 'Кафедра организации здравоохранения',
        cycleName: 'Организация здравоохранения и общественное здоровье',
        price: '20 000',
      },
      {
        specialty: 'Кафедра организации здравоохранения',
        cycleName: 'Профпатология',
        price: '20 000',
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
@use '@/assets/styles/mixins.scss';
@use 'sass:map';

$sizes: (
  small: (
    content_title_ft-size: calc(15 * 0.25vw),
    content_contact_info_ft-size: calc(14 * 0.25vw),
    contact_info: calc(13 * 0.25vw),
  ),
  xsmall: (
    content_title_ft-size: calc(10 * 0.25vw),
    content_contact_info_ft-size: calc(8 * 0.27vw),
    contact_info: calc(8 * 0.25vw),
  ),
  medium: (
    content_title_ft-size: calc(10 * 0.25vw),
    content_contact_info_ft-size: calc(7 * 0.27vw),
    contact_info: calc(7 * 0.27vw),
  ),
  large: (
    content_title_ft-size: calc(7 * 0.25vw),
    content_contact_info_ft-size: calc(6 * 0.25vw),
    contact_info: calc(5 * 0.27vw),
  ),
  xlarge: (
    content_title_ft-size: calc(6 * 0.25vw),
    content_contact_info_ft-size: calc(5 * 0.25vw),
    contact_info: calc(4 * 0.27vw),
  ),
  xxlarge: (
    content_title_ft-size: calc(5 * 0.25vw),
    content_contact_info_ft-size: calc(4 * 0.25vw),
    contact_info: calc(4 * 0.27vw),
  ),
);

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content__title {
    text-align: center;
    font-family: Avenir, sans-serif;
    font-weight: 600;
    margin-bottom: calc(5 * 0.25vw);
    margin-top: calc(5 * 0.25vw);
    @each $size, $values in $sizes {
      @include mixins.respond-to($size) {
        font-size: map.get($values, content_title_ft-size);
      }
    }
  }

  .content__contact-info {
    align-self: center;
    display: flex;
    text-align: center;
    text-wrap: balance;
    background-color: #f9dbd2;
    border-radius: 7px;
    padding: 0 calc(5 * 0.25vw);
    margin-top: calc(15 * 0.25vw);
    max-width: 80%;
    @each $size, $values in $sizes {
      @include mixins.respond-to($size) {
        font-size: map.get($values, content_contact_info_ft-size);
      }
    }
  }

  .contact__info {
    max-width: 90%;
    margin-top: calc(5 * 0.25vw);
    margin-bottom: calc(5 * 0.25vw);

    @each $size, $values in $sizes {
      @include mixins.respond-to($size) {
        font-size: map.get($values, contact_info);
      }
    }
  }
}
</style>
