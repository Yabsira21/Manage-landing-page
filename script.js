let menu = document.querySelector(".hamburger");
let nav_container = document.querySelector(".nav-ul");
let overlay = document.querySelector(".overlay");
let isOpen = false;
menu.addEventListener("click", function () {
  nav_container.classList.toggle("mobile-hidden");
  overlay.classList.toggle("hidden");
  menu.src = isOpen ? `images/icon-hamburger.svg` : `images/icon-close.svg`;
  document.body.style.overflow = isOpen ? "auto" : "hidden";
  document.documentElement.style.overflow = isOpen ? "auto" : "hidden";
  isOpen = !isOpen;
});
