export function transformCatalogToItems(catalog) {
  const fileTypeToImage = {
    pdf: 'pdf.gif',
    word: 'word.png',
    doc: 'word.png',
    docx: 'word.png',
    zip: 'djvu.jpg',
  }

  // Трансформируем каталог данных в подходящий для отображения формат
  return Object.keys(catalog).map(letter => {
    return {
      letter,
      publications: catalog[letter].map(entry => {
        // entry - это объект с данными о публикации
        const fileType = entry.type || 'pdf' // по умолчанию pdf
        // возвращаем структуру данных, которая будет использоваться для отображения
        return {
          authors: entry.authors,
          title: entry.title,
          link: entry.filename,
          img: {
            type: fileType,
            src: fileTypeToImage[fileType] || 'file.png',
          },
        }
      }),
    }
  })
}
