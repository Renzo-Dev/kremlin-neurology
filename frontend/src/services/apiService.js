// API сервис для взаимодействия с backend
export class ApiService {
  constructor() {
    // this.baseUrl = 'http://localhost:5000/api'
    this.baseUrl = `${window.location.origin}/api`
  }

  // Базовый метод для HTTP запросов
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`

    // Определяем, нужно ли устанавливать Content-Type
    const shouldSetContentType =
      !options.body || !(options.body instanceof FormData)

    const config = {
      credentials: 'include', // Добавляем для передачи cookies
      headers: {
        ...(shouldSetContentType && { 'Content-Type': 'application/json' }),
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      // Проверяем, есть ли тело ответа
      let data
      const contentType = response.headers.get('content-type')

      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      } else {
        // Для скачивания файлов возвращаем blob
        if (endpoint.includes('download')) {
          const blob = await response.blob()
          return {
            success: response.ok,
            data: blob,
            message: response.ok
              ? 'Файл успешно загружен'
              : 'Ошибка загрузки файла',
          }
        }

        // Если ответ успешный, но не JSON, попробуем прочитать как JSON
        if (response.ok) {
          try {
            const jsonData = await response.json()
            data = jsonData
          } catch (jsonError) {
            data = {
              message: response.statusText || 'Неизвестный формат ответа',
            }
          }
        } else {
          data = { message: response.statusText || 'Ошибка сервера' }
        }
      }

      // Проверяем, есть ли ошибки валидации в ответе
      if (data.errors && typeof data.errors === 'object') {
        // Создаем ошибку с детальной информацией о валидации
        const error = new Error('Ошибка валидации данных')
        error.status = response.status
        error.data = data
        error.validationErrors = data.errors
        throw error
      }

      if (!response.ok) {
        // Создаем ошибку с полной информацией
        const error = new Error(
          data.message || data.error || `HTTP error! status: ${response.status}`
        )
        error.status = response.status
        error.data = data
        error.originalMessage = data.message
        error.originalError = data.error
        throw error
      }

      return data
    } catch (error) {
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

  async getCategories() {
    return this.request('/catalog/categories', {
      method: 'GET',
    })
  }

  async getCatalogPaginated(
    page = 1,
    limit = 20,
    type = 'public',
    filters = {}
  ) {
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

  /**
   * Получает каталог с полной фильтрацией, сортировкой, группировкой и пагинацией
   * @param {Object} params - все параметры в одном объекте
   */
  async getCatalogWithFilters(params) {
    return this.request('/catalog/filters', {
      method: 'POST',
      body: JSON.stringify(params),
    })
  }

  // Поиск и фильтрация
  async searchFiles(
    query,
    filters = {},
    type = 'public',
    page = 1,
    limit = 20
  ) {
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

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName }),
        credentials: 'include', // Включаем cookies для аутентификации
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        )
      }

      // Получаем имя файла из заголовка или используем переданное
      const contentDisposition = response.headers.get('Content-Disposition')
      const downloadFileName = contentDisposition
        ? contentDisposition.split('filename=')[1]?.replace(/"/g, '')
        : fileName

      // Создаем blob из ответа
      const blob = await response.blob()

      // Создаем ссылку для скачивания
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = downloadFileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Освобождаем память
      window.URL.revokeObjectURL(url)

      return { success: true, message: 'File downloaded successfully' }
    } catch (error) {
      throw error
    }
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

  // Загрузка нового файла
  async uploadFile(fileData) {
    // Создаем FormData для отправки файла
    const formData = new FormData()

    // Добавляем файл (обязательно)
    if (fileData.file) {
      formData.append('file', fileData.file)
    } else {
      throw new Error('File is required for upload')
    }

    // Добавляем обязательные данные
    formData.append('title', fileData.title)
    formData.append('authors', fileData.authors)

    // Добавляем необязательные данные
    if (fileData.description && fileData.description.trim()) {
      formData.append('description', fileData.description.trim())
    }

    // Добавляем категорию
    if (fileData.category && fileData.category.trim()) {
      formData.append('category', fileData.category.trim())
    }

    return this.request('/catalog', {
      method: 'POST',
      body: formData,
    })
  }

  // Обновление существующего файла
  async updateFile(fileData) {
    // Создаем query string как в deleteFile
    const params = new URLSearchParams({
      fileName: fileData.fileName,
      title: fileData.title,
      authors: fileData.authors,
      category: fileData.category || '',
      description: fileData.description || '',
    })

    return this.request(`/catalog/update?${params}`, {
      method: 'PUT',
    })
  }

  async deleteFile(fileName) {
    return this.request(`/catalog?fileName=${encodeURIComponent(fileName)}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
      },
    })
  }
}
