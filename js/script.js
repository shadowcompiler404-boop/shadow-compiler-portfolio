/* =========================================================
   SHADOW COMPILER
   Main JavaScript
========================================================= */


// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =========================================================
// BACK TO TOP
// =========================================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================================
// MOBILE NAVBAR
// Close navbar after clicking a link
// =========================================================

const navLinks = document.querySelectorAll(
    "#navbarContent .nav-link"
);

const navbarCollapse = document.getElementById(
    "navbarContent"
);

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            const collapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (collapse) {
                collapse.hide();
            }

        }

    });

});


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(
    ".glass-card, .project-card, .skill-card, .timeline-item"
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


// =========================================================
// ACTIVE NAVIGATION
// =========================================================

const sections = document.querySelectorAll(
    "section[id], header[id]"
);

const navigationLinks = document.querySelectorAll(
    ".nav-link"
);


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});