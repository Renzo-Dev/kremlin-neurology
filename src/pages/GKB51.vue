<template>
  <div class="container py-4">
    <div class="card shadow-lg border-0">
      <div class="card-body d-flex flex-column align-items-center">
        <div class="h3 text-center mb-3">
          Городская клиническая больница №51 ДЗМ
        </div>
        <div class="fs-6 text-start mb-1">
          Исторически с момента создания ЦНИЛ 4-го ГУ МЗ СССР в 1968 году первой
          клинической базой кафедры (тогда клиники) неврологии была Городская
          клиническая больница №51 ДЗМ. Это плодотворное сотрудничество
          продолжается и по сей день, благодаря чему многие сотрудники и
          заведующий неврологичеким отделением Сергей Александрович Иванов
          являются выпускниками нашей кафедры. Неврологическое отделение с
          блоком интенсивной неврологии ГКБ №51 имеет статус сосудистого с 2001
          года и входит в состав Сердечно-сосудистого центра ГКБ №51. В
          отделении имеется 48 коек для больных с ОНМК и 12 коек в Блоке
          интенсивной неврологии. Ведение больных осуществляет так называемая
          мультидисциплинарная бригада специалистов, включающая кроме
          неврологов, кардиологов, анестезиологов-реаниматологов, специалистов
          по функциональной диагностике, реабилитации и т.д. В отделении
          применяются современные методы обследования: дуплексное сканирование
          брахиоцефальных артерий, транскраниальная доплерография,
          электроэнцефалография, нейровизуализация. В блок интенсивной
          неврологии госпитализируются пациенты с инсультом в рамках
          «терапевтического окна» (первые 6 часов от начала инсульта), а также
          больные с ОНМК имеющие угнетение уровня сознания и\или сопутствующую
          соматическую патологию в стадии декомпенсации (независимо от сроков
          развития инсульта). В БИНе проводится круглосуточное лечение и
          наблюдение больных с ОНМК врачами и средним медицинским персоналом,
          мониторирование витальных показателей. В отделении оказывается весь
          спектр помощи пациентам с инсультом (кроме нейрохирургической),
          включая тромболизис. Также отделение располагает современными
          средствами ранней реабилитации пациенитов с ОНМК, в том числе
          компьютеризированными системами с биологической обратной связью. Столь
          широкие возможности отделения предоставляют великолепные возможности
          для овладения базовыми знаниями и навыками врача-невролога. Страница
          неврологического отделения на официальном сайте ГКБ №51
          <router-link
            class="link-primary"
            to="http://gkb51.com/therapy_departments/vascularcenter/neurology/"
            >на официальном сайте ГКБ №51
          </router-link>
        </div>
      </div>
    </div>
    <div class="alert alert-info mt-5 h6 text-center">
      Схема прохода в неврологическое отделение ГКБ № 51 ДЗМ от ст.м. Филевский
      парк.
    </div>
    <div class="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Afe782deb03bfc4bd36cde7b42eac04a7f4b2774a27088b4886cb079fc8ce01ff"
        frameborder="0"
        allowfullscreen="true"
        width="570px"
        height="637px"
        style="display: block"
      ></iframe>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';

.map {
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 13px;
  @include mixins.respond-to('small') {
    max-width: calc(390 * 0.25vw);
    min-width: calc(390 * 0.25vw);
    max-height: calc(250 * 0.25vw);
    min-height: calc(250 * 0.25vw);
  }

  @include mixins.respond-to('xsmall') {
    max-width: calc(330 * 0.25vw);
    min-width: calc(330 * 0.25vw);
    max-height: calc(140 * 0.25vw);
    min-height: calc(140 * 0.25vw);
    margin: 50px 0;
  }

  @include mixins.respond-to('medium') {
    max-width: calc(330 * 0.25vw);
    min-width: calc(330 * 0.25vw);
    max-height: calc(140 * 0.25vw);
    min-height: calc(140 * 0.25vw);
    margin: 50px 0;
  }

  @include mixins.respond-to('large') {
    max-width: calc(330 * 0.25vw);
    min-width: calc(330 * 0.25vw);
    max-height: calc(140 * 0.25vw);
    min-height: calc(140 * 0.25vw);
    margin: 50px 0;
  }

  @include mixins.respond-to('xlarge') {
    max-width: calc(330 * 0.25vw);
    min-width: calc(330 * 0.25vw);
    max-height: calc(140 * 0.25vw);
    min-height: calc(140 * 0.25vw);
    margin: 50px 0;
  }

  @include mixins.respond-to('xxlarge') {
    max-width: calc(300 * 0.25vw);
    min-width: calc(300 * 0.25vw);
    max-height: calc(220 * 0.25vw);
    min-height: calc(220 * 0.25vw);
    margin: 50px 0;
  }
}

iframe {
  background-color: red;
  padding: 15px;
  width: 100%;
  height: 100%;
}
</style>
