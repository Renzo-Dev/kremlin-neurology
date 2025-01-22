<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="display-4">История ФГБУ "Учебно-научный медицинский центр"</h1>
      <p class="lead">Управления делами Президента Российской Федерации</p>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <h3 class="card-title">Общие сведения</h3>
        <p class="card-text">
          Федеральное государственное бюджетное учреждение "Учебно-научный
          медицинский центр" Управления делами президента Российской Федерации
          было создано в 1968 году как уникальный
          образовательно-научно-производственный комплекс. Его задачи включали
          системное послевузовское и дополнительное профессиональное образование
          врачей, лечебно-консультативную и методическую работу, выполнение
          научных исследований.
        </p>
        <p class="card-text">
          В 2008 году УНМЦ исполнилось 40 лет, а в 2011 году при центре была
          открыта Аттестационная симуляционная медицинская клиника — уникальное
          подразделение для формирования практических навыков без риска для
          пациентов.
        </p>
      </div>
    </div>

    <div class="accordion" id="historyAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Создание и развитие центра
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#historyAccordion"
        >
          <div class="accordion-body">
            <p>
              В 1967 году было принято постановление о создании Центральной
              научно-исследовательской лаборатории Четвертого главного
              управления при Минздраве СССР. В 1968 году на её базе были
              организованы 7 специализированных клиник, среди которых клиники
              общей терапии, кардиологии, хирургии и другие.
            </p>
            <p>
              С самого начала проводились комплексные научные исследования,
              которые выполнялись совместно с практическими медицинскими
              учреждениями. Это заложило основу для подготовки специалистов и
              внедрения новых методов лечения.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Научные достижения
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#historyAccordion"
        >
          <div class="accordion-body">
            <p>
              Учебно-научный медицинский центр стал известен своими
              фундаментальными исследованиями. В 1983 году профессор Ю.В.
              Постнов и д.б.н. С.Н. Орлов изучали патогенез артериальной
              гипертензии, открыв роль нарушений функций клеточных мембран в
              развитии гипертонии.
            </p>
            <p>
              Впоследствии были созданы отделы лазерной хирургии, рентгенологии,
              клиника участкового врача и многие другие подразделения, что
              позволило расширить спектр исследований и образовательных
              программ.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Современный этап
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#historyAccordion"
        >
          <div class="accordion-body">
            <p>
              В 2011 году был открыт многопрофильный Симуляционно-аттестационный
              центр, где используется современное оборудование, включая
              роботизированные манекены и виртуальные тренажеры. Это позволило
              вывести процесс обучения врачей на качественно новый уровень.
            </p>
            <p>
              Сегодня УНМЦ продолжает готовить специалистов, проводить научные
              исследования и внедрять новые медицинские технологии в практику.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.card {
  border: none;
  border-radius: 0.5rem;
}

.accordion-button {
  font-weight: bold;
}
</style>
