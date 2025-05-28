async function i() {
  const e = `${window.location.origin}/api/catalog`
  let t = await fetch(e, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  return t.status === 200
    ? await t.json()
    : (console.error('Error loading private library:', t.statusText), null)
}
function n(e) {
  const t = {
    pdf: 'pdf.gif',
    word: 'word.png',
    doc: 'word.png',
    docx: 'word.png',
    zip: 'djvu.jpg',
  }
  return Object.keys(e).map(r => ({
    letter: r,
    publications: e[r].map(o => {
      const a = o.type || 'pdf'
      return {
        authors: o.authors,
        title: o.title,
        link: o.fileName,
        img: { type: a, src: t[a] || 'file.png' },
      }
    }),
  }))
}
export { i as l, n as t }
