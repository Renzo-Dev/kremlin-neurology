// API сервис для взаимодействия с backend
export class ApiService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
  }

  // Базовый метод для HTTP запросов
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`
    console.log('🔍 ApiService.request - URL:', url)
    console.log('🔍 ApiService.request - options:', options)
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      console.log('🔍 ApiService.response - status:', response.status)
      console.log('🔍 ApiService.response - headers:', response.headers)
      
      // Проверяем, есть ли тело ответа
      let data
      const contentType = response.headers.get('content-type')
      console.log('🔍 ApiService.response - contentType:', contentType)
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
        console.log('🔍 ApiService.response - JSON data:', data)
      } else {
        console.log('🔍 ApiService.response - не JSON, statusText:', response.statusText)
        console.log('🔍 ApiService.response - response.ok:', response.ok)
        console.log('🔍 ApiService.response - response.status:', response.status)
        
        // Для скачивания файлов возвращаем blob
        if (endpoint.includes('download')) {
          const blob = await response.blob()
          return {
            success: response.ok,
            data: blob,
            message: response.ok ? 'Файл успешно загружен' : 'Ошибка загрузки файла'
          }
        }
        
        // Если ответ успешный, но не JSON, попробуем прочитать как JSON
        if (response.ok) {
          try {
            const jsonData = await response.json()
            console.log('🔍 ApiService.response - попытка JSON:', jsonData)
            data = jsonData
          } catch (jsonError) {
            console.log('🔍 ApiService.response - JSON parse error:', jsonError)
            data = { message: response.statusText || 'Неизвестный формат ответа' }
          }
        } else {
          data = { message: response.statusText || 'Ошибка сервера' }
        }
      }

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`)
      }

      return data
    } catch (error) {
      // Улучшенная обработка ошибок
      if (error.name === 'TypeError' && error.message.includes('NetworkError')) {
        throw new Error('Ошибка сети: проверьте подключение к интернету и доступность сервера')
      }
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('CORS ошибка: сервер не разрешает запросы с этого домена')
      }
      console.error('API request failed:', error)
      throw error
    }
  }

  // Аутентификация
  async login(credentials) {
    return this.request('/auth', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
  }



  // Получение каталогов
  async getPublicCatalog() {
    return this.request('/catalog/public', {
      method: 'GET',
    })
  }

  async getPrivateCatalog() {
    return this.request('/catalog/private', {
      method: 'GET',
    })
  }

  async getCatalogPaginated(page = 1, limit = 20, type = 'public', filters = {}) {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      type,
      ...(filters.search && { search: filters.search }),
      ...(filters.author && { author: filters.author }),
      ...(filters.fileType && { fileType: filters.fileType }),
    })
    
    return this.request(`/catalog/paginated?${params}`, {
      method: 'GET',
    })
  }

  // Поиск и фильтрация
  async searchFiles(query, filters = {}, type = 'public', page = 1, limit = 20) {
    // Используем пагинированный API с поиском
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      type,
      ...(query && { search: query }),
      ...(filters.author && { author: filters.author }),
      ...(filters.type && { fileType: filters.type }),
    })
    
    return this.request(`/catalog/paginated?${params}`, {
      method: 'GET',
    })
  }

  // Скачивание файлов
  async downloadFile(fileName, isPrivate = false) {
    const endpoint = isPrivate ? '/privateDownload' : '/download'
    
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify({ fileName }),
    })
  }

  // Информация о файле
  async getFileInfo(fileName) {
    return this.request('/file/info', {
      method: 'POST',
      body: JSON.stringify({ fileName }),
    })
  }

  // Статистика хранилища
  async getStorageStats() {
    return this.request('/storage/stats', {
      method: 'GET',
    })
  }

  // Управление файлами (для админов)
  async saveFile(fileData) {
    return this.request('/catalog', {
      method: 'POST',
      body: JSON.stringify(fileData),
    })
  }

  async deleteFile(fileName) {
    return this.request('/catalog', {
      method: 'DELETE',
      body: JSON.stringify({ fileName }),
    })
  }
}
