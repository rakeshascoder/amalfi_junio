

const hamburgerMenu = document.querySelector(".hamburger_menu");
const menuOverlay = document.querySelector(".menu_overlay");
const closeMenu = document.querySelector(".close_menu");
hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menuOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});
