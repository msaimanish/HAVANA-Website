// Set your event date (e.g., January 21, 2025, 10:32 AM local time)
// Set the event date in UTC
const targetUTCDate = new Date("2025-01-25T01:37:00Z");

// IST is UTC+5:30, which is 330 minutes
const offsetMinutes = (5 * 60) + 30;

// Convert the UTC date to IST
const eventDate = new Date(targetUTCDate.getTime() + offsetMinutes * 60 * 1000);

// Smooth count-up animation function
function animateCount(element, targetValue, duration) {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / (duration / 50));

    const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }
        element.innerText = String(currentValue).padStart(2, "0");
    }, 50);
}

// Initialize the countdown numbers
function initializeCountdown(days, hours, minutes, seconds) {
    animateCount(document.getElementById("days"), days, 1000);
    animateCount(document.getElementById("hours"), hours, 1000);
    animateCount(document.getElementById("minutes"), minutes, 1000);
    animateCount(document.getElementById("seconds"), seconds, 1000);
}

// Update the countdown
function updateCountdown() {
    const now = new Date();
    const timeRemaining = eventDate - now;

    if (timeRemaining <= 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerText = "Event has started!";
        const eventText = document.getElementById("event-start-text");
        eventText.style.opacity = 0;
        setTimeout(() => {
            eventText.style.display = "none";
        }, 500); // Fade out effect
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

// Initialize and start the countdown
function startCountdown() {
    const now = new Date();
    if (eventDate < now) {
        document.getElementById("timer").innerText = "Event has started!";
        document.getElementById("event-start-text").innerText = "";
        return;
    }

    const timeRemaining = eventDate - now;
    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        initializeCountdown(days, hours, minutes, seconds);
    }
}

startCountdown();
const countdown = setInterval(updateCountdown, 1000);
