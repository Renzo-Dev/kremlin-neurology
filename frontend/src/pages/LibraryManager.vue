<template>
  <div class="container my-5">
    <!-- Заголовок страницы -->
    <h1 class="text-center mb-4 display-5">📚 Управление библиотекой</h1>

    <!-- 📥 Форма добавления нового файла -->
    <div class="card shadow-sm mb-5">
      <div class="card-header fw-semibold">➕ Добавить новый файл</div>
      <div class="card-body">
        <form @submit.prevent="handleUpload(newFile)">
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

    <div v-for="(group, index) in catalog" :key="index">
      <h3>{{ group.letter }}</h3>
      <!-- Отображаем карточки файлов внутри группы -->
      <div class="row g-3">
        <div
          v-for="(pub, pubIndex) in group.publications"
          :key="pubIndex"
          class="col-md-6"
        >
          <div class="card h-100 shadow-sm border">
            <div class="card-body">
              <h5 class="card-title">{{ pub.title }}</h5>
              <p class="card-text text-muted">{{ pub.authors }}</p>
              <p class="card-text text-muted">{{ pub.link }}</p>
              <p class="text-end text-secondary small">
                Тип: {{ pub.img.type }}
              </p>
            </div>
            <!-- Кнопки: открыть и удалить -->
            <div class="card-footer d-flex justify-content-between">
              <button
                class="btn btn-sm btn-outline-primary"
                @click="handleDownload(generateFileLink(route.path), pub.link)"
              >
                🔗 Скачать
              </button>
              <button
                @click="handleDelete(pub.link)"
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

<script lang="js">
import { defineComponent } from 'vue'
import { onMounted, ref } from 'vue'
import { handleDownload } from '@/utils/handleDownload'
import { generateFileLink } from '@/utils/generateFileLink'
import { useRoute } from 'vue-router'
import { deleteFile, uploadFile } from '@/utils/libraryManager'
import { transformCatalogToItems } from '@/utils/transformCatalogToItems'
import { loadPrivateLibrary } from '@/utils/loadPrivateLibrary'

export default defineComponent({
  name: 'LibraryManager',
  methods: {
    handleDownload,
    generateFileLink,
    uploadFile,
    deleteFile,
  },

  setup() {
    // 📁 Каталог файлов, сгруппированный по первой букве
    let catalog = ref([])

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
        const rawCatalog = await loadPrivateLibrary() // load the private library
        catalog.value = transformCatalogToItems(rawCatalog)
      } catch (error) {
        console.error('Ошибка при загрузке каталога:', error)
      }
    })

    function handleUpload(fileData) {
      if (!fileData.file) {
        console.error('Файл не выбран')
        return
      }

      // Загружаем файл и обновляем каталог
      if (uploadFile(fileData)) {
        // Добавляем новый файл в каталог
        const newPublication = {
          title: fileData.title,
          authors: fileData.authors,
          link: fileData.file.name,
          img: {
            type: fileData.file.type,
            src: fileData.file.name, // предполагаем, что имя файла уникально
          },
        }

        // Находим первую букву названия для группировки
        const firstLetter = newPublication.title.charAt(0).toUpperCase()
        const groupIndex = catalog.value.findIndex(
          group => group.letter === firstLetter
        )

        if (groupIndex !== -1) {
          // Если группа уже существует, добавляем публикацию в нее
          catalog.value[groupIndex].publications.push(newPublication)
        } else {
          // Создаем новую группу, если ее нет
          catalog.value.push({
            letter: firstLetter,
            publications: [newPublication],
          })
        }

        // Очищаем форму после успешной загрузки
        newFile.value = { title: '', authors: '', file: null }
      } else {
        console.error('Ошибка при загрузке файла:', fileData.file.name)
      }
    }

    function handleDelete(fileName) {
      if (deleteFile(fileName)) {
        // Удаляем файл из каталога
        catalog.value = catalog.value
          .map(group => ({
            ...group,
            publications: group.publications.filter(
              pub => pub.link !== fileName
            ),
          }))
          .filter(group => group.publications.length > 0)
      } else {
        console.error('Ошибка при удалении файла:', fileName)
      }
    }

    return {
      newFile,
      onFileChange,
      route,
      catalog,
      handleUpload,
      handleDelete,
      handleDownload,
      generateFileLink,
      uploadFile,
      deleteFile,
    }
  },
})
</script>

<style scoped>
/* 🔧 Дополнительная стилизация */
.card-title {
  font-size: 1.1rem;
}
</style>
