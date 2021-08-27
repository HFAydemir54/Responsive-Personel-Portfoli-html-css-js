/*--================================================= MENU AÇMA KAPAMA ============================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/* VALİDATE İF  CONSTANT EXİSTS */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
console.log('fırat')

/* MENU HİDDEN*/
/* VALİDATE İF  CONSTANT EXİSTS */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(item => item.addEventListener('click', linkAction))



/*--================================================= Skill AÇMA KAPAMA ============================*/

const skillsContent = document.getElementsByClassName('skills-content'),
    skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {

    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})




/*--================================================= QUALİFİCATİON AÇMA KAPAMA ============================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents => {
            tabContents.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')
        tab.forEach(tab => {
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})




/*--================================================= MODAL AÇMA KAPAMA ============================*/

const modalViews = document.querySelectorAll('.services-modal'),
    modalBtns = document.querySelectorAll('.services-button'),
    modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
let modalClose = function(modalClick) {
    modalViews[modalClick].classList.remove('active-modal')
}
modalBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        modal(i)
    })
})
modalCloses.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalClose(i)
    })
})

/*--================================================= Swiper Js ============================*/
/*--================================================= swiperPortfolio ============================*/

let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/*--================================================= swiperTestimonial ============================*/


let swiperTestimonial = new Swiper(".testimonial-container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoint: {
        568: {
            slidesPerView: 2,
        }
    }
});
/*--================================================= SCROOL SECTİONS ACTIVE LİNK ============================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
    /*--================================================= CHANGE BACKGROUND HEADER ============================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)
    /*--================================================= SHOW SCROLL TOP ============================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*--================================================= DARK LIGHT THEME ============================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})