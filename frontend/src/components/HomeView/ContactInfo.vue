<template>
  <div class="contact-info">
    <h2 class="contact-info__title">
      Контактная информация / <a href="#">Полная</a>
    </h2>

    <div class="contact-info__content">
      <div class="contact-info__section">
        <h3 class="contact-info__subtitle">Телефон</h3>
        <ul class="contact-info__list">
          <li class="contact-info__item">+7 (499) 146-83-35 (ГКБ №51)</li>
          <li class="contact-info__item">
            +7 (495) 530-00-86 (ЦКБП, учебная комната №4-26)
          </li>
          <li class="contact-info__item">
            +7 (495) 530-06-73 (ЦКБП, заведующий кафедрой)
          </li>
        </ul>
      </div>

      <div class="contact-info__section">
        <h3 class="contact-info__subtitle">Fax</h3>
        <ul class="contact-info__list">
          <li class="contact-info__item">+7 (499) 149-83-35 (ГКБ №51)</li>
          <li class="contact-info__item">+7 (495) 530-06-73 (ЦКБП)</li>
        </ul>
      </div>

      <div class="contact-info__section contact-info__section--address">
        <p class="contact-info__address">
          Адрес: Москва, ул. Маршала Тимошенко, 19, стр 1а. ФГБУ ДПО
          "Центральная государственная медицинская академия" УД Президента РФ.
          Кафедра неврологии
        </p>
        <p class="contact-info__email">Почта: alexvasiliev@mail.ru</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="js"></script>

<style scoped lang="scss">
.contact-info {
  margin-top: 15px;
  background-color: #eaf4ff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  color: #222;
  font-family: 'Arial', sans-serif;

  animation: fade-animation 1s ease-in-out;

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;

    a {
      color: #1e40af; // синий акцент
      transition: 0.3s ease;

      &:hover {
        color: #d7d7d7;
      }
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }

  &__section {
    flex: 1 1 200px;
  }

  &__subtitle {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
    border-bottom: 2px solid #bcd0e5;
    display: inline-block;
    padding-bottom: 4px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-bottom: 6px;
    font-size: 1.1rem;
  }

  &__section--address {
    flex-basis: 100%;
  }

  &__address,
  &__email {
    margin: 8px 0;
    font-size: 1.1rem;
  }

  &__email {
    color: #1e40af;
    font-weight: 500;
  }
}

@media (max-width: 1670px) {
  .contact-info {
    &__title {
      font-size: 1.3rem;
    }

    &__subtitle {
      font-size: 1.1rem;
    }

    &__item,
    &__address,
    &__email {
      font-size: 1rem;
    }
  }
}

@media (max-width: 1280px) {
  .contact-info {
    &__title {
      font-size: 1.2rem;
    }

    &__subtitle {
      font-size: 1rem;
    }

    &__item,
    &__address,
    &__email {
      font-size: 0.95rem;
    }
  }
}

@media (max-width: 1170px) {
  .contact-info {
    &__title {
      font-size: 1.1rem;
    }

    &__subtitle {
      font-size: 1rem;
    }

    &__item,
    &__address,
    &__email {
      font-size: 1rem;
    }
  }
}

@media (max-width: 950px) {
  .contact-info {
    &__content {
      flex-direction: column;
    }

    &__section {
      flex: 1 1 100%;
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
