<template>
  <div class="container my-5">
    <!-- Заголовок страницы -->
    <h1 class="text-center mb-4 display-5">📚 Управление библиотекой</h1>

    <!-- 📥 Форма добавления нового файла -->
    <div class="card shadow-sm mb-5">
      <div class="card-header fw-semibold">➕ Добавить новый файл</div>
      <div class="card-body">
        <form @submit.prevent="uploadFile(newFile, catalog)">
          <!-- Поле для ввода названия -->
          <div class="mb-3">
            <label class="form-label">Название</label>
            <input
              v-model="newFile.title"
              type="text"
              class="form-control"
              placeholder="Введите название"
              required
            />
          </div>
          <!-- Поле для ввода авторов -->
          <div class="mb-3">
            <label class="form-label">Авторы</label>
            <input
              v-model="newFile.authors"
              type="text"
              class="form-control"
              placeholder="Введите авторов"
              required
            />
          </div>
          <!-- Поле для выбора файла -->
          <div class="mb-3">
            <label class="form-label">Файл</label>
            <input
              type="file"
              @change="onFileChange"
              class="form-control"
              required
            />
          </div>
          <!-- Кнопка загрузки -->
          <button type="submit" class="btn btn-primary">📥 Загрузить</button>
        </form>
      </div>
    </div>

    <!-- 📂 Отображение каталога файлов -->
    <div
      v-if="Object.keys(catalog).length === 0"
      class="text-muted text-center"
    >
      Каталог пуст.
    </div>

    <!-- Проходим по каждой группе (по букве алфавита) -->
    <div v-for="(group, letter) in catalog" :key="letter" class="mb-4">
      <h3 class="mb-3">{{ letter }}</h3>

      <!-- Отображаем карточки файлов внутри группы -->
      <div class="row g-3">
        <div v-for="file in group" :key="file.filename" class="col-md-6">
          <div class="card h-100 shadow-sm border">
            <div class="card-body">
              <h5 class="card-title">{{ file.title }}</h5>
              <p class="card-text text-muted">{{ file.authors }}</p>
              <p class="text-end text-secondary small">Тип: {{ file.type }}</p>
            </div>
            <!-- Кнопки: открыть и удалить -->
            <div class="card-footer d-flex justify-content-between">
              <button
                class="btn btn-sm btn-outline-primary"
                @click="
                  handleDownload(
                    generateFileLink(file.filename, route.path),
                    file.filename
                  )
                "
              >
                🔗 Скачать
              </button>
              <button
                @click="deleteFile(file.filename,catalog)"
                class="btn btn-sm btn-outline-danger"
              >
                🗑 Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { handleDownload } from '@/utils/handleDownload'
import { generateFileLink } from '@/utils/generateFileLink'
import { useRoute } from 'vue-router'
import { deleteFile, fetchCatalog, uploadFile } from '@/utils/libraryManager'

// 📁 Каталог файлов, сгруппированный по первой букве
const catalog = ref({})

// 📂 Получаем текущий маршрут для генерации ссылок на файлы
const route = useRoute()

// 🎯 Данные нового файла, который добавляется
const newFile = ref({ title: '', authors: '', file: null })

// 📂 Обработка выбора файла пользователем
const onFileChange = e => {
  newFile.value.file = e.target.files[0]
}

// 🔄 Автозагрузка каталога при монтировании компонента
onMounted(async () => {
  try {
    await fetchCatalog(catalog)
  } catch (error) {
    console.error('Ошибка при загрузке каталога:', error)
  }
})
</script>

<style scoped>
/* 🔧 Дополнительная стилизация */
.card-title {
  font-size: 1.1rem;
}
</style>
