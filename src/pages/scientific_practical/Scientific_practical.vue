<template>
  <div class="container py-4">
    <div class="mb-4">
      <years-section />
      <h1 class="display-6 fw-bold">
        Инновационные технологии в области неврологии и смежных специальностей
      </h1>
      <h2 class="h5 text-muted">
        Российская научно-практическая конференция с международным участием
      </h2>
    </div>
    <div class="mb-4">
      <p>
        В 2010г., в год 410-летнего юбилея Кремлевской медицины, у сотрудников
        кафедры неврологии зародилась идея проведения междисциплинарной
        неврологической конференции...
      </p>
      <p>
        Дальнейшее развитие Конференции шло по пути расширения аудитории и
        углубления решаемых задач...
      </p>
      <p>
        С целью восстановления роли Конференции как площадки для научной
        молодежи была учреждена специальная секция...
      </p>
      <p>
        С 2019г. в связи с расширением программы Конференция перенесена на базу
        ФГБУ "ЦГМА" УД Президента РФ...
      </p>
    </div>

    <div class="mb-4">
      <h2 class="h5 mb-3">Схема проезда на Конференцию (2019 г.)</h2>
      <div class="ratio ratio-16x9">
        <iframe
          src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Af48bbfefa42b01696b0e4503f3138dee0cc76ebcc5d1d3e5d0979b04e868fb3d"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="bg-light p-4 rounded">
      <h5>Провайдер Конференции</h5>
      <p class="mb-1">ООО "Медзнания"</p>
      <p class="mb-1">127083, г. Москва, Большой Каретный пер., 7</p>
      <p class="mb-1">Тел: (495) 699-14-65; 699-81-84</p>
      <p class="mb-0">E-mail: <a href="mailto:info@medq.ru">info@medq.ru</a></p>
    </div>
  </div>
</template>

<script>
import YearsSection from '../../components/scientific_practical/years-section.vue'

export default {
  components: {
    YearsSection,
  },
}
</script>

<style scoped>
h1,
h2 {
  text-align: center;
}
</style>
