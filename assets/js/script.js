const navbarToggle = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-items');

navbarToggle.addEventListener('click', function() {
   menu.classList.toggle("menu-open");
   hamburger.classList.toggle("menu-open");
});


