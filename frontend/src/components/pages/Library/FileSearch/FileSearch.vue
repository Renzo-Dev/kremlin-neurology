<template>
  <div class="file-search">
    <div class="search-controls">
      <div class="search-input-wrapper">
        <svg
          class="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Поиск по названию или автору..."
          @input="handleSearch"
        />
        <div v-if="isSearching" class="search-loading">
          <div class="search-spinner"></div>
        </div>
        <button
          v-if="searchQuery"
          class="clear-search"
          @click="clearSearch"
          aria-label="Очистить поиск"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div class="search-filters">
        <div class="filter-group">
          <label for="author-filter" class="filter-label">Автор</label>
          <select
            id="author-filter"
            v-model="selectedAuthor"
            class="filter-select"
            @change="handleFilterChange"
          >
            <option value="">Все авторы</option>
            <option
              v-for="author in uniqueAuthors"
              :key="author"
              :value="author"
            >
              {{ author }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label for="type-filter" class="filter-label">Тип файла</label>
          <select
            id="type-filter"
            v-model="selectedType"
            class="filter-select"
            @change="handleFilterChange"
          >
            <option value="">Все типы</option>
            <option v-for="type in uniqueTypes" :key="type" :value="type">
              {{ type.toUpperCase() }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label for="sort-filter" class="filter-label">Сортировка</label>
          <div class="sort-controls">
            <select
              id="sort-filter"
              v-model="sortBy"
              class="filter-select"
              @change="handleFilterChange"
            >
              <option value="uploadDate">По дате</option>
              <option value="title">По названию</option>
              <option value="authors">По автору</option>
              <option value="fileSize">По размеру</option>
            </select>
            <button
              class="sort-toggle"
              @click="toggleSortOrder"
              :title="sortOrder === 'asc' ? 'По возрастанию' : 'По убыванию'"
            >
              <svg
                class="sort-icon"
                :class="{ 'sort-icon--reversed': sortOrder === 'asc' }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M7 13l5 5 5-5" />
                <path d="M7 6l5 5 5-5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button
        v-if="hasActiveFilters"
        class="clear-filters"
        @click="clearAllFilters"
      >
        <svg
          class="clear-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
        Очистить фильтры
      </button>
    </div>

    <div v-if="searchQuery || hasActiveFilters" class="search-results-info">
      <span class="results-count">
        Найдено файлов: {{ filteredFilesCount }}
      </span>
    </div>
  </div>
</template>

<script>
import { useFileSearch } from '@/composables/library/useFileSearch'
import { computed } from 'vue'

export default {
  name: 'FileSearch',
  props: {
    files: {
      type: Array,
      default: () => [],
    },
    filteredFilesCount: {
      type: Number,
      default: 0,
    },
    isSearching: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['search', 'filter'],
  setup(props, { emit }) {
    const {
      searchQuery,
      selectedAuthor,
      selectedType,
      sortBy,
      sortOrder,
      clearFilters,
      getUniqueAuthors,
      getUniqueTypes,
      toggleSortOrder,
      debouncedSearch,
    } = useFileSearch()

    const uniqueAuthors = computed(() => getUniqueAuthors(props.files))
    const uniqueTypes = computed(() => getUniqueTypes(props.files))

    const hasActiveFilters = computed(
      () => searchQuery.value || selectedAuthor.value || selectedType.value
    )

    const handleSearch = () => {
      // Используем debounced поиск для input
      debouncedSearch(() => {
        emit('search')
      })
    }

    const handleFilterChange = () => {
      // Фильтры применяются сразу без debounce
      emit('filter')
    }

    const clearSearch = () => {
      searchQuery.value = ''
      // При очистке поиска применяем сразу
      emit('search')
    }

    const clearAllFilters = () => {
      clearFilters()
      emit('filter')
    }

    return {
      searchQuery,
      selectedAuthor,
      selectedType,
      sortBy,
      sortOrder,
      uniqueAuthors,
      uniqueTypes,
      hasActiveFilters,
      handleSearch,
      handleFilterChange,
      clearSearch,
      clearAllFilters,
      toggleSortOrder,
    }
  },
}
</script>

<style lang="scss" scoped>
@use './FileSearch.scss';
</style>
