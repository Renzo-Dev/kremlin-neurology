<template>
  <div class="aspirantura-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-background">
        <div class="hero-pattern"></div>
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">Научная подготовка</div>
          <h1 class="page-title">
            <span class="title-line">Аспирантура</span>
            <span class="title-accent">по неврологии</span>
          </h1>
          <p class="page-subtitle">
            Научно-исследовательская подготовка по специальности "Неврология"
            для получения ученой степени кандидата наук
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">3-4</div>
              <div class="stat-label">года обучения</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">66</div>
              <div class="stat-label">тыс. ₽/год</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">14.01.11</div>
              <div class="stat-label">специальность</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <div class="container">
        <!-- Program Info -->
        <div class="section program-info first-section">
          <div class="section-header">
            <h2>Программа аспирантуры</h2>
            <p class="section-description">
              Программа подготовки научно-педагогических кадров в аспирантуре по
              специальности 14.01.11 - "Неврология"
            </p>
          </div>

          <div class="program-details">
            <div class="detail-card">
              <div class="card-icon">🎓</div>
              <h3>Форма обучения</h3>
              <p>Очная и заочная формы</p>
              <div class="card-accent"></div>
            </div>

            <div class="detail-card">
              <div class="card-icon">⏱️</div>
              <h3>Длительность</h3>
              <p>3 года (очная), 4 года (заочная)</p>
              <div class="card-accent"></div>
            </div>

            <div class="detail-card featured">
              <div class="card-icon">💰</div>
              <h3>Стоимость обучения</h3>
              <p class="price">66 000 ₽</p>
              <div class="card-accent"></div>
            </div>

            <div class="detail-card">
              <div class="card-icon">🏥</div>
              <h3>Место проведения</h3>
              <p>ГКБ №51 ДЗМ</p>
              <div class="card-accent"></div>
            </div>
          </div>
        </div>

        <!-- Pricing Section -->

        <!-- Pricing Section -->
        <div class="section pricing-section">
          <div class="section-header">
            <h2>Стоимость обучения</h2>
            <p class="section-description">
              Базовые цены на 2013 год по всем специальностям аспирантуры
            </p>
          </div>

          <div class="pricing-accordion">
            <div class="accordion-item">
              <div class="accordion-header" @click="togglePricingTable">
                <div class="header-content">
                  <h3>Стоимость обучения по специальностям аспирантуры</h3>
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
                  Стоимость обучения за один год в рублях (2013 год)
                </div>

                <div class="pricing-table-wrapper">
                  <table class="pricing-table">
                    <thead>
                      <tr>
                        <th>№ п/п</th>
                        <th>СПЕЦИАЛЬНОСТЬ</th>
                        <th>СТОИМОСТЬ ОБУЧЕНИЯ за один год в рублях</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>внутренние болезни</td>
                        <td class="price-cell">62 000</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>кардиология</td>
                        <td class="price-cell">66 000</td>
                      </tr>
                      <tr class="highlighted">
                        <td>3.</td>
                        <td><strong>нервные болезни</strong></td>
                        <td class="price-cell">66 000</td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>
                          восстановительная медицина, ЛФК и спортивная медицина,
                          курортология и физиотерапия
                        </td>
                        <td class="price-cell">62 000</td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>хирургия</td>
                        <td class="price-cell">85 000</td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>урология</td>
                        <td class="price-cell">85 000</td>
                      </tr>
                      <tr>
                        <td>7.</td>
                        <td>анестезиология и реаниматология</td>
                        <td class="price-cell">74 000</td>
                      </tr>
                      <tr>
                        <td>8.</td>
                        <td>травматология и ортопедия</td>
                        <td class="price-cell">74 000</td>
                      </tr>
                      <tr>
                        <td>9.</td>
                        <td>болезни уха, горла и носа</td>
                        <td class="price-cell">74 000</td>
                      </tr>
                      <tr>
                        <td>10.</td>
                        <td>клиническая лабораторная диагностика</td>
                        <td class="price-cell">66 000</td>
                      </tr>
                      <tr>
                        <td>11.</td>
                        <td>лучевая диагностика, лучевая терапия</td>
                        <td class="price-cell">85 000</td>
                      </tr>
                      <tr>
                        <td>12.</td>
                        <td>пульмонология</td>
                        <td class="price-cell">62 000</td>
                      </tr>
                      <tr>
                        <td>13.</td>
                        <td>кожные и венерические болезни</td>
                        <td class="price-cell">90 000</td>
                      </tr>
                      <tr>
                        <td>14.</td>
                        <td>стоматология</td>
                        <td class="price-cell">130 000</td>
                      </tr>
                      <tr>
                        <td>15.</td>
                        <td>общественное здоровье и здравоохранение</td>
                        <td class="price-cell">100 000</td>
                      </tr>
                      <tr class="special">
                        <td>16.</td>
                        <td>
                          соискатели учёной степени кандидатов наук (не
                          являющиеся сотрудниками учреждений УД Президента РФ)
                        </td>
                        <td class="price-cell">
                          50% от стоимости обучения в аспирантуре
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="pricing-disclaimer">
                  <div class="disclaimer-icon">⚠️</div>
                  <p>
                    <strong>Примечание:</strong> Стоимость обучения указана на
                    2013 год. Актуальную стоимость уточняйте по указанным
                    контактам.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contacts Section -->
        <div class="section contacts-section">
          <div class="section-header">
            <h2>Контакты для поступления</h2>
            <p class="section-description">
              Свяжитесь с нами для получения подробной информации о поступлении
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
  name: 'AspiranturaPage',
  metaInfo: {
    title: 'Аспирантура - Кафедра неврологии',
    meta: [
      {
        name: 'description',
        content:
          'Программа аспирантуры по специальности "Неврология" для подготовки научно-педагогических кадров. Очная и заочная формы обучения.',
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
$primary-color: #667eea;
$secondary-color: #764ba2;
$accent-color: #f093fb;
$success-color: #4facfe;
$warning-color: #43e97b;
$text-primary: #2c3e50;
$text-secondary: #6c757d;
$text-light: #ffffff;
$border-radius: 16px;
$shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
$shadow-md: 0 8px 25px rgba(0, 0, 0, 0.15);
$shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.2);
$transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

// Mixins
@mixin glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@mixin card-hover {
  transform: translateY(-8px);
  box-shadow: $shadow-lg;
}

@mixin responsive-grid($columns, $gap: 2rem) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}

// Base styles
.aspirantura-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

// Первая секция с дополнительным отступом
.first-section {
  margin-top: 40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

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
      background: linear-gradient(135deg, $primary-color, $secondary-color);
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

// Hero Section
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      $primary-color 0%,
      $secondary-color 100%
    );

    .hero-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        radial-gradient(
          circle at 25% 25%,
          rgba(255, 255, 255, 0.1) 0%,
          transparent 50%
        ),
        radial-gradient(
          circle at 75% 75%,
          rgba(255, 255, 255, 0.1) 0%,
          transparent 50%
        );
      animation: float 20s ease-in-out infinite;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.3) 0%,
        transparent 100%
      );
    }
  }

  .hero-content {
    position: relative;
    z-index: 0;
    text-align: center;
    color: $text-light;

    .hero-badge {
      display: inline-block;
      padding: 0.5rem 1.5rem;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 2rem;
      backdrop-filter: blur(10px);
    }

    .page-title {
      font-size: clamp(3rem, 8vw, 5rem);
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.1;

      .title-line {
        display: block;
        margin-bottom: 0.5rem;
      }

      .title-accent {
        display: block;
        font-size: 0.7em;
        opacity: 0.9;
        font-weight: 300;
      }
    }

    .page-subtitle {
      font-size: clamp(1.1rem, 3vw, 1.4rem);
      opacity: 0.9;
      max-width: 700px;
      margin: 0 auto 3rem;
      line-height: 1.6;
    }

    .hero-stats {
      @include responsive-grid(3, 2rem);
      max-width: 600px;
      margin: 0 auto;

      .stat-item {
        text-align: center;

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: $accent-color;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      }
    }
  }
}

