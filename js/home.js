// Select the section you want to animate
const titleSection = document.querySelector('.title-image-text-section');

// Create an Intersection Observer to detect when the section is in view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the section is in view, add the "visible" class to trigger animation
        if (entry.isIntersecting) {
            titleSection.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); // 50% of the section should be visible before triggering

// Observe the section
observer.observe(titleSection);

// Detect when the section comes into view
window.addEventListener('scroll', () => {
    const yellowCardSection = document.querySelector('.yellow-card-section');
    const tiles = document.querySelectorAll('.tile');

    // Check if the yellow card section is in the viewport
    const sectionRect = yellowCardSection.getBoundingClientRect();
    if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
        yellowCardSection.classList.add('visible'); // Add visible class to yellow section

        // Add visible class to each tile with a delay
        tiles.forEach((tile, index) => {
            setTimeout(() => {
                tile.classList.add('visible');
            }, index * 300); // Delay each tile appearance
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const gallerySection = document.querySelector(".gallery-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gallerySection.classList.add("gallery-visible");
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(gallerySection);
});

