// =========================================================
// FLETCHER, LOWE & CHENEVERT
// MAIN JAVASCRIPT
// =========================================================


// =========================================================
// HEADER SCROLL EFFECT
// =========================================================

const siteHeader = document.getElementById("siteHeader");

if (siteHeader) {

    const updateHeader = () => {

        if (window.scrollY > 40) {
            siteHeader.classList.add("scrolled");
        } else {
            siteHeader.classList.remove("scrolled");
        }

    };

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}


// =========================================================
// SCROLL REVEAL ANIMATIONS
// =========================================================

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}


// =========================================================
// HERO LOAD ANIMATION
// =========================================================

window.addEventListener("load", () => {

    const heroRevealElements =
        document.querySelectorAll(".hero .reveal");

    heroRevealElements.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("visible");

        }, 180 + (index * 130));

    });


    // Attorney profile pages
    const profileRevealElements =
        document.querySelectorAll(".profile-hero .reveal");

    profileRevealElements.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("visible");

        }, 120 + (index * 110));

    });

});


// =========================================================
// MOBILE MENU
// =========================================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

let menuOpen = false;

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        menuOpen = !menuOpen;

        mobileMenu.classList.toggle("open", menuOpen);

        document.body.style.overflow =
            menuOpen ? "hidden" : "";

        menuButton.setAttribute(
            "aria-expanded",
            menuOpen ? "true" : "false"
        );

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuOpen = false;

            mobileMenu.classList.remove("open");

            document.body.style.overflow = "";

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// =========================================================
// CLOSE MOBILE MENU WITH ESCAPE KEY
// =========================================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        menuOpen &&
        mobileMenu
    ) {

        menuOpen = false;

        mobileMenu.classList.remove("open");

        document.body.style.overflow = "";

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});


// =========================================================
// SUBTLE HERO PARALLAX
// =========================================================

const heroImage = document.querySelector(".hero-image");

if (heroImage) {

    let ticking = false;

    const updateHeroParallax = () => {

        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight) {

            heroImage.style.transform =
                `translateY(${scrollPosition * 0.10}px) scale(1.02)`;

        }

        ticking = false;

    };


    window.addEventListener("scroll", () => {

        if (!ticking) {

            window.requestAnimationFrame(updateHeroParallax);

            ticking = true;

        }

    });

}


// =========================================================
// SMOOTH SCROLL FOR SAME-PAGE LINKS
// =========================================================

const anchorLinks =
    document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetID =
            link.getAttribute("href");

        if (
            !targetID ||
            targetID === "#"
        ) {
            return;
        }

        const targetElement =
            document.querySelector(targetID);

        if (!targetElement) {
            return;
        }

        event.preventDefault();

        const headerOffset =
            siteHeader
                ? siteHeader.offsetHeight
                : 0;

        const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerOffset;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


// =========================================================
// CURRENT YEAR
// =========================================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// =========================================================
// ATTORNEY CARD HOVER SUPPORT
// =========================================================

const attorneyCards =
    document.querySelectorAll(".attorney-card");

attorneyCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("active");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("active");

    });

});


// =========================================================
// SERVICE CARD HOVER SUPPORT
// =========================================================

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("active");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("active");

    });

});


// =========================================================
// PREVENT RAPID MULTIPLE PHONE LINK CLICKS
// =========================================================

const phoneLinks =
    document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach((link) => {

    let phoneClickLocked = false;

    link.addEventListener("click", () => {

        if (phoneClickLocked) {
            return;
        }

        phoneClickLocked = true;

        setTimeout(() => {

            phoneClickLocked = false;

        }, 800);

    });

});


// =========================================================
// PAGE FADE-IN
// =========================================================

document.documentElement.classList.add("js-loaded");
