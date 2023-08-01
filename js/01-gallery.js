import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);





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

gallery.addEventListener('click', onClick);

// function onClick(e) {
//   const {target} = e;
//   if (!target.classList.contains('gallery__image')) {
//  return
//   } 
//   const original = target.dataset.source;
//   const description = target.alt;
  

//   const instance = basicLightbox.create(`
//   <img
//   class="gallery__image"
//   src="${original}"
//   alt="${description}"
// />
// `)
// instance.show()
// window.addEventListener('keydown', closeModalOnESC);
// }


// function closeModalOnESC(e) {
//   if (e.code === "Escape") {
//     instance.close();
//     window.removeEventListener('keydown', closeModalOnESC);
//   }
// }

let instance; // Объявляем переменную для хранения экземпляра модального окна

function onClick(e) {
  const { target } = e;
  if (!target.classList.contains('gallery__image')) {
    return;
  }

  const original = target.dataset.source;
  const description = target.alt;

  // ... ваш код для открытия модального окна ...

  // Сохраняем экземпляр модального окна в переменной
  instance = basicLightbox.create(`
    <img
      class="gallery__image"
      src="${original}"
      alt="${description}"
    />
  `);
  instance.show();

  // Добавляем слушатель события 'keydown' на объект window
  window.addEventListener('keydown', closeModalOnESC);
}

function closeModalOnESC(e) {
  if (e.code === "Escape") {
    instance.close();
    
    // Удаляем слушатель события 'keydown' после закрытия модального окна
    window.removeEventListener('keydown', closeModalOnESC);
  }
}
 
  


