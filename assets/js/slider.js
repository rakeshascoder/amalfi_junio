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

let darkmode = localStorage.getItem("darkmode");
let theme_change = document.getElementById("theme_change");
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};
if (darkmode === "active") enableDarkMode();

theme_change.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});
