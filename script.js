document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("dynamic-text");

    // Define the words to display
    const phrases = ["Organized By", "Produced By", "Presented By"];
    let currentPhraseIndex = 0;

    // Function to set the text content dynamically
    function typeText() {
        textElement.textContent = ""; // Clear previous text
        const phrase = phrases[currentPhraseIndex];

        let i = 0;
        const typingInterval = setInterval(() => {
            textElement.textContent += phrase[i];
            i++;
            if (i === phrase.length) {
                clearInterval(typingInterval);
                currentPhraseIndex++;
                if (currentPhraseIndex < phrases.length) {
                    setTimeout(typeText, 2000); // Adjust timing between phrases
                }
            }
        }, 100);
    }

    // Start the animation
    typeText();
});


let currentIndex = 0; // Start with the first item

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider-item');
    
    // Remove 'focused' class from all items
    items.forEach(item => item.classList.remove('focused'));
    // Add 'focused' class to the current item
    items[currentIndex].classList.add('focused');
    
    // Move the slider to center the focused item
    slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

function slideLeft() {
    const items = document.querySelectorAll('.slider-item');
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
}

function slideRight() {
    const items = document.querySelectorAll('.slider-item');
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
}

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider-item');
    
    // Reset the scaling effect on all items
    items.forEach(item => item.classList.remove('focused'));
    
    // Apply the focus effect to the current item
    items[currentIndex].classList.add('focused');
    
    // Move the slider to show the focused item
    slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}
