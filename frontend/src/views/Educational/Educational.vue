<template>
  <div class="container py-3">
    <div class="text-center mb-3">
      <h2 class="fw-bold">Кафедра неврологии</h2>
      <h5>
        ФГБУ ДПО "Центральная государственная медицинская академия" УД
        Президента РФ
      </h5>
      <p class="text-muted fst-italic">Официальный сайт</p>
    </div>

    <div class="text-center mb-3 years-education">
      <span class="fw-bold">Годы проведения:</span>
      <span v-for="year in years" :key="year" class="ms-2">
        <router-link
            :to="{ name: `educational${year}` }"
            class="text-primary fw-medium"
        >
          {{ year }}
        </router-link>
      </span>
    </div>

    <div class="card p-4 shadow-sm mb-4">
      <h4 class="fw-semibold mb-3">
        Российская научно-практическая конференция с международным участием
        <br/>
        <small class="text-muted"
        >«Инновационные технологии в области неврологии и смежных
          специальностей»</small
        >
      </h4>

      <p>
        В 2010 г., в год 410-летнего юбилея Кремлевской медицины, у сотрудников
        кафедры неврологии зародилась идея проведения междисциплинарной
        неврологической конференции, основной задачей которой было
        предоставление площадки как для публикаций и выступлений молодых
        специалистов, так и для общения с ведущими специалистами в этой
        области...
      </p>

      <p>
        Дальнейшее развитие Конференции шло по пути расширения аудитории и
        углубления решаемых задач.
      </p>

      <p>
        С целью восстановления роли Конференции как площадки для научной
        молодёжи была учреждена секция "Школа молодых ученых", которая с 2017
        года преобразована в симпозиум. Также в программу конференции включен
        новый симпозиум "Сестринское дело в неврологии".
      </p>

      <p class="fw-bold mt-4">
        С 2019 г. в связи с расширением программы Конференция перенесена на базу
        ФГБУ "ЦГМА" УД Президента РФ (г. Москва, ул. маршала Тимошенко, 19-1а).
      </p>
    </div>

    <div class="text-center mb-4 map-container">
      <h5 class="fw-bold">Схема проезда</h5>
      <p><strong>Схема проезда на Конференцию. 2019 г.</strong></p>
      <div class="map">
        <iframe
            src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Af48bbfefa42b01696b0e4503f3138dee0cc76ebcc5d1d3e5d0979b04e868fb3d"
            frameborder="0"
            allowfullscreen="true"
            width="789px"
            height="576px"
            style="display: block"
        ></iframe>
      </div>
    </div>

    <div class="card p-4 shadow-sm">
      <h5 class="fw-bold mb-3">Провайдер Конференции:</h5>
      <p>
        ООО "Медзнания"<br/>
        127083, г. Москва, Большой Каретный пер., 7<br/>
        Тел.: (495) 699-14-65, 699-81-84<br/>
        E-mail: <a href="mailto:info@medq.ru">info@medq.ru</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const years = [2017, 2018]
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

  .years-education {
    display: flex;
    flex-wrap: wrap;

    span {
      padding: 1%;
    }
  }

  h2,
  h5 {
    font-size: 1.3rem;
  }

  span {
    font-size: 1.1rem;
  }

  .fw-semibold {
    font-size: 1.3rem;
  }

  .text-muted {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.1rem;
  }

  .map-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.map {
  display: flex;
  align-self: center;
  border-radius: 13px;
}

iframe {
  border-radius: 13px;
  padding: 15px;
  width: 100%;
  height: 100%;
}

@media (min-width: 1600px) {
  .map {
    width: 50%;
    height: 50vh;
  }
}

@media (max-width: 1600px) {
  .map {
    width: 70%;
    height: 50vh;
  }
}

@media (max-width: 600px) {
  .map {
    width: 100%;
    height: 50vh;
  }
}

@media (max-width: 450px) {
  .container {
    .card {
      max-height: 50vh;
      overflow: auto;
    }

    .text-center.mb-3 {
      margin-top: -15px;

      .fw-bold {
        font-size: 1.2rem;
        margin-bottom: 15px;
      }
    }

    h2,
    h5 {
      font-size: 1.1rem;
    }

    span {
      font-size: 1.1rem;
    }

    .fw-semibold {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
    }

    .text-muted {
      margin: 10px 0;
      font-size: 1.2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  .map {
    width: 100%;
    height: 50vh;
  }

}
</style>
