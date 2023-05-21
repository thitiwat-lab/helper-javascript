export const imageUrl = '/api/v1.0/uploads/stream?Key='

export const getImageLink = (path?: string) => {
  if (!path) return '';
  return `${imageUrl}${path}`
}

export const replaceImageLink = (path?: string) => {
  if (!path) return '';
  return path.replace(imageUrl, '');
}