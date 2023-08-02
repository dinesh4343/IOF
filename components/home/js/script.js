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

// tagline animation

var text = "Unlock Your Potential With Our Coaching!";
var speed = 30;
var observer;

function typeWriter(text, i, h1tag) {
    if (i < text.length) {
        h1tag.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, h1tag);
        }, speed);
    } else {
        h1tag.classList.remove("typing");
    }
}

function startAnimation(entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            var h1tag = entry.target;
            h1tag.classList.add("typing");
            typeWriter(text, 0, h1tag);
            observer.unobserve(h1tag);
        }
    });
}


window.onload = function () {
    var h1tag = document.getElementById("h1tag");
    observer = new IntersectionObserver(startAnimation);
    observer.observe(h1tag);
};

//learnmore-popup

var popupDialog = document.getElementById('popupDialog');
var closeButton = document.getElementById('closeButton');

function openPopup() {
    // Show the popup dialog with a slow opening effect
    popupDialog.style.display = 'flex';
    popupDialog.style.opacity = '0';
    var opacity = 0;
    var interval = setInterval(function () {
        opacity += 0.1;
        popupDialog.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 50);
    popupDialog.style.pointerEvents = 'auto';
}

function closePopup() {
    // Close the popup dialog with a smooth closing effect
    var opacity = 1;
    var interval = setInterval(function () {
        opacity -= 0.1;
        popupDialog.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(interval);
            popupDialog.style.display = 'none';
            popupDialog.style.pointerEvents = 'none';
        }
    }, 50);
}

document.getElementById('learnMore').addEventListener('click', function () {
    openPopup();
});

closeButton.addEventListener('click', function () {
    closePopup();
});

window.addEventListener('click', function (event) {
    // Close the popup dialog if clicked outside of it with a smooth transition
    if (event.target == popupDialog) {
        closePopup();
    }
});