<template>
  <div class="info-block">
    <img
      data-aos="zoom-in"
      data-aos-easing="ease"
      data-aos-duration="1000"
      class="info-block__image"
      src="../../assets/images/fasad.jpg"
      alt="Фасад"
    />
    <div class="info-block__content">
      <p>
        Кафедра неврологии (до 1990 года – клиника неврологии) основана в 1968
        году с первого дня образования ЦНИЛ на базе Городской клинической
        больницы № 51 г. Москвы. Она осуществляет методическое руководство всей
        неврологической службой ГМУ. Ее первым заведующим (1968-1980г.г.) был
        профессор Вячеслав Яковлевич Неретин. В настоящее время кафедру
        возглавляет профессор Владимир Иванович Шмырев
      </p>
      <p>
        Сотрудниками кафедры постоянно ведется научная работа, организуются
        научные и учебные мероприятия. Они входят в состав редакционных коллегий
        ряда научных журналов, в организационные, научные и методические
        комитеты конференций, симпозиумов и других мероприятий различного, в том
        числе и международного уровня. На кафедре работают 13 сотрудников, в том
        числе 4 доктора и 6 кандидатов медицинских наук:
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.info-block {
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  background-color: #f9fbfd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &__image {
    flex: 1 1 300px;
    max-width: 400px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__content {
    flex: 2 1 400px;
    padding: 24px;
    color: #333;
    font-size: 1.2rem;
    line-height: 1.6;
    animation: fade-animation 0.7s ease-in-out;

    p {
      margin-bottom: 16px;
    }
  }
}

@media (max-width: 1670px) {
  .info-block {
    &__image {
      flex: 1 1 250px;
      max-width: 350px;
    }

    &__content {
      font-size: 1.1rem;
    }
  }
}

@media (max-width: 1280px) {
  .info-block {
    &__image {
      flex: 1 1 250px;
      max-width: 300px;
    }

    &__content {
      font-size: 1rem;
    }
  }
}

@media (max-width: 1170px) {
  .info-block {
    &__image {
      align-self: start;
      border-radius: 13px;
    }

    &__content {
      align-self: start;
      padding-top: 0;
      font-size: 1rem;
    }
  }
}

@media (max-width: 950px) {
  .info-block {
    flex-direction: column;

    &__image {
      object-fit: cover;
      max-width: 350px;
      align-self: center;
      max-height: 200px;
      border-radius: 7px;
    }

    &__content {
      padding: 16px;
      font-size: 1.1rem;
    }
  }
}

@media (max-width: 570px) {
  .info-block {
    &__image {
      max-width: 300px;
      max-height: 180px;
    }

    &__content {
      font-size: 1rem;
    }
  }
}

@media (max-width: 450px) {
  .info-block {
    &__image {
      max-width: 280px;
      max-height: 160px;
    }

    &__content {
      font-size: 0.95rem;
    }
  }
}

@keyframes fade-animation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
