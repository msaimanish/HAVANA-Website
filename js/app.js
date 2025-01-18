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

function exploreEvent(themeNumber) {
    // Hide all theme containers initially
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => container.classList.remove('active'));

    // Hide all content boxes across all themes (containers)
    const allBoxes = document.querySelectorAll('.content-box');
    allBoxes.forEach(box => box.classList.add('hidden'));

    // Show the selected theme container
    const selectedContainer = document.getElementById(`theme${themeNumber}`);
    if (selectedContainer) {
        selectedContainer.classList.add('active');
        selectedContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Now, create dynamic buttons if not already created
        const buttonsContainer = selectedContainer.querySelector('.dynamic-buttons-container');
        if (!buttonsContainer) {
            createDynamicButtons(selectedContainer, themeNumber); // Pass theme number to button creation function
        }

    }
}

// Function to create the dynamic buttons inside the theme container
function createDynamicButtons(container, themeNumber) {
    // Ensure there's a container for the buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'dynamic-buttons-container';
    container.prepend(buttonsContainer); // Prepend to make it appear at the top

    // Button names and their respective actions
    const buttonNames = [
        { name: 'About', boxId: `theme${themeNumber}-box1` },
        { name: 'Timeline', boxId: `theme${themeNumber}-box2` },
        { name: 'Contact', boxId: `theme${themeNumber}-box3` }
    ];

    // Add buttons for each section
    buttonNames.forEach(buttonInfo => {
        const button = document.createElement('button');
        button.textContent = buttonInfo.name;
        button.className = 'dynamic-button';
        button.onclick = () => toggleBoxVisibility(themeNumber, buttonInfo.boxId); // Pass theme number to toggle function
        buttonsContainer.appendChild(button);
    });

    // Special Button (e.g., "Special Offer")
    const specialButton = document.createElement('button');
    specialButton.textContent = 'Download Rulebook';
    specialButton.className = 'dynamic-button special';
    specialButton.onclick = () => downloadPDF(`theme${themeNumber}.pdf`); // Unique PDF for each theme
    buttonsContainer.appendChild(specialButton);
}

// Function to handle PDF download
function downloadPDF(pdfName) {
    const link = document.createElement('a');
    link.href = `RULEBOOKS/${pdfName}`; // Update with the actual path to the PDFs
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Function to toggle visibility of content boxes within a specific theme
function toggleBoxVisibility(themeNumber, boxId) {
    // Hide all content boxes for the selected theme
    const boxes = document.querySelectorAll(`#theme${themeNumber} .content-box`);
    boxes.forEach(box => box.classList.add('hidden')); // Hide all boxes within the theme

    // Show the selected box
    const selectedBox = document.getElementById(boxId);
    if (selectedBox) {
        selectedBox.classList.remove('hidden');
    }
}
