// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for fixed navbar
        behavior: "smooth",
      });

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    }
  });
});

// Navbar color change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const heroSection = document.querySelector("#hero");
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#F9F6EE";
    navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    navbar.classList.remove("navbar-top");

    // Change text color to green after hero section
    if (window.scrollY >= heroBottom - 70) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
    navbar.classList.add("navbar-top");
    navbar.classList.remove("navbar-scrolled");
  }
});

// Add animation to cards on scroll
const cards = document.querySelectorAll(".card");
const animateCards = () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.8;

    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

// Initialize card styles
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.5s ease";
});

// Listen for scroll to animate cards
window.addEventListener("scroll", animateCards);

// Trigger initial animation
animateCards();

// Page fade-in and section animations
window.addEventListener("DOMContentLoaded", function () {
  // Page fade-in
  document.body.classList.add("loaded");

  // Section fade-in on scroll
  const fadeSections = document.querySelectorAll(".fade-section");
  const revealOnScroll = () => {
    fadeSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
