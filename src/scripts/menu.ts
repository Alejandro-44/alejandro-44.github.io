const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle?.addEventListener("click", () => {
  navMenu?.classList.add("show");
});

navClose?.addEventListener("click", () => {
  navMenu?.classList.remove("show");
});

const navLinks = document.querySelectorAll(".nav__link");

const closeMenu = () => navMenu?.classList.remove("show");

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
