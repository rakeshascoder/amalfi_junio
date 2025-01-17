
document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const scrollPosition = window.scrollY;
    const maxScroll = 300;
    const opacity = Math.min(scrollPosition / maxScroll, 1);
    nav.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});


$(".responsive").slick({
    dots: true,
    autoplaySpeed: 3000,
    prevArrow: ".pre",
    nextArrow: ".next",
    pauseOnHover: true,
    cssEase: "linear",
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});