// Program Details
.program-details {
  @include responsive-grid(auto-fit, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  .detail-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: $border-radius;
    text-align: center;
    box-shadow: $shadow-sm;
    transition: $transition;
    position: relative;
    overflow: hidden;

    &:hover {
      @include card-hover;
    }

    &.featured {
      background: linear-gradient(135deg, $success-color, $warning-color);
      color: white;

      .card-icon {
        background: rgba(255, 255, 255, 0.2);
        color: white;
      }

      h3,
      p {
        color: white;
      }

      .price {
        font-size: 2rem;
        font-weight: 800;
      }
    }

    .card-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, $primary-color, $secondary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin: 0 auto 1.5rem;
      color: white;
    }

    h3 {
      font-size: 1.3rem;
      color: $text-primary;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      color: $text-secondary;
      font-size: 1.1rem;
      font-weight: 500;

      &.price {
        color: $success-color;
        font-size: 1.8rem;
        font-weight: 700;
      }
    }

    .card-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, $primary-color, $secondary-color);
    }
  }
}

// Pricing Section

// Pricing Section
.pricing-accordion {
  .accordion-item {
    background: white;
    border-radius: $border-radius;
    box-shadow: $shadow-sm;
    overflow: hidden;
    transition: $transition;
    border: 1px solid rgba(0, 0, 0, 0.05);

    &:hover {
      box-shadow: $shadow-md;
    }

    // Улучшения для мобильных устройств
    @media (max-width: 768px) {
      border-radius: 12px;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .accordion-header {
      padding: 2rem;
      cursor: pointer;
      background: linear-gradient(135deg, #f8f9fa, #e9ecef);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      transition: $transition;
      display: flex;
      align-items: center;
      gap: 1rem;

      &:hover {
        background: linear-gradient(135deg, #e9ecef, #dee2e6);
      }

      &:active {
        background: linear-gradient(135deg, #dee2e6, #ced4da);
      }

      .header-content {
        flex: 1;
        min-width: 0; // Для корректного переноса текста

        h3 {
          font-size: 1.5rem;
          color: $text-primary;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
          line-height: 1.3;
        }

        p {
          color: $text-secondary;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.4;
        }
      }

      .accordion-icon {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $primary-color;
        transition: $transition;

        &.active {
          transform: rotate(180deg);
          background: rgba(102, 126, 234, 0.2);
        }

        svg {
          transition: $transition;
          width: 20px;
          height: 20px;
        }
      }
    }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: $transition;
      padding: 0 2rem;

      &.active {
        max-height: 2000px;
        padding: 2rem;
      }

      .pricing-note {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(102, 126, 234, 0.1);
        padding: 1rem 1.5rem;
        border-radius: 50px;
        margin-bottom: 2rem;
        font-size: 1rem;
        color: $text-primary;

        .note-icon {
          margin-right: 0.5rem;
          font-size: 1.1rem;
        }

        // Мобильная адаптация
        @media (max-width: 768px) {
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
      }

      .pricing-table-wrapper {
        overflow-x: auto;
        margin-bottom: 2rem;
        border-radius: $border-radius;
        box-shadow: $shadow-sm;

        // Улучшения для мобильных устройств
        @media (max-width: 768px) {
          border-radius: 8px;
          margin-bottom: 1.5rem;

          // Добавляем индикатор прокрутки
          &::-webkit-scrollbar {
            height: 6px;
          }

          &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }

          &::-webkit-scrollbar-thumb {
            background: $primary-color;
            border-radius: 3px;
          }
        }

        .pricing-table {
          width: 100%;
          border-collapse: collapse;
          background: white;

          th,
          td {
            padding: 1rem 1.5rem;
            text-align: left;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          th {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            font-weight: 600;
            color: $text-primary;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          td {
            color: $text-secondary;
            font-size: 0.95rem;
          }

          .price-cell {
            font-weight: 700;
            color: $success-color;
            font-size: 1.1rem;
          }

          .highlighted {
            background: linear-gradient(
              135deg,
              rgba(102, 126, 234, 0.1),
              rgba(118, 75, 162, 0.1)
            );
            border-left: 4px solid $primary-color;

            td {
              font-weight: 600;
              color: $text-primary;
            }
          }

          .special {
            background: linear-gradient(
              135deg,
              rgba(255, 193, 7, 0.1),
              rgba(255, 152, 0, 0.1)
            );
            border-left: 4px solid #ff9800;

            td {
              font-weight: 600;
              color: $text-primary;
            }
          }

          tr:hover {
            background: rgba(102, 126, 234, 0.02);
          }

          // Мобильная адаптация таблицы
          @media (max-width: 768px) {
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
      }

      .pricing-disclaimer {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 193, 7, 0.1);
        padding: 1.5rem;
        border-radius: $border-radius;
        border: 1px solid rgba(255, 193, 7, 0.2);

        .disclaimer-icon {
          margin-right: 1rem;
          font-size: 1.5rem;
        }

        p {
          margin: 0;
          color: $text-primary;
          font-size: 0.95rem;

          strong {
            color: #f57c00;
          }
        }

        // Мобильная адаптация
        @media (max-width: 768px) {
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
      }
    }
  }
}

.pricing-disclaimer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 193, 7, 0.1);
  padding: 1.5rem;
  border-radius: $border-radius;
  border: 1px solid rgba(255, 193, 7, 0.2);

  .disclaimer-icon {
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    color: $text-primary;
    font-size: 0.95rem;

    strong {
      color: #f57c00;
    }
  }
}

.contact-note {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 126, 234, 0.1);
  padding: 1.5rem 2rem;
  border-radius: $border-radius;
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
      color: $primary-color;
    }
  }
}

// Extended Contact Info
.contact-info-extended {
  margin: 3rem 0;

  .contact-person {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: $border-radius;
    text-align: center;
    box-shadow: $shadow-sm;
    border: 1px solid rgba(0, 0, 0, 0.05);
    max-width: 600px;
    margin: 0 auto;

    .contact-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, $primary-color, $secondary-color);
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
        color: $primary-color;
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
    background: linear-gradient(135deg, $primary-color, $secondary-color);
    color: white;
    padding: 1rem 2rem;
    border-radius: $border-radius;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: $shadow-sm;
    transition: $transition;
    border: none;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-md;
      background: linear-gradient(
        135deg,
        color.adjust($primary-color, $lightness: -10%),
        color.adjust($secondary-color, $lightness: -10%)
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
    background: linear-gradient(135deg, $primary-color, $secondary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .document-item {
    background: white;
    padding: 2rem;
    border-radius: $border-radius;
    box-shadow: $shadow-sm;
    border: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    transition: $transition;

    &:hover {
      box-shadow: $shadow-md;
      transform: translateY(-2px);
    }

    &:last-child {
      margin-bottom: 0;
    }

    .document-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, $success-color, $warning-color);
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
          color: $success-color;
        }
      }
    }
  }
}

