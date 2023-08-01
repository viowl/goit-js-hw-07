import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
</a>
</li>`).join('')
console.log(markup)

const gallery = document.querySelector('.gallery')


gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', (event) => {event.preventDefault()});

gallery.addEventListener('click', onClick);
