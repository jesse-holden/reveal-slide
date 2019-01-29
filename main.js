ScrollReveal().reveal('.quick-reveal', {
    distance: '100px'
});
ScrollReveal().reveal('.quick-reveal-top', {
    distance: '100px',
    origin: 'top'
});
ScrollReveal().reveal('.med-reveal-right', {
    delay: 1000,
    distance: '100px',
    duration: 2000,
    origin: 'right'
});
ScrollReveal().reveal('.med-reveal', {
    delay: 1000,
    distance: '100px',
    duration: 2000
});
ScrollReveal().reveal('.long-reveal', {
    delay: 2000,
    distance: '100px',
    duration: 2500
});
ScrollReveal().reveal('.col-reveal1', {
    delay: 200,
    distance: '100px',
    origin: 'bottom',
    duration: 2500
});
ScrollReveal().reveal('.col-reveal2', {
    delay: 400,
    distance: '100px',
    origin: 'bottom',
    duration: 2500
});
ScrollReveal().reveal('.col-reveal3', {
    delay: 600,
    distance: '100px',
    origin: 'bottom',
    duration: 2500
});
ScrollReveal().reveal('.col-reveal-right', {
    delay: 400,
    distance: '100px',
    origin: 'right',
    duration: 2500
});

// Get the container element
var btnContainer = document.getElementById("navbarSupportedContent");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Smooth Scroll Anchors
function smoothScrollAnchors() {
    $('body:not(.single-product) a[href*="#"]:not([href="#"])').on('click', function () {
        var target;
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - $('#sticky-wrapper').outerHeight(true)
                }, 1000);
                return false;
            }
        }
    });
}