//navbar
var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector(".navbar");
var isNavbarVisible = true;
var isMenuOpen = false;

navbar.style.transition = "transform 0.7s ease-in-out";
navbar.style.transform = "translateY(0)";

window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.transform = "translateY(0)";
        isNavbarVisible = true;
    } else if (currentScrollPos > 20 && isNavbarVisible && !isMenuOpen) {
        navbar.style.transform = "translateY(-90%)";
        isNavbarVisible = false;
    }

    prevScrollpos = currentScrollPos;
});

// Handle hamburger animation and menu toggle
var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    isMenuOpen = !isMenuOpen;


});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//backtotop button
window.addEventListener('scroll', function () {
    var button = document.getElementById('backToTopButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

AOS.init();

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}