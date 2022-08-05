const swiper = new Swiper('.index-slider', {
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 20,
    loop: true,
    speed: 600,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
