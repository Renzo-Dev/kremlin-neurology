<template>
  <section class="container-fluid">
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
    <div class="info__wrapper">
      <div class="contact">
        <div class="contact__site">
          Сайт:
          <a href="http://www.kremlin-neurology.ru" class="contact__link"
            >www.kremlin-neurology.ru</a
          >
        </div>
        <div class="contact__head">
          Заведующий учебной частью кафедры доц.
          <span class="contact__name">Васильев Алексей Сергеевич</span>
        </div>
        <div class="contact__email">
          E-mail: <span class="contact__email-value">alexvasiliev@mail.ru</span>
        </div>
        <div class="contact__phone">
          Телефон: <span class="contact__phone-value">+7 (916) 6050879</span>
        </div>
        <div class="warning">
          <div class="warning__text">
            Внимание! Все учреждения являются режимными, при отсутствии пропуска
            не забывайте его заказать и иметь с собой паспорт для прохода.
          </div>
        </div>
      </div>

      <div class="directions">
        <p class="directions__text">
          Проезд до ст. метро Молодежная (выход из головного вагона), далее на
          автобусе 251 до 2-й (учебные комнаты в ЦКБП) или 3-й остановки
          (учебная комната в Симуляционном центре ЦГМА) или до ст. метро
          Крылатское (выход из последнего вагона), далее пешком (см. схему).
          Вход в ЦКБП через 2-ю проходную ЦКБП или проходную ЦГМА,
          соответственно (см. схемы). Если у Вас нет пропуска – не забудьте
          заказать и взять с собой паспорт.
        </p>
      </div>
    </div>
  </section>
  <div class="maps">
    <div class="maps__wrapper">
      <div class="maps__info">
        Схема прохода в Симуляционный центр ЦГМА (ул. М. Тимошенко, д.19, стр.
        1А, аудитория 314)
      </div>
      <div class="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Af48bbfefa42b01696b0e4503f3138dee0cc76ebcc5d1d3e5d0979b04e868fb3d"
          frameborder="0"
          allowfullscreen="true"
          width="550px"
          height="550px"
          style="display: block"
        ></iframe>
      </div>
    </div>
    <div class="maps__wrapper">
      <div class="maps__info">
        Схема прохода в неврологическое отделение ГКБ № 51 ДЗМ от ст.м.
        Филевский парк.
      </div>
      <div class="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Afe782deb03bfc4bd36cde7b42eac04a7f4b2774a27088b4886cb079fc8ce01ff"
          frameborder="0"
          allowfullscreen="true"
          width="550px"
          height="550px"
          style="display: block"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@use 'sass:map';

$info_bg_color: #eaeaea;

$sizes: (
  small: (
    ft-size-title: calc(13 * 0.25vw),
    ft-size-item: calc(12 * 0.25vw),
    ft-contact: calc(12 * 0.25vw),
    ft-size-directions: calc(12 * 0.25vw),
    ft-size-maps-info: calc(12 * 0.25vw),
    m-b-maps-info: calc(15 * 0.25vw),
    map-heights: calc(200 * 0.25vw),
    maps-directions: column,
  ),
  xsmall: (
    ft-size-title: calc(8 * 0.27vw),
    ft-size-item: calc(8 * 0.25vw),
    ft-contact: calc(7 * 0.25vw),
    ft-size-directions: calc(7 * 0.25vw),
    ft-size-maps-info: calc(7 * 0.27vw),
    m-b-maps-info: calc(7 * 0.25vw),
    map-heights: calc(200 * 0.25vw),
    maps-directions: column,
  ),
  medium: (
    ft-size-title: calc(6 * 0.27vw),
    ft-size-item: calc(5 * 0.25vw),
    ft-contact: calc(5 * 0.27vw),
    ft-size-directions: calc(5 * 0.27vw),
    ft-size-maps-info: calc(5 * 0.27vw),
    m-b-maps-info: calc(5 * 0.25vw),
    map-heights: calc(120 * 0.25vw),
    maps-directions: row,
  ),
  large: (
    ft-size-title: calc(5 * 0.27vw),
    ft-size-item: calc(5 * 0.25vw),
    ft-contact: calc(5 * 0.25vw),
    ft-size-directions: calc(5 * 0.25vw),
    ft-size-maps-info: calc(5 * 0.26vw),
    m-b-maps-info: calc(5 * 0.27vw),
    map-heights: calc(100 * 0.25vw),
    maps-directions: row,
  ),
  xlarge: (
    ft-size-title: calc(5 * 0.26vw),
    ft-size-item: calc(4 * 0.26vw),
    ft-contact: calc(4 * 0.28vw),
    ft-size-directions: calc(5 * 0.25vw),
    ft-size-maps-info: calc(5 * 0.25vw),
    m-b-maps-info: calc(5 * 0.25vw),
    map-heights: calc(100 * 0.25vw),
    maps-directions: row,
  ),
  xxlarge: (
    ft-size-title: calc(5 * 0.27vw),
    ft-size-item: calc(4 * 0.27vw),
    ft-contact: calc(4 * 0.27vw),
    ft-size-directions: calc(5 * 0.25vw),
    ft-size-maps-info: calc(5 * 0.27vw),
    m-b-maps-info: calc(5 * 0.25vw),
    map-heights: calc(100 * 0.25vw),
    maps-directions: row,
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

.info__wrapper {
  display: flex;
  padding-top: calc(5 * 0.25vw);
  margin: 0 calc(5 * 0.25vw);
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      flex-direction: map.get($values, maps-directions);
    }
  }
}

.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      font-size: map.get($values, ft-contact);
    }
  }

  &:first-child {
    margin-right: calc(5 * 0.25vw);
  }

  &:last-child {
    margin-left: calc(5 * 0.25vw);
  }

  .contact__site {
    font-weight: bold;

    .contact__link {
      text-decoration: none;
    }
  }

  .contact__head {
    font-weight: bold;

    .contact__name {
      color: #5671ff;
    }
  }

  .contact__email {
    font-weight: bold;

    .contact__email-value {
      color: #ff363d;
    }
  }

  .contact__phone {
    font-weight: bold;
  }

  .warning {
    .warning__text {
      font-weight: bold;
      color: red;
    }
  }
}

.directions__text {
  font-family: Arial, Helvetica, sans-serif;
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      font-size: map.get($values, ft-size-directions);
    }
  }
}

.directions {
  width: 100%;
}

.maps {
  margin-top: 15px;
  display: flex;
  align-self: center;
  width: 100%;
  justify-content: center;
  padding: calc(10 * 0.25vw);
  @each $size, $values in $sizes {
    @include mixins.respond-to($size) {
      flex-direction: map.get($values, maps-directions);
    }
  }

  .maps__wrapper {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-child {
      margin-right: calc(5 * 0.25vw);
    }

    &:last-child {
      margin-left: calc(5 * 0.25vw);
    }

    .maps__info {
      color: black;
      font-weight: bold;
      @each $size, $values in $sizes {
        @include mixins.respond-to($size) {
          margin-bottom: map.get($values, m-b-maps-info);
          font-size: map.get($values, ft-size-maps-info);
        }
      }
    }

    .map {
      width: 100%;
      @each $size, $values in $sizes {
        @include mixins.respond-to($size) {
          height: map.get($values, map-heights);
        }
      }
      border-radius: 15px;

      iframe {
        border-radius: 15px;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
