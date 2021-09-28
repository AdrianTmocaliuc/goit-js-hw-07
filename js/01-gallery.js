import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
let instance;

const listOfImages = galleryItems
    .map(image => `<div class="gallery__item">`+
        `<a class="gallery__link"  href=${image.original} >`+
        `<img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}/>` +
        `</a></div >`)
    .join('');
galleryList.insertAdjacentHTML('beforeend', listOfImages);

galleryList.addEventListener('click', e => {
    if (!e.target.classList.contains('gallery__image')) return false;
    e.preventDefault();
    // console.log(e.target);
    instance = basicLightbox.create(
        `<img src='${e.target.dataset.source}'>`
    );
    instance.show();
    if (e.key === 'Escape')
        instance.close();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape')
        instance.close();
})




