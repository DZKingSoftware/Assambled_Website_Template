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

// Footer

function Footer() {
    const footer = document.querySelectorAll('.footer-card.res').forEach(footer => {
        footer.style.maxHeight = '40px'
        footer.addEventListener('click', () => {
            if(footer.style.maxHeight == '40px') {
                footer.style.maxHeight = '150px'
            } else {
                footer.style.maxHeight = '40px'
            }
        })
    })
};

Footer()