const navToggle = document.querySelector(".nav__toggle");
const navWrapper = document.querySelector(".nav__list");
const navIcon = document.querySelector(".nav__icon");
const body = document.body;

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("flex")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("flex");
    navWrapper.classList.add("hidden");
    navIcon.src = "assets/images/icon-hamburger.svg";
    body.style.overflow = "auto";
  } else {
    navWrapper.classList.remove("hidden");
    navWrapper.classList.add("flex");
    navIcon.src = "assets/images/icon-close.svg";
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    body.style.overflow = "hidden";
  }
  
});
