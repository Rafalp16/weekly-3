const menuToggler = document.getElementById("nav-toggler");
const navLinks = document.querySelectorAll(".site-nav__link");

function menuToggle () {
    document.body.classList.toggle("site-nav-open");
}

menuToggler.addEventListener("click", menuToggle);
navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", menuToggle);
});