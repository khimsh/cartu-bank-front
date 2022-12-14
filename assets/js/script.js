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
        if (!document.querySelector('.search-form')) return

        const btn = document.querySelector('.header__search-btn')
        const btnFixed = document.querySelector('[data-toggle-search]')
        const searchForm = document.querySelector('.search-form')

        btn.addEventListener('click', () => {
            searchForm.classList.toggle('active')
        })
        btnFixed.addEventListener('click', () => {
            searchForm.classList.toggle('active')
        })
    }
    headerSearchForm()

    // Side menu dropdowns
    function sidebarDropdown() {
        if (!document.querySelector('.side-menu__dropdown')) return

        const dropdowns = document.querySelectorAll('.side-menu__dropdown')

        dropdowns.forEach((dropdown) => {
            const btn = dropdown.querySelector('.side-menu__btn')

            btn.addEventListener('click', () => {
                dropdowns.forEach((dropdown) => dropdown.classList.remove('active'))

                dropdown.classList.toggle('active')
            })
        })
    }
    sidebarDropdown()

    // Remove active class from dom elements on outside click
    document.addEventListener('click', (e) => {
        // Remove search form
        if (!e.target.matches('.header__search-btn, .search-form, .search-form *, [data-toggle-search]')) {
            const searchForm = document.querySelector('.search-form')
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

    // Mobile Menu
    function mobileMenu() {
        if (!document.querySelector('.mobile-menu')) return

        const openMenuBtn = document.querySelector('.header-mobile__burger')
        const body = document.querySelector('body')
        const menuContainer = document.querySelector('.mobile-menu')

        openMenuBtn.addEventListener('click', () => {
            body.classList.toggle('menu-open')
            menuContainer.classList.toggle('open')

            if (menuContainer.classList.contains('open')) {
                openMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
            } else {
                openMenuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
            }
        })
    }

    mobileMenu()

    // Mobile Menu dropdown
    function mobileMenuDropdown() {
        if (!document.querySelector('.mobile-menu__dropdown')) return

        const dropdowns = document.querySelectorAll('.mobile-menu__dropdown')

        dropdowns.forEach((dropdown) => {
            const btn = dropdown.querySelector('.mobile-menu__btn')

            btn.addEventListener('click', () => {
                dropdowns.forEach((dropdown) => dropdown.classList.remove('active'))

                dropdown.classList.toggle('active')
            })
        })
    }

    mobileMenuDropdown()

    // Set active side menu on mobile
    function activeSideMenu() {
        if (!document.querySelector('.mobile-menu')) return

        const btns = document.querySelectorAll('.header-mobile__btn')
        const menus = document.querySelectorAll('.mobile-menu__section')
        const openMenuBtn = document.querySelector('.header-mobile__burger')
        const menuContainer = document.querySelector('.mobile-menu')
        const body = document.querySelector('body')

        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const btnTarget = btn.dataset.target

                btns.forEach((btn) => btn.classList.remove('active'))

                menus.forEach((menu) => menu.classList.remove('active'))
                document.querySelector(`${btnTarget}`).classList.add('active')
                body.classList.add('menu-open')
                menuContainer.classList.add('open')
                openMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
                btn.classList.add('active')
            })
        })
    }

    activeSideMenu()

    // Partner text hide/show
    function partnerContent() {
        if (!document.querySelector('.partner')) return

        const partners = document.querySelectorAll('.partner')

        partners.forEach((partner) => {
            const btn = partner.querySelector('.partner__see-more')

            btn.addEventListener('click', () => {
                partner.classList.toggle('open')
            })
        })
    }
    partnerContent()

    function showVacancyContent() {
        if (!document.querySelector('.vacancy')) return

        const vacancies = document.querySelectorAll('.vacancy')

        vacancies.forEach((vacancy) => {
            const btn = vacancy.querySelector('.vacancy__btn')

            btn.addEventListener('click', () => {
                vacancy.classList.toggle('open')

                if (vacancy.classList.contains('open')) {
                    btn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`
                } else {
                    btn.innerHTML = '??????????????? ????????????'
                }
            })
        })
    }
    showVacancyContent()

    function expandable() {
        if (!document.querySelector('.expandable')) return

        const expandables = document.querySelectorAll('.expandable')

        expandables.forEach((expandable) => {
            const trigger = expandable.querySelector('.expandable__trigger')

            trigger.addEventListener('click', () => {
                expandable.classList.toggle('open')
            })
        })
    }
    expandable()
})()
