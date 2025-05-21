const baseUrl = `http://localhost:5000/controllers/catalog.php`
// const baseUrl = `${window.location.origin}/controllers/catalog.php`

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

// 📡 Получение каталога файлов
export const fetchCatalog = async catalog => {
  const data = await request('GET')
  if (data) catalog.value = data
}

// 📤 Отправка нового файла
export const uploadFile = async (newFile, catalog) => {
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
    await fetchCatalog(catalog)
    newFile.value = { title: '', authors: '', file: null }
  }
}

// 🗑 Удаление файла по имени
export const deleteFile = async (fileName, catalog) => {
  const success = await request('DELETE', { fileName })
  if (success) {
    await fetchCatalog(catalog)
  }
}
