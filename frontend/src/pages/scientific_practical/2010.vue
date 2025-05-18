<template>
  <div class="container py-5">
    <years-section />
    <div class="card shadow-sm border-0">
      <div class="card-body">
        <h1 class="card-title text-center mb-4">
          Межведомственная научно-практическая конференция
        </h1>

        <ul class="list-group list-group-flush mb-4">
          <li class="list-group-item">
            <strong>Дата:</strong> 17 ноября 2010 г.
          </li>
          <li class="list-group-item">
            <strong>Место проведения:</strong> г. Москва, Романов пер., д. 2.
          </li>
        </ul>

        <h2 class="h4 text-primary mt-4">О конференции</h2>
        <p>
          Межведомственная научно-практическая конференция
          <strong
            >«Актуальные инновационные медицинские технологии в области
            неврологии и мануальной терапии»</strong
          >
          стала первой в ряду ежегодных научно-практических конференций
          <em
            >«Инновационные технологии в неврологии и смежных
            специальностях»</em
          >.
        </p>
        <p>
          Данная конференция была организована силами кафедры неврологии ФГУ
          "УНМЦ" УД Президента РФ (ныне ФГБУ ДПО "ЦГМА").
        </p>

        <h2 class="h4 text-primary mt-4">Организаторы</h2>
        <p>
          <strong>Научный руководитель конференции:</strong><br />
          заведующий кафедрой неврологии ФГУ «УНМЦ» УД Президента РФ, главный
          специалист по неврологии ГМУ УД Президента РФ, д.м.н., профессор
          Владимир Иванович Шмырев.
        </p>
        <p>
          <strong>Секретарь конференции:</strong><br />
          доцент кафедры неврологии УНМЦ, к.м.н. Васильев Алексей Сергеевич.
        </p>

        <h2 class="h4 text-primary mt-4">Материалы конференции</h2>
        <p>
          С материалами конференции можно ознакомиться
          <a
            class="btn btn-outline-primary d-inline-flex align-items-center"
            href="backend/fileDownload.php?FileName=Conference_neuro-2010.doc"
          >
            <img
              src="/src/assets/images/word.png"
              alt="word"
              width="24"
              height="24"
              class="me-2"
            />
            Скачать материалы
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import YearsSection from '../../components/scientific_practical/years-section.vue'

export default {
  components: { YearsSection },
}
</script>
