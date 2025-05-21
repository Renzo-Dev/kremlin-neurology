export async function loadPrivateLibrary() {
  const url = 'http://localhost:5000/controllers/catalog.php'
  // Маршрут к вашему API
  // const url = `${window.location.origin}/app/controllers/catalog.php`

  let rep = await fetch(url, {
    method: 'GET',
    credentials: 'include', // важно для кук-сессий
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (rep.status === 200) {
    return await rep.json()
  } else {
    console.error('Error loading private library:', rep.statusText)
    return null
  }
}
