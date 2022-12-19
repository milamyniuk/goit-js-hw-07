import { galleryItems } from "./gallery-items.js";
// Change code below this line
const html = galleryItems
  .map((item) => {
    return (
      "<div class='gallery__item'>" +
      "<img class='gallery__image' src='" +
      item.preview +
      "' alt='" +
      item.description +
      "'>" +
      "</div>"
    );
  })
  .join("");

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = html;

galleryEl.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    const src = event.target.getAttribute("src");

    const originalSrc = galleryItems.find(
      (item) => item.preview === src
    ).original;

    const modalHtml =
      "<div class='modal-content'><img class='gallery__image' src='" +
      originalSrc +
      "'></div>";

    basicLightbox.create(modalHtml).show();
  }
});

console.log(galleryItems);
