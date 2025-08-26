import { ref } from 'vue'

// Shared state для всех компонентов
const searchQuery = ref('')
const selectedAuthor = ref('')
const selectedType = ref('')
const selectedCategory = ref('')
const sortBy = ref('uploadDate')
const sortOrder = ref('desc')

// Debounce для поиска
let searchTimeout = null
const searchDebounceDelay = 300

// Функция для парсинга размера файла
const parseFileSize = size => {
  // Если size уже число, возвращаем как есть
  if (typeof size === 'number') return size

  // Если size null, undefined или пустая строка, возвращаем 0
  if (!size || typeof size !== 'string') return 0

  // Парсим строку размера (например: "1.5 MB", "500 KB", "2.1 GB")
  const match = size.toString().match(/^([\d.]+)\s*([KMGT]?B)$/i)
  if (!match) return 0

  const value = parseFloat(match[1])
  const unit = match[2].toUpperCase()

  const multipliers = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
  }

  return value * (multipliers[unit] || 1)
}

export function useFileSearch() {
  const clearFilters = () => {
    searchQuery.value = ''
    selectedAuthor.value = ''
    selectedType.value = ''
    selectedCategory.value = ''
  }

  // Debounced поиск
  const debouncedSearch = callback => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    searchTimeout = setTimeout(() => {
      callback()
    }, searchDebounceDelay)
  }

  const searchFiles = files => {
    if (!files || !Array.isArray(files)) {
      return []
    }

    let filteredFiles = [...files]

    // Поиск по названию, автору и описанию
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase().trim()
      filteredFiles = filteredFiles.filter(file => {
        const title = (file.title || '').toLowerCase()
        const authors = (file.authors || '').toLowerCase()
        const description = (file.description || '').toLowerCase()

        return (
          title.includes(query) ||
          authors.includes(query) ||
          description.includes(query)
        )
      })
    }

    // Фильтр по автору
    if (selectedAuthor.value) {
      filteredFiles = filteredFiles.filter(
        file => file.authors === selectedAuthor.value
      )
    }

    // Фильтр по типу файла
    if (selectedType.value) {
      filteredFiles = filteredFiles.filter(
        file => file.type === selectedType.value
      )
    }

    // Фильтр по категории
    if (selectedCategory.value) {
      filteredFiles = filteredFiles.filter(
        file => file.category === selectedCategory.value
      )
    }

    // Сортировка с улучшенной обработкой
    filteredFiles.sort((a, b) => {
      let aValue = a[sortBy.value]
      let bValue = b[sortBy.value]

      // Обработка пустых значений
      if (aValue === null || aValue === undefined) aValue = ''
      if (bValue === null || bValue === undefined) bValue = ''

      if (sortBy.value === 'uploadDate') {
        aValue = new Date(aValue || 0)
        bValue = new Date(bValue || 0)
      } else if (sortBy.value === 'fileSize') {
        aValue = parseFileSize(aValue)
        bValue = parseFileSize(bValue)
      } else if (sortBy.value === 'title' || sortBy.value === 'authors') {
        aValue = String(aValue).toLowerCase()
        bValue = String(bValue).toLowerCase()
      }

      if (sortOrder.value === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    return filteredFiles
  }

  const getUniqueAuthors = files => {
    if (!files || !Array.isArray(files)) return []
    return [...new Set(files.map(file => file.authors).filter(Boolean))].sort()
  }

  const getUniqueTypes = files => {
    if (!files || !Array.isArray(files)) return []
    return [...new Set(files.map(file => file.type).filter(Boolean))].sort()
  }

  const getUniqueCategories = files => {
    if (!files || !Array.isArray(files)) return []
    return [...new Set(files.map(file => file.category).filter(Boolean))].sort()
  }

  const toggleSortOrder = () => {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  }

  return {
    searchQuery,
    selectedAuthor,
    selectedType,
    selectedCategory,
    sortBy,
    sortOrder,
    clearFilters,
    searchFiles,
    getUniqueAuthors,
    getUniqueTypes,
    getUniqueCategories,
    toggleSortOrder,
    debouncedSearch,
  }
}
