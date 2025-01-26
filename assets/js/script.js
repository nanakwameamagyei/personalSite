feather.replace();

const phrases = [
  "Researcher",
  "IT Consultant",
  "UX/Frontend Developer",
  "Cloud Solutions Architect",
];

let index = 0; // Current phrase index
let charIndex = 0; // Current character index within the phrase
const typingSpeed = 100; // Speed of typing (ms per character)
const pauseBetweenPhrases = 2000; // Pause before starting the next phrase (ms)

function typeText() {
  const dynamicContent = document.getElementById("dynamic-content");
  const currentPhrase = phrases[index];

  if (charIndex < currentPhrase.length) {
    // Add the next character to the text content
    dynamicContent.textContent += currentPhrase[charIndex];
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    // Pause, then move to the next phrase
    setTimeout(() => {
      clearText();
    }, pauseBetweenPhrases);
  }
}

function clearText() {
  const dynamicContent = document.getElementById("dynamic-content");
  if (dynamicContent.textContent.length > 0) {
    // Remove one character at a time
    dynamicContent.textContent = dynamicContent.textContent.slice(0, -1);
    setTimeout(clearText, typingSpeed);
  } else {
    // Move to the next phrase
    charIndex = 0;
    index = (index + 1) % phrases.length; // Loop back to the first phrase
    typeText();
  }
}

// Start the typing effect
typeText();