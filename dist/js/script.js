//js//

const navBar = document.querySelector(".navbar");

window.addEventListener('scroll', () =>{
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle(
        "scrolling-active", windowPosition);
}); 

// js swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:   { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024:{ slidesPerView: 5 }
    }
});

// js 


//
// Disable AOS on Mobile
if (window.innerWidth <= 600) {
    document.querySelectorAll("[data-aos]").forEach(el => {
        el.removeAttribute("data-aos");
    });
} else {
    AOS.init();
}



