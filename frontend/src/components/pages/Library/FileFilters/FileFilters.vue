<template>
  <div class="file-filters">
    <div class="filters-header">
      <h3 class="filters-title">Фильтры и сортировка</h3>
      <button
        class="clear-filters-btn"
        @click="clearFilters"
        :disabled="!hasActiveFilters"
      >
        Очистить фильтры
      </button>
    </div>

    <div class="filters-content">
      <!-- Поиск -->
      <div class="filter-group">
        <label class="filter-label">Поиск</label>
        <input
          v-model="filters.search"
          type="text"
          class="filter-input"
          placeholder="Поиск по названию, авторам, описанию..."
          @input="handleSearchInput"
        />
      </div>

      <!-- Автор -->
      <div class="filter-group">
        <label class="filter-label">Автор</label>
        <input
          v-model="filters.author"
          type="text"
          class="filter-input"
          placeholder="Введите имя автора..."
          @input="handleFilterChange"
        />
      </div>

      <!-- Тип файла -->
      <div class="filter-group">
        <label class="filter-label">Тип файла</label>
        <select
          v-model="filters.fileType"
          class="filter-select"
          @change="handleFilterChange"
        >
          <option value="">Все типы</option>
          <option value="pdf">PDF</option>
          <option value="doc">DOC</option>
          <option value="docx">DOCX</option>
          <option value="txt">TXT</option>
        </select>
      </div>

      <!-- Категория (только для приватного режима) -->
      <div v-if="isPrivate" class="filter-group">
        <label class="filter-label">Категория</label>
        <select
          v-model="filters.category"
          class="filter-select"
          :class="{ loading: isLoadingCategories }"
          @change="handleFilterChange"
          :disabled="isLoadingCategories"
        >
          <option value="">Все категории</option>
          <option v-if="isLoadingCategories" value="" disabled>
            Загрузка категорий...
          </option>
          <option v-else-if="categoriesError" value="" disabled>
            Ошибка загрузки
          </option>
          <option
            v-else
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <div v-if="categoriesError" class="filter-error">
          {{ categoriesError }}
          <button @click="loadCategories" class="retry-btn">Повторить</button>
        </div>
      </div>

      <!-- Сортировка -->
      <div class="filter-group">
        <label class="filter-label">Сортировка</label>
        <div class="sorting-controls">
          <select
            v-model="sorting.field"
            class="filter-select"
            @change="handleSortingChange"
          >
            <option value="uploadDate">По дате</option>
            <option value="title">По названию</option>
            <option value="authors">По автору</option>
            <option value="fileSize">По размеру</option>
          </select>
          <button
            class="sort-direction-btn"
            @click="toggleSortDirection"
            :title="
              sorting.direction === 'asc' ? 'По возрастанию' : 'По убыванию'
            "
          >
            <svg
              class="sort-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path v-if="sorting.direction === 'asc'" d="M7 14l5-5 5 5" />
              <path v-else d="M7 10l5 5 5-5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService } from '@/services/apiService'
import { computed, onMounted, ref, watch } from 'vue'

export default {
  name: 'FileFilters',
  props: {
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['filters-change'],
  setup(props, { emit }) {
    const apiService = new ApiService()

    // Состояние фильтров
    const filters = ref({
      search: '',
      author: '',
      fileType: '',
      category: '',
      minSize: '',
      maxSize: '',
      dateFrom: '',
      dateTo: '',
    })

    // Состояние сортировки
    const sorting = ref({
      field: 'uploadDate',
      direction: 'desc',
    })

    // Состояние категорий
    const categories = ref([])
    const isLoadingCategories = ref(false)
    const categoriesError = ref('')

    // Загрузка категорий
    const loadCategories = async () => {
      if (!props.isPrivate) return

      isLoadingCategories.value = true
      categoriesError.value = ''

      try {
        const response = await apiService.getCategories()
        if (response.success) {
          categories.value = response.data
        } else {
          categoriesError.value =
            response.message || 'Ошибка загрузки категорий'
        }
      } catch (error) {
        console.error('Error loading categories:', error)
        categoriesError.value = 'Не удалось загрузить категории'
      } finally {
        isLoadingCategories.value = false
      }
    }

    // Загружаем категории при монтировании компонента в приватном режиме
    onMounted(() => {
      if (props.isPrivate) {
        loadCategories()
      }
    })

    // Следим за изменениями isPrivate и загружаем категории при необходимости
    watch(
      () => props.isPrivate,
      newValue => {
        if (newValue) {
          loadCategories()
        } else {
          filters.value.category = ''
          categories.value = []
          categoriesError.value = ''
        }
      }
    )

    // Debounce для поиска
    let searchTimeout = null

    // Проверяем, есть ли активные фильтры
    const hasActiveFilters = computed(() => {
      return (
        Object.values(filters.value).some(
          value => value !== '' && value !== null
        ) ||
        sorting.value.field !== 'uploadDate' ||
        sorting.value.direction !== 'desc'
      )
    })

    // Обработчики
    const handleSearchInput = () => {
      // Debounce поиска - отправляем запрос через 500ms после остановки печати
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(() => {
        handleFilterChange()
      }, 500)
    }

    const handleFilterChange = () => {
      // Для остальных фильтров отправляем сразу
      emitFiltersChange()
    }

    const handleSortingChange = () => {
      emitFiltersChange()
    }

    const toggleSortDirection = () => {
      sorting.value.direction =
        sorting.value.direction === 'asc' ? 'desc' : 'asc'
      emitFiltersChange()
    }

    const clearFilters = () => {
      filters.value = {
        search: '',
        author: '',
        fileType: '',
        category: '',
        minSize: '',
        maxSize: '',
        dateFrom: '',
        dateTo: '',
      }
      sorting.value = {
        field: 'uploadDate',
        direction: 'desc',
      }
      grouping.value = {
        by: 'none',
      }
      emitFiltersChange()
    }

    const emitFiltersChange = () => {
      emit('filters-change', {
        filters: { ...filters.value },
        sorting: { ...sorting.value },
      })
    }

    return {
      filters,
      sorting,
      categories,
      isLoadingCategories,
      categoriesError,
      hasActiveFilters,
      handleSearchInput,
      handleFilterChange,
      handleSortingChange,
      toggleSortDirection,
      clearFilters,
    }
  },
}
</script>

<style lang="scss" scoped>
@use './FileFilters.scss';
</style>
