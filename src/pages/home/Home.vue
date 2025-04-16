<template>
  <div class="content-wrapper">
    <h2 class="content-wrapper__title">
      Кафедра неврологии ФГБУ ДПО "Центральная государственная медицинская
      академия" УД Президента РФ
    </h2>
    <div class="content-wrapper__context">
      <img
        alt="Картинка фасада здания"
        class="content-wrapper__image"
        src="../../assets/images/fasad.jpg"
        title="Фасад здания"
      />
      <div class="content-wrapper__text">
        <p class="content-wrapper__paragraph">
          Кафедра неврологии (до 1990 года – клиника неврологии) основана в 1968
          году с первого дня образования ЦНИЛ на базе Городской клинической
          больницы № 51 г. Москвы. Она осуществляет методическое руководство
          всей неврологической службой ГМУ. Ее первым заведующим (1968-1980г.г.)
          был профессор Вячеслав Яковлевич Неретин. В настоящее время кафедру
          возглавляет профессор
          <router-link :to="{ name: '' }" class="content-wrapper__link"
            >Владимир Иванович Шмырев
          </router-link>
        </p>
        <p class="content-wrapper__paragraph">
          Сотрудниками кафедры постоянно ведется научная работа, организуются
          научные и учебные мероприятия. Они входят в состав редакционных
          коллегий ряда научных журналов, в организационные, научные и
          методические комитеты конференций, симпозиумов и других мероприятий
          различного, в том числе и международного уровня. На кафедре работают
          13 сотрудников, в том числе 4 доктора и 6 кандидатов медицинских наук:
        </p>
      </div>
    </div>
    <div class="contact-info">
      <div class="contact-info__title">
        Контактная информация /
        <router-link :to="{ name: 'ContactInfo' }" class="contact-info__link"
          >Полная
        </router-link>
      </div>
      <div class="contact-container">
        <div class="contact-info__details">
          <div class="contact-info__section">
            <div class="contact-info__label">Телефон</div>
            <div class="contact-info__item">+7 (499) 146-83-35 (ГКБ №51)</div>
            <div class="contact-info__item">
              +7 (495) 530-00-86 (ЦКБП, учебная комната №4-26)
            </div>
            <div class="contact-info__item">
              +7 (495) 530-06-73 (ЦКБП, заведующий кафедрой)
            </div>
          </div>
          <div class="contact-info__section">
            <div class="contact-info__label">Fax</div>
            <div class="contact-info__item">+7 (499) 149-83-35 (ГКБ №51)</div>
            <div class="contact-info__item">+7 (495) 530-06-73 (ЦКБП)</div>
          </div>
        </div>
        <div class="contact-info__address">
          <div class="contact-info__address-item">
            Адресс: Москва, ул. Маршала Тимошенко, 19, стр 1а. ФГБУ ДПО
            "Центральная государственная медицинская академия" УД Президента РФ.
            Кафедра неврологии
          </div>
          <div class="contact-info__address-item">
            Почта: alexvasiliev@mail.ru
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js"></script>
<style scoped lang="scss">
@use '@/assets/styles/pages/Home.scss';
</style>
