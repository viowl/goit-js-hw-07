import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`)

// instance.show()

const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('')



const gallery = document.querySelector('.gallery')


gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', (event) => {event.preventDefault()});
// const galleryLinks = document.querySelector('.gallery__link');
// galleryLinks.forEach(link => {
//     link.addEventListener('click')
// })
gallery.addEventListener('click', (e) => console.log(e.target))


