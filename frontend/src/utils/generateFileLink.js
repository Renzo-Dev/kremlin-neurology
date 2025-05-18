// src/utils/generateFileLink.js
export function generateFileLink(fileName, routePath) {
  if (routePath.startsWith('/privateLibrary')) {
    return `http://localhost:5000/controllers/downloadPrivate.php?fileName=${fileName}`
  } else if (routePath.startsWith('/library')) {
    return `http://localhost:5000/controllers/download.php?fileName=${fileName}`
  }
  return '#'
}
