import { galleryItems } from "./gallery-items.js";
// Change code below this line

const html = galleryItems
  .map(({ original, preview, description }) => {
    return (
      "<div class='gallery__item'>" +
      "<a href='" +
      original +
      "' data-simplelightbox>" +
      "<img class='gallery__image' src='" +
      preview +
      "' alt='" +
      description +
      "'>" +
      "</a>" +
      "</div>"
    );
  })
  .join("");

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = html;

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
