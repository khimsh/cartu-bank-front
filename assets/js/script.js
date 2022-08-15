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

    // Header Nav Dropdowns
    // function headerDropdown() {
    //     if (!document.querySelector('.nav')) return

    //     const dropdowns = document.querySelectorAll('.nav__dropdown')

    //     dropdowns.forEach((dropdown) => {
    //         const btn = dropdown.querySelector('.dropdonw__trigger')
    //         btn.addEventListener('click', () => {
    //             dropdown.classList.toggle('active')
    //         })
    //     })
    // }
    // headerDropdown()

    // Open Search Field
    function headerSearchForm() {
        if (!document.querySelector('.header__search-form')) return

        const btn = document.querySelector('.header__search-btn')
        const searchForm = document.querySelector('.header__search-form')

        btn.addEventListener('click', () => {
            searchForm.classList.toggle('active')
        })
    }
    headerSearchForm()

    // Remove active class from dom elements on outside click
    document.addEventListener('click', (e) => {
        // Remove search form
        if (!e.target.matches('.header__search-btn, .header__search-form, .header__search-form *')) {
            const searchForm = document.querySelector('.header__search-form')
            if (searchForm.classList.contains('active')) {
                searchForm.classList.remove('active')
            }
        }

        // Remove search form
        // if (!e.target.matches('.dropdonw__trigger, .nav__content, .nav__content *')) {
        //     const dropdowns = document.querySelectorAll('.nav__dropdown')

        //     dropdowns.forEach((dropdown) => {
        //         dropdown.classList.remove('active')
        //     })
        // }
    })
})()
