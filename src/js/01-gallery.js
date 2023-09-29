import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

galleryList.innerHTML = galleryItems.map(item =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}" />
    </a>
    </li>`)
    .join('');

galleryList.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        const largeImageSrc = e.target.getAttribute("data-source");
        const lightbox = basicLightbox.create(`<img src="${largeImageSrc}" alt="${e.target.alt}" />`);
        lightbox.show();
    }
})

console.log(galleryItems);
