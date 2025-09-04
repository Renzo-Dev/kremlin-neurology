<template>
  <div class="certification-cycles-page">
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">Сертификационные циклы</h1>
        <p class="page-subtitle">
          Повышение квалификации для врачей-неврологов (144 часа в год)
        </p>
      </div>
    </div>

    <div class="content-section">
      <div class="container">
        <div class="program-info">
          <h2>Сертификационные циклы</h2>
          <p class="description">
            Программы повышения квалификации по специальности "Неврология" (144
            часа в год) для врачей, желающих обновить знания и получить
            сертификат специалиста.
          </p>

          <div class="program-details">
            <div class="detail-item">
              <h3>Объем программы</h3>
              <p>144 часа в год</p>
            </div>

            <div class="detail-item">
              <h3>Форма обучения</h3>
              <p>Очно-заочная с дистанционными элементами</p>
            </div>

            <div class="detail-item">
              <h3>Место проведения</h3>
              <p>ГКБ №51 ДЗМ</p>
            </div>

            <div class="detail-item">
              <h3>Специальность</h3>
              <p>14.01.11 - "Неврология"</p>
            </div>
          </div>
        </div>

        <div class="pricing-section">
          <div class="section-header">
            <h2>Стоимость обучения</h2>
          </div>

          <div class="pricing-accordion">
            <div class="accordion-item">
              <div class="accordion-header" @click="togglePricingTable">
                <div class="header-content">
                  <h3>Стоимость обучения по специальностям</h3>
                  <p>Нажмите для просмотра полного прайс-листа</p>
                </div>
                <div
                  class="accordion-icon"
                  :class="{ active: isPricingTableOpen }"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div
                class="accordion-content"
                :class="{ active: isPricingTableOpen }"
              >
                <div class="pricing-note">
                  <span class="note-icon">ℹ️</span>
                  Базовые цены на 2013 год. Цены на 2014г. уточняйте в учебном
                  отделе (тел. внизу).
                </div>

                <div class="pricing-table-wrapper">
                  <table class="pricing-table">
                    <thead>
                      <tr>
                        <th>№</th>
                        <th>Кафедра/Курс</th>
                        <th>Наименование цикла</th>
                        <th>Стоимость (₽)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Кафедра анестезиологии и реаниматологии</td>
                        <td>Анестезиология и реаниматология</td>
                        <td class="price-cell">13 800</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          Кафедра скорой медицинской помощи и экстремальной
                          медицины
                        </td>
                        <td>Скорая медицинская помощь</td>
                        <td class="price-cell">18 400</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          Кафедра семейной медицины с курсом клинической
                          лабораторной диагностики
                        </td>
                        <td>Общая врачебная практика (семейная медицина)</td>
                        <td class="price-cell">24 000</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Терапия</td>
                        <td class="price-cell">20 700</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Клиническая лабораторная диагностика</td>
                        <td class="price-cell">16 000</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Кафедра терапии и гастроэнтерологии</td>
                        <td>Гастроэнтерология</td>
                        <td class="price-cell">18 400</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          Кафедра терапии, кардиологии и функциональной
                          диагностики с курсом нефрологии
                        </td>
                        <td>Функциональная диагностика</td>
                        <td class="price-cell">23 000</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Терапия</td>
                        <td class="price-cell">20 700</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Кардиология</td>
                        <td class="price-cell">20 000</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Нефрология</td>
                        <td class="price-cell">16 000</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Кафедра хирургии с курсом эндоскопии и урологии</td>
                        <td>Хирургия</td>
                        <td class="price-cell">20 700</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Эндоскопия</td>
                        <td class="price-cell">16 000</td>
                      </tr>
                      <tr class="highlighted">
                        <td>7</td>
                        <td><strong>Кафедра неврологии</strong></td>
                        <td>
                          <strong>Неврология</strong><br /><small
                            >Циклы: 29.01.2014г. - 26.02.2014г.; 26.03.2014г. -
                            23.04.2014г.; 12.11.2014г. - 10.12.2014г. 144-150
                            часов, для врачей-неврологов.</small
                          >
                        </td>
                        <td class="price-cell">16 000</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Кафедра лучевой диагностики</td>
                        <td>
                          Ультразвуковая диагностика<br /><small
                            >Циклы: 17.03.14 - 11.04.14г.; 22.09.14 - 18.10.14г.
                            144 часа, для врачей ультразвуковой диагностики
                            поликлиник, стационаров, санаториев</small
                          >
                        </td>
                        <td class="price-cell">25 000</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          Кафедра медицинской реабилитации, лечебной физкультуры
                          физиотерапии и курортологии
                        </td>
                        <td>Лечебная физкультура и спортивная медицина</td>
                        <td class="price-cell">16 000</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Физиотерапия</td>
                        <td class="price-cell">16 000</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Кафедра оториноларингологии</td>
                        <td>Оториноларингология</td>
                        <td class="price-cell">18 400</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Кафедра травматологии и ортопедии</td>
                        <td>Травматология и ортопедия</td>
                        <td class="price-cell">18 400</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>
                          Кафедра стоматологии и организации стоматологической
                          помощи
                        </td>
                        <td>Стоматология терапевтическая</td>
                        <td class="price-cell">15 400</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Стоматология ортопедическая</td>
                        <td class="price-cell">17 600</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Стоматология хирургическая</td>
                        <td class="price-cell">16 500</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Стоматология детская</td>
                        <td class="price-cell">13 200</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Стоматология общей практики</td>
                        <td class="price-cell">13 200</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>
                          Кафедра дерматовенерологии, микологии и косметологии
                        </td>
                        <td>Дерматовенерология</td>
                        <td class="price-cell">15 000</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Клиническая микология</td>
                        <td class="price-cell">15 000</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Дерматовенерология</td>
                        <td class="price-cell">15 000</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Кафедра организации здравоохранения</td>
                        <td>
                          Организация здравоохранения и общественное здоровье
                        </td>
                        <td class="price-cell">20 000</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Профпатология</td>
                        <td class="price-cell">20 000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="pricing-disclaimer">
                  <div class="disclaimer-icon">⚠️</div>
                  <p>
                    <strong>Примечание:</strong> Стоимость обучения указана на
                    2013 год. Цены на 2014г. уточняйте в учебном отделе по
                    указанным контактам.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contacts Section -->
        <div class="section contacts-section">
          <div class="section-header">
            <h2>Контакты для записи</h2>
            <p class="section-description">
              Свяжитесь с нами для получения подробной информации о записи на
              циклы
            </p>
          </div>

          <div class="contact-button-container">
            <router-link to="/contacts" class="contact-button">
              <span class="button-icon">📞</span>
              <span class="button-text">Перейти на страницу контактов</span>
            </router-link>
          </div>

          <div class="contact-note">
            <div class="note-icon">ℹ️</div>
            <p>
              <strong>Примечание:</strong> Стоимость обучения указана на 2013
              год. Актуальную стоимость уточняйте по указанным телефонам.
            </p>
          </div>

          <div class="contact-info-extended">
            <div class="contact-person">
              <div class="contact-icon">👩‍💼</div>
              <h4>По всем вопросам, связанным с обучением</h4>
              <p><strong>Лосева Любовь Андреевна:</strong> 8 (499) 141-04-71</p>
              <p><strong>Методисты:</strong> 8 (499) 140-29-53</p>
            </div>
          </div>

          <div class="documents-section">
            <h3>Документы</h3>
            <div class="document-item">
              <div class="document-icon">📜</div>
              <div class="document-content">
                <h4>
                  Лицензия на право осуществления образовательной деятельности
                </h4>
                <p>
                  Выдана Федеральной службой НСОН серия ААА № 002875,
                  регистрационный № 2750 от 19 апреля 2012г.
                </p>
                <p><strong>Срок действия:</strong> бессрочно</p>
              </div>
            </div>

            <div class="document-item">
              <div class="document-icon">🏛️</div>
              <div class="document-content">
                <h4>Свидетельство о государственной аккредитации</h4>
                <p>
                  Выдано Федеральной службой НСОН, № 25-2107 от 17 июля 2009 г.
                </p>
                <p>
                  <strong>Государственный аккредитационный статус:</strong>
                  установлен до 17 июля 2014г.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificationCyclesPage',
  metaInfo: {
    title: 'Сертификационные циклы - Кафедра неврологии',
    meta: [
      {
        name: 'description',
        content:
          'Сертификационные циклы повышения квалификации по неврологии. 144 часа в год, очно-заочная форма обучения.',
      },
    ],
  },
  data() {
    return {
      isPricingTableOpen: false,
    }
  },
  methods: {
    togglePricingTable() {
      this.isPricingTableOpen = !this.isPricingTableOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:color';

// Variables
$text-primary: #2c3e50;
$text-secondary: #6c757d;

.certification-cycles-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2c3e50;
  padding: 80px 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.content-section {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.program-info {
  margin-bottom: 60px;

  h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
  }
}

.program-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.detail-item {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #495057;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    color: #6c757d;
    font-size: 1.1rem;
    font-weight: 500;
  }
}

// Contact Button

// Section styles
.section {
  margin-bottom: 80px;

  .section-header {
    text-align: center;
    margin-bottom: 60px;

    h2 {
      font-size: clamp(1.8rem, 4.5vw, 3rem);
      font-weight: 700;
      color: $text-primary;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.2;
      padding: 0 1rem;
    }

    .section-description {
      font-size: 1.2rem;
      color: $text-secondary;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
}

// Contact styles
.contact-note {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 126, 234, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;

  .note-icon {
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    color: $text-primary;
    font-size: 0.95rem;

    strong {
      color: #667eea;
    }
  }
}

// Extended Contact Info
.contact-info-extended {
  margin: 3rem 0;

  .contact-person {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    max-width: 600px;
    margin: 0 auto;

    .contact-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin: 0 auto 1.5rem;
      color: white;
    }

    h4 {
      color: $text-primary;
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    p {
      color: $text-secondary;
      margin: 0.5rem 0;
      font-size: 1.1rem;

      strong {
        color: #667eea;
      }
    }
  }
}

// Contact Button
.contact-button-container {
  text-align: center;
  margin: 2rem 0;

  .contact-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 1rem 2rem;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      background: linear-gradient(
        135deg,
        color.adjust(#667eea, $lightness: -10%),
        color.adjust(#764ba2, $lightness: -10%)
      );
    }

    .button-icon {
      font-size: 1.3rem;
    }

    .button-text {
      white-space: nowrap;
    }
  }
}

// Documents Section
.documents-section {
  margin: 3rem 0;

  h3 {
    text-align: center;
    font-size: 1.8rem;
    color: $text-primary;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .document-item {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    &:last-child {
      margin-bottom: 0;
    }

    .document-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #4facfe, #43e97b);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      color: white;
      flex-shrink: 0;
    }

    .document-content {
      flex: 1;

      h4 {
        color: $text-primary;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        font-weight: 600;
      }

      p {
        color: $text-secondary;
        margin: 0.5rem 0;
        font-size: 1rem;
        line-height: 1.5;

        strong {
          color: #4facfe;
        }
      }
    }
  }
}

.contacts-section {
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 2rem;
  }
}

.contact-info {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #e9ecef;

  p {
    margin: 0.75rem 0;
    color: #555;
    font-size: 1.1rem;

    strong {
      color: #2c3e50;
    }
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .program-details {
    grid-template-columns: 1fr;
  }

  .pricing-table-wrapper {
    .pricing-table {
      th,
      td {
        padding: 0.75rem 1rem;
        font-size: 0.85rem;
        white-space: nowrap;
      }

      th {
        font-size: 0.8rem;
        letter-spacing: 0.3px;
      }

      .price-cell {
        font-size: 1rem;
      }
    }
  }

  .pricing-note {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    border-radius: 12px;

    .note-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
  }

  .pricing-disclaimer {
    flex-direction: column;
    text-align: center;
    padding: 1rem;

    .disclaimer-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }

  .pricing-table-wrapper {
    .pricing-table {
      th,
      td {
        padding: 0.75rem 1rem;
        font-size: 0.85rem;
        white-space: nowrap;
      }

      th {
        font-size: 0.8rem;
        letter-spacing: 0.3px;
      }

      .price-cell {
        font-size: 1rem;
      }
    }
  }

  .pricing-note {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    border-radius: 12px;

    .note-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
  }

  .pricing-disclaimer {
    flex-direction: column;
    text-align: center;
    padding: 1rem;

    .disclaimer-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }

  // Contact Button Mobile Styles
  .contact-button-container {
    .contact-button {
      padding: 0.875rem 1.5rem;
      font-size: 1rem;

      .button-icon {
        font-size: 1.2rem;
      }

      .button-text {
        font-size: 0.95rem;
      }
    }
  }

  .contact-note {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    border-radius: 12px;

    .note-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
  }

  .contact-info-extended {
    .contact-person {
      padding: 2rem 1.5rem;

      .contact-icon {
        width: 50px;
        height: 50px;
        font-size: 1.3rem;
      }

      h4 {
        font-size: 1.2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  .documents-section {
    .document-item {
      padding: 1.5rem;
      flex-direction: column;
      text-align: center;

      .document-icon {
        margin: 0 auto 1rem;
      }

      .document-content {
        h4 {
          font-size: 1.1rem;
        }

        p {
          font-size: 0.95rem;
        }
      }
    }
  }

  .hero-section {
    padding: 60px 0;
  }

  .content-section {
    padding: 40px 0;
  }
}

// Pricing Accordion Styles
.pricing-accordion {
  max-width: 1000px;
  margin: 0 auto;

  .accordion-item {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      transform: translateY(-2px);
    }
  }

  .accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    cursor: pointer;
    background: #f8f9fa;
    color: $text-primary;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid #e9ecef;

    &:hover {
      background: #e9ecef;
    }

    .header-content {
      flex: 1;

      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: $text-primary;
      }

      p {
        font-size: 1rem;
        opacity: 0.7;
        margin: 0;
        color: $text-secondary;
      }
    }

    .accordion-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e0e7ff;
      border-radius: 50%;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      svg {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: #667eea;
      }

      &.active {
        background: #c7d2fe;

        svg {
          transform: rotate(180deg);
        }
      }
    }
  }

  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      max-height: 2000px;
    }
  }
}

// Pricing Table Styles
.pricing-note {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 126, 234, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  margin: 2rem;
  max-width: calc(100% - 4rem);

  .note-icon {
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    color: $text-primary;
    font-size: 0.95rem;

    strong {
      color: #667eea;
    }
  }
}

.pricing-table-wrapper {
  margin: 2rem;
  max-width: calc(100% - 4rem);
  overflow-x: auto;

  .pricing-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    th,
    td {
      padding: 1rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid #e9ecef;
    }

    th {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      font-weight: 600;
      font-size: 0.95rem;
      letter-spacing: 0.5px;
    }

    td {
      color: $text-primary;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .price-cell {
      font-weight: 600;
      color: #667eea;
      font-size: 1.1rem;
    }

    .highlighted {
      background: rgba(102, 126, 234, 0.05);

      td {
        font-weight: 600;
      }
    }

    tr:hover {
      background: rgba(102, 126, 234, 0.02);
    }
  }
}

.pricing-disclaimer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 193, 7, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  margin: 2rem;
  max-width: calc(100% - 4rem);

  .disclaimer-icon {
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    color: $text-primary;
    font-size: 0.95rem;

    strong {
      color: #ffc107;
    }
  }
}
</style>
