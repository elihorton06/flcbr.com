// HEADER SCROLL EFFECT

const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.14
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


// SHOW HERO CONTENT IMMEDIATELY

window.addEventListener("load", () => {

    const heroReveals =
        document.querySelectorAll(".hero .reveal");

    heroReveals.forEach((element, index) => {

        setTimeout(() => {
            element.classList.add("visible");
        }, 180 + (index * 130));

    });

});


// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

let menuOpen = false;

menuButton.addEventListener("click", () => {

    menuOpen = !menuOpen;

    mobileMenu.classList.toggle("open", menuOpen);

    document.body.style.overflow =
        menuOpen ? "hidden" : "";

});


// CLOSE MOBILE MENU AFTER LINK CLICK

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuOpen = false;

        mobileMenu.classList.remove("open");

        document.body.style.overflow = "";

    });

});


// SUBTLE HERO PARALLAX

const heroImage =
    document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scrollPosition * 0.12}px) scale(1.02)`;

    }

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
