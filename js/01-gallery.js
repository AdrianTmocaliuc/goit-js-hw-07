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
    if (!e.target.classList.contains('gallery__image')) return;
    e.preventDefault();
    // console.log(e.target);
    instance = basicLightbox.create(
        `<img src='${e.target.dataset.source}'>`
    );
    instance.show();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape')
        instance.close();
})


// const handler = e => {
//   if (e.key === "Escape") { instance.close(); console.log("Escape") }
//   else(console.log("hoW"))
// }

// galleryNode.addEventListener("click", e => {
//   if (e.target.tagName !== "IMG") { return  };
//   e.preventDefault();

//   // 1 method
//   let linkImg = e.target.dataset.source;
//   instance = basicLightbox.create(<img src='${linkImg}'  width="800" height="600">,
//   //false  true для closable щоб бачити спрацювання для keydown
//     { closable: true,
//       onShow: (instance) => { document.addEventListener("keydown", handler) },
//       onClose: (instance) => { document.removeEventListener("keydown", handler) }
//     })

//     instance.show()
//   })



