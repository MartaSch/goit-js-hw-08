import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryUl = document.querySelector(".gallery");
const markup = galleryItems.map((galleryItem) => `<a class = "gallery__item" href = "${galleryItem.original}">
<img class = "gallery__image" src = "${galleryItem.preview}" onclick = "return false"
alt = "${galleryItem.description}"/></a>`).join("");
galleryUl.insertAdjacentHTML("beforeend", markup);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionType: "alt",
    captionPosition: "bottom",
    captionDelay: 250
});
console.log(galleryItems);
