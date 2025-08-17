<template>
  <section id="transport-info" class="transport-info-section">
    <div class="container">
      <div class="section-intro">
        <span class="section-tag">Транспорт</span>
        <h2 class="section-title">
          Как добраться<br />
          <span class="title-accent">на метро</span>
        </h2>
      </div>

      <div class="transport-grid">
        <div class="transport-card">
          <div class="transport-header">
            <div class="transport-icon metro">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <h3>Станция метро "Молодежная"</h3>
            <p class="transport-description">Выход из головного вагона</p>
          </div>
          <div class="transport-details">
            <div class="route-item">
              <div class="route-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="1" y="3" width="15" height="13" />
                  <circle cx="7" cy="7" r="1" />
                  <polygon points="7,11 9,13 13,11 21,8 17,16 7,16" />
                </svg>
              </div>
              <div class="route-info">
                <h4>Автобус 251</h4>
                <p>До 2-й остановки (учебные комнаты в ЦКБП)</p>
                <p>
                  До 3-й остановки (учебная комната в Симуляционном центре ЦГМА)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="transport-card">
          <div class="transport-header">
            <div class="transport-icon metro">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <h3>Станция метро "Крылатское"</h3>
            <p class="transport-description">Выход из последнего вагона</p>
          </div>
          <div class="transport-details">
            <div class="route-item">
              <div class="route-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div class="route-info">
                <h4>Пешком</h4>
                <p>См. схему прохода</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="entrance-info">
        <div class="entrance-header">
          <div class="entrance-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10,17 15,12 10,7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </div>
          <h3>Вход в учреждения</h3>
        </div>

        <div class="entrance-grid">
          <div class="entrance-item">
            <div class="entrance-badge">ЦКБП</div>
            <p>Через 2-ю проходную ЦКБП</p>
          </div>
          <div class="entrance-item">
            <div class="entrance-badge">ЦГМА</div>
            <p>Через проходную ЦГМА</p>
          </div>
        </div>

        <div class="entrance-notice">
          <div class="notice-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div class="notice-content">
            <h4>Важно помнить</h4>
            <p>
              Если у Вас нет пропуска – не забудьте заказать и взять с собой
              паспорт для прохода.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TransportInfo',
}
</script>

<style lang="scss" scoped>
@use './TransportInfo.scss';
</style>
