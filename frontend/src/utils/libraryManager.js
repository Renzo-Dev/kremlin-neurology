import { loadPrivateLibrary } from '@/utils/loadPrivateLibrary'
import { transformCatalogToItems } from '@/utils/transformCatalogToItems'
import { isRef } from 'vue'

const baseUrl = `http://localhost:5000/api/catalog`
// const baseUrl = `${window.location.origin}/api/catalog`

// 🔁 Универсальный запрос
const request = async (method, body = null, isForm = false) => {
  try {
    const options = {
      method,
      credentials: 'include',
      headers: {},
    }

    if (body) {
      if (isForm) {
        options.body = body
      } else {
        options.body = JSON.stringify(body)
      }
    }

    const response = await fetch(baseUrl, options)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData?.message || `HTTP error ${response.status}`)
    }

    return await response.json()
  } catch (err) {
    console.error(`❌ ${method} ${baseUrl}`, err)
    alert(err.message || 'Ошибка при выполнении запроса')
    return null
  }
}

// 📤 Отправка нового файла
export const uploadFile = async newFile => {
  const { title, authors, file } = newFile

  if (!title || !authors || !file) {
    alert('Пожалуйста, заполните все поля')
    return
  }

  const formData = new FormData()
  formData.append('title', title)
  formData.append('authors', authors)
  formData.append('file', file)

  const success = await request('POST', formData, true)
  if (success) {
    alert('Успешно добавлен')
    return true
  } else {
    alert('Ошибка при добавлении файла')
    return false
  }
}

// 🗑 Удаление файла по имени
export const deleteFile = async fileName => {
  const success = await request('DELETE', { fileName })
  if (success) {
    const rawCatalog = await loadPrivateLibrary() // load the private library
    const newCatalog = transformCatalogToItems(rawCatalog)
    alert('Файл успешно удален')
    return true
  } else {
    return false
  }
}
