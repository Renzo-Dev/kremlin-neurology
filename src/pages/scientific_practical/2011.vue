<template>
  <div class="container py-5">
    <years-section />
    <div class="card shadow-sm border-0">
      <div class="card-body">
        <h1 class="card-title text-center mb-4">
          II Ежегодная межрегиональная научно-практическая конференция с
          международным участием<br />
          <small class="text-muted">
            «Инновационные медицинские технологии в области неврологии и смежных
            медицинских специальностей»
          </small>
        </h1>

        <div class="mb-4">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Дата:</strong> 21 декабря 2011 г.
            </li>
            <li class="list-group-item">
              <strong>Место:</strong> г. Москва, Романов пер., д. 2.
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <p>
            Эта конференция стала второй в ряду ежегодных научно-практических
            конференций
            <em
              >«Инновационные технологии в неврологии и смежных
              специальностях»</em
            >. Данная конференция была организована силами кафедры неврологии
            ФГУ "УНМЦ" УД Президента РФ (ныне ФГБУ ДПО "ЦГМА").
          </p>
        </div>

        <div class="mb-4">
          <h2 class="h5 text-primary">Научный руководитель конференции</h2>
          <p>
            Заведующий кафедрой неврологии ФГУ «УНМЦ» УД Президента РФ, главный
            специалист по неврологии ГМУ УД Президента РФ, д.м.н., профессор
            Владимир Иванович Шмырев.
          </p>

          <h2 class="h5 text-primary">Секретарь конференции</h2>
          <p>
            Доцент кафедры неврологии УНМЦ, к.м.н. Васильев Алексей Сергеевич.
          </p>
        </div>

        <div>
          <h2 class="h5 text-primary">Материалы конференции</h2>
          <p>
            С материалами конференции можно ознакомиться:
            <a
              class="btn btn-outline-primary d-inline-flex align-items-center"
              href="backend/fileDownload.php?FileName=Conference_neuro-2011(itog).doc"
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
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import YearsSection from '../../components/scientific_practical/years-section.vue'

export default defineComponent({
  components: { YearsSection },
})
</script>

<style scoped lang="scss"></style>
