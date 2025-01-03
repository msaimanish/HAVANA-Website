// Set your event date (e.g., July 1, 2025)
const eventDate = new Date("2025-2-03 15:20:00");



// Smooth count-up animation function
function animateCount(element, targetValue, duration) {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / (duration / 50)); // Increment value based on duration (ms)

    const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }
        element.innerText = String(currentValue).padStart(2, "0");
    }, 50); // Update every 50ms
}

// Function to initialize the countdown numbers
function initializeCountdown(days, hours, minutes, seconds) {
    animateCount(document.getElementById("days"), days, 1000);
    animateCount(document.getElementById("hours"), hours, 1000);
    animateCount(document.getElementById("minutes"), minutes, 1000);
    animateCount(document.getElementById("seconds"), seconds, 1000);
}

// Countdown update function
function updateCountdown() {
    const now = new Date(); // Get current time
    const timeRemaining = eventDate - now; // Time remaining in milliseconds

    // Check if the countdown has ended
    if (timeRemaining <= 0) {
        clearInterval(countdown); // Stop the interval
        document.getElementById("timer").innerText = "Event has started!";
        document.getElementById("event-start-text").innerText = ""; // Remove the "Event starts in" text
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the timer display without animation
    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

// Initialize the countdown once when the page loads
function startCountdown() {
    const now = new Date(); // Get current time
    const timeRemaining = eventDate - now; // Time remaining in milliseconds

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Animate from 0 to the current countdown values
        initializeCountdown(days, hours, minutes, seconds);
    } else {
        document.getElementById("timer").innerText = "Event has started!";
        document.getElementById("event-start-text").innerText = ""; // Remove the "Event starts in" text
    }
}

// Start the countdown logic
startCountdown();
const countdown = setInterval(updateCountdown, 1000); // Update the countdown every second
