import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');


const listOfImages = galleryItems
    .map(image => `<div class="gallery__item">`+
        `<a class="gallery__link" href=${image.original}>`+
        `<img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}/>` +
        `</a></div >`)
    .join('');

    // console.log(listOfImages);
galleryList.insertAdjacentHTML('beforeend', listOfImages)

galleryList.addEventListener('click', e => {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) return false;
    // console.log(e.target);
    return galleryItems.dataset.source;
})

//  https://github.com/corund1976/goit-js-hw-07



