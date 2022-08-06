;(() => {
    'use strict'

    // Index page slider
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

    // Report functionality
    function reportAccordion() {
        if (!document.querySelector('.report')) return

        const reports = document.querySelectorAll('.report')

        reports.forEach((report) => {
            const btn = report.querySelector('.report__btn')
            btn.addEventListener('click', () => {
                report.classList.toggle('active')
            })
        })
    }

    reportAccordion()
})()
