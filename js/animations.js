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

// Smooth Scroll to Sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


document.querySelector('a[href="index.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

document.querySelector('a[href="event-details.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'event-details.html';
});

document.querySelector('a[href="our-team.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'our-team.html';
});

document.querySelector('a[href="about_us.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'about_us.html';
});

document.querySelector('.register-btn-container a').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default behavior
    window.open('event-details.html', '_blank');  // Opens in a new tab
});



window.addEventListener('load', function() {
    // Wait 2 seconds (to let the loader animation play)
    setTimeout(function() {
      // Add the 'loaded' class to body to hide the loader and show the content
      document.body.classList.add('loaded');
    }, 2000); // 2 seconds
  });
  
  function toggleMenu() {
    var menu = document.getElementById('dropdown-menu');
    var hamburger = document.getElementById('hamburger-menu');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}



