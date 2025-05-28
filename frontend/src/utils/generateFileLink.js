export function generateFileLink(routePath) {
  if (routePath.startsWith('/privateLibrary') || routePath.startsWith('/libraryManager')) {
    return `http://localhost:5000/api/privateDownload`
    // return `${window.location.origin}/api/privateDownload`
  } else if (routePath.startsWith('/library')) {
    // return `http://localhost:5000/api/download`
    return `${window.location.origin}/api/download`
  }
  return '#'
}
