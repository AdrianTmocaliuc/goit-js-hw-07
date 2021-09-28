import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
const listOfImages = galleryItems
    .map(image => `<li class="gallery__item">`+
        `<a class="gallery__link"  href=${image.original} >`+
        `<img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}/>` +
        `</a></li >`)
    .join('');
galleryList.insertAdjacentHTML('beforeend', listOfImages);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});