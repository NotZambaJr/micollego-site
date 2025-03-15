/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    outDir: '',
    imageDir: '/assets/img',
    ignorePaths: ['/assets/img/gltf'],
    imageSizes: [400, 800, 1200]
}
  
  module.exports = config