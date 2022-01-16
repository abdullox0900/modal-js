'use strict';
let elShowModal = document.querySelector(".show-modal");
let elModal = document.querySelector(".modal");
let elCloseModal = document.querySelector(".close-modal");
let elOverlay = document.querySelector(".overlay");

const hiddenFunction = function () {
  elModal.classList.add("hidden")
  elOverlay.classList.add("hidden")
}
hiddenFunction()

elShowModal.addEventListener("click", function () {
  elModal.classList.remove("hidden")
  elOverlay.classList.remove("hidden")
})

elCloseModal.addEventListener("click", function () {
  elModal.classList.add("hidden")
  elOverlay.classList.add("hidden")
})

elOverlay.addEventListener("click", function () {
  elModal.classList.add("hidden")
  elOverlay.classList.add("hidden")
})

document.addEventListener('keydown', function (evt) {
  evt.preventDefault()
  if (evt.key == "Escape") {
    elModal.classList.add("hidden")
    elOverlay.classList.add("hidden")
  }
});