// Animations
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

// Content Section
.content-section {
  padding: 120px 0 80px 0;
  background: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, transparent, white);
  }
}

// Responsive Design
@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 800px;
  }

  .section {
    margin-bottom: 60px;
  }

  .hero-section {
    min-height: 80vh;

    .hero-stats {
      @include responsive-grid(3, 1rem);

      .stat-item .stat-number {
        font-size: 2rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .section {
    margin-bottom: 50px;
  }

  .first-section {
    margin-top: 30px;
  }

  .section-header {
    margin-bottom: 40px;

    h2 {
      font-size: clamp(1.6rem, 4vw, 2.2rem);
      padding: 0 0.5rem;
      margin-bottom: 1.5rem;
    }

    .section-description {
      font-size: 1.1rem;
      padding: 0 1rem;
    }
  }

  .hero-section {
    min-height: 70vh;
    padding: 60px 0;

    .hero-content {
      .page-title {
        font-size: clamp(2.5rem, 8vw, 3.5rem);
      }

      .hero-stats {
        @include responsive-grid(1, 1.5rem);
        max-width: 300px;

        .stat-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          .stat-number {
            font-size: 2rem;
            margin: 0;
          }
        }
      }
    }
  }

  .program-details {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .curriculum-card {
    padding: 2rem 1.5rem;
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

  // Адаптивный аккордеон для мобильных устройств
  .accordion-header {
    padding: 1.5rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .header-content {
      width: 100%;

      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    .accordion-icon {
      align-self: flex-end;
      width: 36px;
      height: 36px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  .accordion-content {
    padding: 1rem !important;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .first-section {
    margin-top: 20px;
  }

  .hero-section {
    .hero-content {
      .page-title {
        font-size: clamp(2rem, 8vw, 2.5rem);
      }

      .page-subtitle {
        font-size: 1rem;
      }
    }
  }

  .section .section-header h2 {
    font-size: clamp(1.5rem, 5vw, 2rem);
    padding: 0 0.75rem;
    margin-bottom: 2rem;
  }

  .section .section-description {
    font-size: 1rem;
    padding: 0 1.5rem;
  }

  .detail-card {
    padding: 1.5rem 1rem;
  }

  .pricing-table-wrapper {
    .pricing-table {
      th,
      td {
        padding: 0.5rem 0.75rem;
        font-size: 0.8rem;
      }

      th {
        font-size: 0.75rem;
      }

      .price-cell {
        font-size: 0.9rem;
      }
    }
  }

  .pricing-disclaimer {
    padding: 0.75rem;

    .disclaimer-icon {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  .contact-info-extended {
    .contact-person {
      padding: 2rem 1.5rem;

      h4 {
        font-size: 1.2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  .documents-section {
    h3 {
      font-size: 1.6rem;
    }

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

  // Дополнительные улучшения для очень маленьких экранов
  .pricing-accordion {
    .accordion-item {
      .accordion-header {
        padding: 1rem 0.75rem;

        .header-content {
          h3 {
            font-size: 1.2rem;
          }

          p {
            font-size: 0.85rem;
          }
        }

        .accordion-icon {
          width: 32px;
          height: 32px;

          svg {
            width: 16px;
            height: 16px;
          }
        }
      }

      .accordion-content {
        padding: 0.75rem !important;

        .pricing-note {
          padding: 0.75rem;
          font-size: 0.9rem;

          .note-icon {
            font-size: 1.1rem;
          }
        }

        .pricing-table-wrapper {
          .pricing-table {
            th,
            td {
              padding: 0.5rem 0.75rem;
              font-size: 0.8rem;
            }

            th {
              font-size: 0.75rem;
            }

            .price-cell {
              font-size: 0.9rem;
            }
          }
        }

        .pricing-disclaimer {
          padding: 0.75rem;

          .disclaimer-icon {
            font-size: 1.2rem;
          }

          p {
            font-size: 0.85rem;
          }
        }
      }
    }
  }
}
</style>
