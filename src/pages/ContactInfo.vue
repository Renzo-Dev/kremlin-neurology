<template>
  <div class="container-fluid">
    <h1 class="h2 py-2 w-100 text-center">Контактная информация</h1>
    <div class="card">
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
            <div>Fax</div>
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
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@use 'sass:map';

$sizes: (
  xxlarge: (
    ft-size-title: calc(5 * 0.25vw),
  ),
);

.info_phone__title {
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      font-size: map.get($values, ft-size-title);
    }
  }
}
</style>
