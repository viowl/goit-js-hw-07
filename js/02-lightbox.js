import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

// Создание разметки галереи
const markup = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`).join('');

// Вставка разметки в список галереи
gallery.insertAdjacentHTML('beforeend', markup);

// Инициализация SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // Включає підписи
  captionType: 'attr', // Використовуємо атрибут alt для відображення підпису
  captionsData: 'alt', // Використовуємо значення атрибута alt для підпису
  captionDelay: 250, // Затримка перед показом підпису в мілісекундах
});

// Отмена действия по умолчанию при клике на ссылки внутри галереи
gallery.addEventListener('click', (event) => {
  event.preventDefault();
});