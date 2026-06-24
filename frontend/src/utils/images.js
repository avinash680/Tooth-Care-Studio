/**
 * Collects image URLs from the `src/assets` folders using Vite's import.meta.glob.
 * Usage:
 * import { galleryImages } from '../utils/images'
 * then map over `galleryImages` to render <img src={url} />
 */

export const galleryImages = Object.values(
  import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true, as: 'url' })
);

export default galleryImages;
