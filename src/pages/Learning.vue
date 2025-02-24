<template>
  <div class="education">
    <h2 class="education__title">
      Обучение - ординатура, аспирантура (очная и заочная), профессиональная
      переподготовка (504 часа и более), сертификационные циклы повышения
      квалификации (усовершенствование 144 часа и более),тематическое
      усовершенствование (72 часа).
    </h2>
  </div>
  <div class="education_tabs">
    <router-link :to="item.link" class="education_item" v-for="item in tabs">
      {{ item.label }}
    </router-link>
  </div>
  <div class="info__wrapper">
    <button
      class="button__show_info"
      :class="{ active: showInfo }"
      @click="showInfo = !showInfo"
    >
      Показать информацию
    </button>
    <div v-if="showInfo" class="info_context">
      Кафедра неврологии ФГБУ ДПО «ЦГМА» УД Президента РФ организует и проводит
      послевузовское и дополнительное образование врачей
      лечебно-профилактических и санаторно-курортных учреждений Управления
      делами президента Российской Федерации в виде интернатуры, клинической
      ординатуры и аспирантуры (очной и заочной форм обучения), сертификационных
      циклов, циклов тематического усовершенствования и повышения квалификации
      медицинских специалистов неврологического профиля, в том числе на
      договорной основе. ФГБУ ДПО «ЦГМА» обладает правом первичной специализации
      и использует основные и дополнительные медицинские профессиональные
      программы и программы послевузовского профессионального медицинского
      образования. На кафедре роводится подготовка аспирантов по специальности
      14.01.11 Нервные болезни". в ЦГМА организован прием экзаменов
      кандидатского минимума. При обучении осуществляются следующие основные
      виды и формы учебных занятий: лекции, практические, семинарские и выездные
      занятия, стажировку на рабочем месте, контрольные и другие работы,
      методическое руководство, консультации, самостоятельную работу обучаемых,
      проведение экспертизы и разбора конкретных случаев и т.д. При проведении
      учебных занятий активно используются телемедицинские и симуляционные
      технологии. По завершению обучения и успешной сдачи квалификационных
      экзаменов слушатели циклов получают в установленном порядке свидетельство
      о повышении квалификации и сертификат врача–специалиста. К
      учебно-педагогическому процессу привлекаются Главные специалисты Главного
      медицинского управления Управления делами Президента Российской Федерации
      – академики РАН и РАМН, руководители, ведущие педагоги и крупные ученые
      институтов РАМН и Минздравсоцразвития России. Кафедра неврологии ФГБУ ДПО
      «ЦГМА» осуществляет следующие виды послевузовского дополнительного
      профессионального образования: Ординатура, Аспирантуа, циклы ПП и ПК,
      мастер-классы.
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const showInfo = ref(true)
    const activeTab = ref('')
    const tabs = [
      { id: 'ordinatura', label: 'Ординатура', link: '/hll' },
      { id: 'aspirantura', label: 'Аспирантура', link: '#' },
      { id: 'retraining', label: 'Профессиональная переподготовка', link: '#' },
      {
        id: 'certification_cycles',
        label: 'Сертификационные циклы',
        link: '#',
      },
      {
        id: 'thematic_improvement',
        label: 'Тематическое усовершенстрование',
        link: '#',
      },
    ]

    return {
      showInfo,
      activeTab,
      tabs,
    }
  },
})
</script>

<style scoped lang="scss">
$bg-button-s-info: #cccccc;

.education {
  user-select: none;
  max-width: calc(100vw - 100px);
  margin: 20px auto;
  padding: 20px 10px 10px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.education__title {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.education_tabs {
  display: flex;
  max-width: calc(100vw - 100px);
  align-self: center;
  justify-content: center;
  align-items: center;

  .education_item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: fit-content;
    height: 100%;
    font-family: Arial, serif;

    font-size: calc(4 * 0.25vw);
    text-wrap: nowrap;
    background: #e2e2e2ff;
    border-radius: 7px;
    padding: 10px;
    text-decoration: none;
    color: black;
    transition: 100ms ease-in-out;

    &:hover {
      background-color: #adadad;
      transform: translateY(5px);
    }

    &:not(:first-child) {
      margin-left: 5px;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}

.info__wrapper {
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 100px);
  margin-top: 15px;

  .button__show_info {
    outline: none;
    width: fit-content;
    height: fit-content;
    border: none;
    background-color: $bg-button-s-info;
    padding: 5px 15px;
    border-radius: 7px;
    text-align: center;
    font-size: calc(4 * 0.25vw);

    &.active {
      background-color: #8c8c8c !important;
    }
  }

  .info_context {
    padding: 10px;
    animation: showInfo 1s linear;
    margin-top: 10px;
    font-size: calc(4 * 0.23vw);
    text-align: justify;
    border-radius: 13px;
    border: 1px solid #c7c7c7;
  }
}

@keyframes showInfo {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
