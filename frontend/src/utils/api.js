// API конфигурация
export const API_CONFIG = {
  // Переключение между мок и реальным API
  USE_MOCK:
    process.env.NODE_ENV === 'development' ||
    process.env.VITE_USE_MOCK === 'true',

  // Базовые URL для API
  BASE_URL: process.env.VITE_API_BASE_URL || '',

  // Эндпоинты
  ENDPOINTS: {
    CATALOG_PUBLIC: '/api/catalog/public',
    CATALOG_PRIVATE: '/api/catalog/private',
    CATALOG_CATEGORIES: '/api/catalog/categories',
    DOWNLOAD: '/api/download',
    PRIVATE_DOWNLOAD: '/api/privateDownload',
    VERIFY_PASSWORD: '/api/library/verify-password',
    SEARCH: '/api/library/search',
  },

  // Таймауты
  TIMEOUT: 10000,

  // Заголовки по умолчанию
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  },
}

// Проверка доступности API
export const isApiAvailable = () => {
  return !API_CONFIG.USE_MOCK && API_CONFIG.BASE_URL
}
