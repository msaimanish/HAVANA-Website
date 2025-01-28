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
  


function showBox(id, button) {
    // Hide all boxes
    const boxes = document.querySelectorAll('.display-box');
    boxes.forEach(box => box.classList.remove('active-box'));

    // Show the selected box
    const selectedBox = document.getElementById(`box-${id}`);
    if (selectedBox) {
        selectedBox.classList.add('active-box');
    }

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.buttons-column button');
    buttons.forEach(btn => btn.classList.remove('active-button'));

    // Add active class to the clicked button
    button.classList.add('active-button');
}

// Check scroll direction and toggle the footer visibility for mobile
let lastScrollTop = 0;
const footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down: hide the footer
        footer.classList.add('footer-hidden');
    } else {
        // Scrolling up: show the footer
        footer.classList.remove('footer-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);



function toggleMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    hamburgerMenu.classList.toggle('active'); // Toggle hamburger icon animation
    dropdownMenu.classList.toggle('open'); // Toggle dropdown menu visibility and animation
}

// Detect scroll position
window.addEventListener('scroll', function() {
    const blackBox = document.querySelector('.black-box');

    // Check the scroll position and show the black box
    if (window.scrollY > 100) {  // Change 100 to any value you want
        blackBox.classList.add('visible');
    } else {
        blackBox.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.background-video');
    if (video) {
        video.play().catch(error => {
            console.error('Video autoplay failed:', error);
        });
    }
});

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


// Get all nav links
const navLinks = document.querySelectorAll("nav ul li a");

// Get the current URL path
const currentPath = window.location.pathname;

// Loop through the nav links and add the "active" class to the matching link
navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
