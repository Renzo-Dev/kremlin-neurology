export async function loadPrivateLibrary() {
  const url = 'http://localhost:5000/controllers/list.php'
  // const url = `/app/controllers/list.php`

  let rep = await fetch(url, {
    method: 'GET',
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
