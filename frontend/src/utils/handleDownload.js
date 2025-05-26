export const handleDownload = async fileName => {
  try {
    const url = `${window.location.origin}/api/download.php` // URL вашего сервера для скачивания файлов
    console.log(url)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // важно для кук-сессий
      body: JSON.stringify({ filename: fileName }),
    })
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.statusText}`)
    }

    const blob = await response.blob()
    const downloadUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = fileName
    document.body.appendChild(link) // Добавляем ссылку в DOM
    link.click() // Имитируем клик по ссылке для скачивания
    document.body.removeChild(link) // Удаляем ссылку из DOM
    URL.revokeObjectURL(downloadUrl) // Освобождаем память
  } catch (error) {
    console.error('Ошибка при скачивании файла:', error)
  }
}
