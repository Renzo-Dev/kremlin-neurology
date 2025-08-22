import { ref } from 'vue'

// Shared state для всех компонентов
const searchQuery = ref('')
const selectedAuthor = ref('')
const selectedType = ref('')
const sortBy = ref('uploadDate')
const sortOrder = ref('desc')

export function useFileSearch() {
  const clearFilters = () => {
    searchQuery.value = ''
    selectedAuthor.value = ''
    selectedType.value = ''
  }

  const searchFiles = files => {
    if (!files || !Array.isArray(files)) return []

    let filteredFiles = [...files]

    // Поиск по названию и автору
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase()
      filteredFiles = filteredFiles.filter(
        file =>
          file.title.toLowerCase().includes(query) ||
          file.authors.toLowerCase().includes(query)
      )
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

    // Сортировка
    filteredFiles.sort((a, b) => {
      let aValue = a[sortBy.value]
      let bValue = b[sortBy.value]

      if (sortBy.value === 'uploadDate') {
        aValue = new Date(aValue)
        bValue = new Date(bValue)
      } else if (sortBy.value === 'fileSize') {
        aValue = parseInt(aValue)
        bValue = parseInt(bValue)
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
    return [...new Set(files.map(file => file.authors))].sort()
  }

  const getUniqueTypes = files => {
    if (!files || !Array.isArray(files)) return []
    return [...new Set(files.map(file => file.type))].sort()
  }

  const toggleSortOrder = () => {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  }

  return {
    searchQuery,
    selectedAuthor,
    selectedType,
    sortBy,
    sortOrder,
    clearFilters,
    searchFiles,
    getUniqueAuthors,
    getUniqueTypes,
    toggleSortOrder,
  }
}
