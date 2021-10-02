// Add imports above this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesAdd = document.querySelector('.gallery');

let makeString = '';
galleryItems.forEach(({preview,original,description}) => {
    makeString += `<a class="gallery__item" href=${original}>
    <img class="gallery__image" 
    src=${preview} 
    alt='${description}'/></a>`
});

imagesAdd.insertAdjacentHTML('beforeend', makeString);
imagesAdd.addEventListener('click', getClick);
function getClick(event, lightbox) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    
};
const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: "alt",
    captionDelay: 250 
});



console.log(galleryItems);
