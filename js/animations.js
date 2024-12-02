// animations.js
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


// Get the Havana and About sections
const havanaSection = document.getElementById("havana");
const aboutSection = document.getElementById("about");

// Function to check if the element is in view
// Function to check if the element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Add/remove class when the About section is in view
window.addEventListener('scroll', function() {
  const aboutSection = document.getElementById('about');
  if (isInView(aboutSection)) {
    aboutSection.classList.add('in-view');
  } else {
    aboutSection.classList.remove('in-view');
  }
});


// Select elements
const hamburgerMenu = document.getElementById("hamburger-menu");
const navMenu = document.querySelector("nav ul");

// Toggle menu on click
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open"); // Toggle the "open" class for animation
    navMenu.classList.toggle("active"); // Show/hide the navigation menu
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item, index) => {
        item.style.setProperty("--item-index", index);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item, index) => {
        item.style.setProperty("--item-index", index);
    });
});

// Scroll-Up Button
const scrollUpBtn = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
    // Show button when scrolled down 100px
    if (window.scrollY > 100) {
        scrollUpBtn.classList.add("visible");
    } else {
        scrollUpBtn.classList.remove("visible");
    }
});

scrollUpBtn.addEventListener("click", () => {
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

