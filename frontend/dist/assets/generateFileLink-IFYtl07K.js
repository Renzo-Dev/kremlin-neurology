const i = async (e, n) => {
  try {
    const o = await fetch(e, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ fileName: n }),
    })
    if (!o.ok) throw new Error(`Ошибка сети: ${o.statusText}`)
    const a = await o.blob(),
      r = URL.createObjectURL(a),
      t = document.createElement('a')
    ;(t.href = r),
      (t.download = n),
      document.body.appendChild(t),
      t.click(),
      document.body.removeChild(t),
      URL.revokeObjectURL(r)
  } catch (o) {
    console.error('Ошибка при скачивании файла:', o)
  }
}
function c(e) {
  return e.startsWith('/privateLibrary') || e.startsWith('/libraryManager')
    ? `${window.location.origin}/api/privateDownload`
    : e.startsWith('/library')
      ? `${window.location.origin}/api/download`
      : '#'
}
export { c as g, i as h }
