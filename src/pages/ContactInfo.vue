<template>
  <section class="container-fluid">
    <h1 class="h2 py-2 w-100 text-center">Контактная информация</h1>
    <div class="card w-75">
      <div class="card-body">
        <div class="info d-flex w-100">
          <div class="info_phones">
            <div class="info_phone__title">Телефоны учебных комнат</div>
            <div class="info_phone__item">+7 (499) 146-83-35 (ГКБ №51)</div>
            <div class="info_phone__item">
              +7 (495) 530-00-86 (ЦКБП, корп. 10, учебная комната №426)
            </div>
            <div class="info_phone__item">
              +7 (495) 530-06-73 (ЦКБП, заведующий кафедрой)
            </div>
            <div class="info_phone__title">Fax</div>
            <div class="info_phone__item">+7 (499) 149-83-35 (ГКБ №51)</div>
            <div class="info_phone__item">+7 (495) 530-06-73 (ЦКБП)</div>
          </div>
          <div class="info_address">
            <div class="info_address__title">Адрес</div>
            <div class="info_address__item">
              Адрес: 121359, Москва, ул. Маршала Тимошенко, 19, стр 1а. ФГБУ ДПО
              "Центральная государственная медицинская академия" УД Президента
              РФ. Кафедра неврологии.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact__additional d-flex flex-column">
      <div class="contact__website">
        Сайт:
        <a href="http://www.kremlin-neurology.ru">www.kremlin-neurology.ru</a>
      </div>
      <div class="contact__person">
        <div>
          Заведующий учебной частью кафедры доц. Васильев Алексей Сергеевич
        </div>
        <div class="">тел.: +7 (916) 6050879</div>
      </div>
      <div>E- mail: alexvasiliev@mail.ru</div>
      <div class="contact-warning">
        Внимание! Все учреждения являются режимными, при отсутствии пропуска не
        забывайте его заказать и иметь с собой паспорт для прохода.
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@use 'sass:map';

$info_bg_color: #eaeaea;

$sizes: (
  xxlarge: (
    ft-size-title: calc(5 * 0.25vw),
    ft-size-item: calc(4 * 0.25vw),
  ),
);

.card {
  justify-self: center;
  border-radius: 13px;
  border: none;
  background-color: $info_bg_color;
}

.info_phone__title,
.info_address__title {
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      font-size: map.get($values, ft-size-title);
    }
  }
}

.info_phone__item,
.info_address__item {
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      font-size: map.get($values, ft-size-item);
    }
  }
}

.info_address__title {
  text-align: center;
}

.info_phones {
  width: 100%;
}

.info_address {
  width: 100%;
}
</style>
