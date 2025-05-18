export const handleDownload = async (fileLink, fileName) => {
  const response = await fetch(fileLink, {
    credentials: 'include',
  })

  const contentType = response.headers.get('Content-Type')

  // Если сервер отправил JSON, то это значит, что файл недоступен
  // и мы получаем JSON с ошибкой
  if (contentType && contentType.includes('application/json')) {
    const json = await response.json()
    console.log(json.authenticated)
    if (json.authenticated === false) {
      alert('Доступ запрещён!')
      return
    }
    alert('Доступ разрешён, но файл не был отдан!')
    return
  }

  // Файл доступен — начинаем скачивание
  const blob = await response.blob()
  const downloadUrl = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = downloadUrl
  link.download = fileName
  link.click()

  URL.revokeObjectURL(downloadUrl)
}
