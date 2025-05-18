<template>
  <div class="container my-5">
    <!-- Заголовок страницы -->
    <h1 class="text-center mb-4 display-5">📚 Управление библиотекой</h1>

    <!-- 📥 Форма добавления нового файла -->
    <div class="card shadow-sm mb-5">
      <div class="card-header fw-semibold">➕ Добавить новый файл</div>
      <div class="card-body">
        <form @submit.prevent="uploadFile">
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
                @click="deleteFile(file.filename)"
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

// 📁 Каталог файлов, сгруппированный по первой букве
const catalog = ref({})

// 📂 Получаем текущий маршрут для генерации ссылок на файлы
const route = useRoute()

// 🎯 Данные нового файла, который добавляется
const newFile = ref({ title: '', authors: '', file: null })

// Для отладки можно включить mock-данные
const useMock = false

// 📡 Получение каталога файлов с backend или из mock
const fetchCatalog = async () => {
  if (useMock) {
    // Пример данных
    catalog.value = {
      T: [
        {
          filename: 'AndreevaTE.doc',
          title: 'Мозг и разум',
          authors: 'Андреева Т.Е.',
          type: 'word',
        },
      ],
      A: [
        {
          filename: 'Avicenna.pdf',
          title: 'Философия',
          authors: 'Авиценна',
          type: 'pdf',
        },
      ],
    }
  } else {
    const res = await fetch('http://localhost:5000/controllers/catalog.php', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res.status === 200) {
      catalog.value = await res.json()
    }
  }
}

// 📂 Обработка выбора файла пользователем
const onFileChange = e => {
  newFile.value.file = e.target.files[0]
}

// 📤 Отправка нового файла на сервер
const uploadFile = async () => {
  // Проверяем, заполнены ли все поля
  if (!newFile.value.title || !newFile.value.authors || !newFile.value.file)
    return

  const formData = new FormData()
  formData.append('title', newFile.value.title)
  formData.append('authors', newFile.value.authors)
  formData.append('file', newFile.value.file)

  const res = await fetch('http://localhost:5000/controllers/catalog.php', {
    method: 'POST',
    credentials: 'include',
    body: formData,
  })

  if (res.ok) {
    await fetchCatalog() // Перезагружаем список
    newFile.value = { title: '', authors: '', file: null } // Сброс формы
  } else {
    console.error(await res.json())
    alert('Ошибка при загрузке файла')
  }
}

// 🗑 Удаление файла по имени
const deleteFile = async fileName => {
  const res = await fetch(`http://localhost:5000/controllers/catalog.php`, {
    body: JSON.stringify({ fileName }),
    credentials: 'include',
    method: 'DELETE',
  })
  if (res.ok) {
    await fetchCatalog() // Перезагружаем список после удаления
  } else {
    alert('Ошибка при удалении файла')
  }
}

// 🔄 Автозагрузка каталога при монтировании компонента
onMounted(fetchCatalog)
</script>

<style scoped>
/* 🔧 Дополнительная стилизация */
.card-title {
  font-size: 1.1rem;
}
</style>
