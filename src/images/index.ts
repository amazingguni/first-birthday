import coverImage from "./cover.jpg"

// Use import.meta.glob to dynamically import all .jpg files from the gallery directory
const galleryImageModules = import.meta.glob<string>('./gallery/*.jpg', { eager: true, as: 'url' })

export const COVER_IMAGE = coverImage

// Convert the imported modules into an array of image URLs
export const GALLERY_IMAGES = Object.values(galleryImageModules)
  .sort((a, b) => a.localeCompare(b)) // Sort them to ensure a consistent order