// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Typing effect for hero text
const heroText = document.querySelector(".typing-text");
const text = "I am Chandranath Mondal";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    heroText.innerHTML = text.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 100);
  }
}

heroText.innerHTML = "";
typeEffect();
// Optional small animation when clicking a button
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});
