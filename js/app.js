// Slider Elements
const items = document.querySelectorAll('.slider .list .item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const thumbnails = document.querySelectorAll('.thumbnail .item');

// Config Parameters
const totalItems = items.length;
let activeIndex = 0;

// Auto-Run Slider Interval
let sliderInterval = setInterval(nextSlide, 5000);

// Function: Update Active Slider
function updateActiveSlider(index) {
    // Remove active class from old elements
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    document.querySelector('.thumbnail .item.active')?.classList.remove('active');

    // Add active class to new elements
    items[index].classList.add('active');
    thumbnails[index].classList.add('active');

    // Adjust thumbnail position if necessary
    adjustThumbnailPosition();

    // Restart auto slider interval
    resetSliderInterval();
}

// Function: Show Next Slide
function nextSlide() {
    activeIndex = (activeIndex + 1) % totalItems;
    updateActiveSlider(activeIndex);
}

// Function: Show Previous Slide
function prevSlide() {
    activeIndex = (activeIndex - 1 + totalItems) % totalItems;
    updateActiveSlider(activeIndex);
}

// Function: Adjust Thumbnail Position
function adjustThumbnailPosition() {
    const activeThumbnail = document.querySelector('.thumbnail .item.active');
    if (activeThumbnail) {
        const rect = activeThumbnail.getBoundingClientRect();
        if (rect.left < 0 || rect.right > window.innerWidth) {
            activeThumbnail.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest', // Use 'nearest' to avoid unnecessary scrolling
                inline: 'center',
            });
        }
    }
}

// Function: Reset Auto-Run Interval
function resetSliderInterval() {
    if (sliderInterval) {
        clearInterval(sliderInterval);
    }
    sliderInterval = setInterval(nextSlide, 5000);
}

// Event Listeners
nextButton.addEventListener('click', () => {
    nextSlide();
    resetSliderInterval();  // Reset interval after manual slide
});

prevButton.addEventListener('click', () => {
    prevSlide();
    resetSliderInterval();  // Reset interval after manual slide
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") { // Left arrow key
        document.getElementById("prev").click();
    } else if (event.key === "ArrowRight") { // Right arrow key
        document.getElementById("next").click();
    }
});

// Event: Thumbnail Click
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        activeIndex = index;
        updateActiveSlider(activeIndex);
        resetSliderInterval();  // Reset interval after thumbnail click
    });
});

// Explore Event
function exploreEvent(themeNumber) {
    // Hide all containers
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => container.classList.remove('active'));
  
    // Show the selected container
    const selectedContainer = document.getElementById(`theme${themeNumber}`);
    if (selectedContainer) {
        selectedContainer.classList.add('active');
        // Smooth scroll to the selected container
        selectedContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

