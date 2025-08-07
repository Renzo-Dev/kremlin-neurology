<template>
  <div class="container">
    <div class="card shadow-lg border-0">
      <div class="card-body d-flex flex-column align-items-center">
        <h2 class="text-center h2">Клинические базы кафедры неврологии</h2>
        <div class="button-link-container">
          <router-link class="button-link" :to="{ name: 'Gkb51dzm' }"
            >ГКБ №51 ДЗМ
          </router-link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="button-link"
            href="http://www.kremlin-neurology.ru/volynka.htm"
            >КБ №1 (Волынская)
          </a>
        </div>
        <p class="text-info-emphasis mt-3">
          Кафедра неврологии проводит обучение врачей-неврологов на ряде
          многопрофильных клинических баз как городского подчинения, так и
          являющихся подведомственными учреждениями ГМУ УД Президента РФ. В их
          число входит Городская клиническая больница №51 ДЗМ, имеющая плановое
          и интенсивное сосудистые неврологические отделения и обеспечивающая
          широкие возможности изучения ургентной ангионеврологии. Свои первые
          шаги в неврологии наши будущие коллеги делают именно здесь.
        </p>
        <p class="text-info-emphasis">
          Второй традиционной базой кафедры является ФГБУ "Центральная
          клиническая больница с поликлиникой" УД Президента РФ. Наличие в ЦКБП
          не только планового и интенсивного неврологических отделений, а также
          геронтологии и детского психоневрологического отделений, но и
          нейрохирургии, а также мощнейшей диагностической базы обеспечивает
          совершенствование врача-невролога и дает возможности для его глубокой
          междисциплинарной подготовки. Поликлиника ЦКБ дает возможность
          получения навыков работы в амбулаторном звене.
        </p>
        <p class="text-info-emphasis">
          С осени 2016 года новой клинической базой кафедры стала ФГБУ
          "Клиническая больница №1 (Волынская) УД Президента РФ, имеющая 2
          плановых неврологических отделения, нейрореабилитацию, отделение
          интенсивной неврологии и поликлинику, что позволяет провести все
          необходимые этапы подготовки врача-невролога.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="js"></script>

<style scoped lang="scss">
.container {
  margin-top: 2%;
}

.button-link-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1%;

  .button-link {
    text-align: center;
    font-size: 1.2rem;
    color: black;
    background-color: #e0e0e0;
    padding: 2%;
    border-radius: 7px;
    margin: 0 5px;
    transition: 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #b0b0b0;
    }
  }
}

.text-info-emphasis {
  font-size: 1.2rem;
  text-align: center;
  text-wrap: balance;
}

@media (max-width: 500px) {
  .container {
    margin-bottom: 15px;
  }

  .button-link-container {
    margin: 15px 0;

    .button-link {
      font-size: 1.1rem;
    }
  }
}
</style>
