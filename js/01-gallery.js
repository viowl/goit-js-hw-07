import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



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
gallery.addEventListener('click', onClick);

function onClick(e) {
  const {target} = e;
  if (!target.classList.contains('gallery__image')) {
 return
  } 
  const original = target.dataset.source;
  const description = target.alt;

  const instance = basicLightbox.create(`
  <img
  class="gallery__image"
  src="${original}"
  alt="${description}"
/>
`)

instance.show()
}
  
  // const {original, description} = galleryItems;
//   const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
// }


