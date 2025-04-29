document.addEventListener("DOMContentLoaded", function() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle the menu when hamburger is clicked
  mobileMenu.addEventListener("click", function() {
    navbarMenu.classList.toggle("active");
  });

  // When any nav link is clicked, close the menu
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navbarMenu.classList.remove("active");
    });
  });
});
