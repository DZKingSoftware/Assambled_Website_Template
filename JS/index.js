document.addEventListener('DOMContentLoaded', () => {
    const spinner = document.getElementById('spinner');
    setTimeout( () => {
        spinner.style.display = 'none'
    }, 1)
});

// Navbar
function Navbar() {
    const NavbarMenu = document.querySelector('.nav-bars');
    const NavbarList = document.querySelector('.nav-list')

    NavbarMenu.addEventListener('click', () => {
        NavbarList.classList.toggle('nav-res')
        NavbarMenu.classList.toggle('active')
    })
    window.addEventListener('scroll', () => {
        const NavbarConatiner = document.querySelector('.navbar-container');

        let top = window.scrollY;
        if(top > 48) {
            NavbarConatiner.style.position = 'fixed'
        } else {
            NavbarConatiner.style.position = 'relative'
        }
    })
}

Navbar();

// AOS
AOS.init();

// Logos Clone

function LogosClone() {
    const Logos = document.getElementById('logos');
    const LogosCard = document.getElementsByClassName('logos-card');

    const Clone = LogosCard.cloneNode(true)
    Logos.appendChild(Clone);
}

LogosClone();

// Accurate

// function Accurate() {
//     const AccurateNumberCard = document.querySelectorAll('.accurate-card-sxema-number').forEach(Accurate => {
//         Accurate.addEventListener('click', () => {
//             if(!AccurateNumberCard) {
//                 Accurate.classList.add('res');
//             } else {
//                 Accurate.classList.remove('res');
//             }
//         })
//     })
// }

// Accurate()

// Glide Carusel

// document.addEventListener("DOMContentLoaded", function() {
//     new Glide('.glide', {
//         type: 'carousel', // Karusel rejimi
//         autoplay: 3000, // 3 soniyada bir marta o'zgaradi
//         hoverpause: false, // Sichqoncha ustiga kelganda to'xtamaydi
//         animationDuration: 800, // Animatsiya davomiyligi
//         perView: 1, // Bir vaqtning o'zida faqat 1 ta ko'rsatiladi
//         loop: true // Cheksiz davom etadi
//     }).mount();
// });

// Footer

function Footer() {
    const footer = document.querySelectorAll('.footer-card.res').forEach(footer => {
        footer.addEventListener('click', () => {
            if(!footer.style.maxHeight) {
                footer.style.maxHeight = '150px'
            } else {
                footer.style.maxHeight = ''
            }
        })
    })
}