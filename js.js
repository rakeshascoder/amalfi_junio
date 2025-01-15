
document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const scrollPosition = window.scrollY;
    const maxScroll = 300;
    const opacity = Math.min(scrollPosition / maxScroll, 1);
    nav.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});