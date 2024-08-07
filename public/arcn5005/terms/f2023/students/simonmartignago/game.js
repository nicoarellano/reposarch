// Dark mode toggle script
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Simple Guessing Game Script
const gameContainer = document.getElementById('game-container');
const secretNumber = Math.floor(Math.random() * 10) + 1;

gameContainer.innerHTML = `
  <h2>Guess the Number Game</h2>
  <p>I'm thinking of a number between 1 and 10. Can you guess it?</p>
  <input type="number" id="guess-input" placeholder="Enter your guess">
  <button id="guess-button">Submit Guess</button>
  <p id="result-message"></p>
`;

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');

guessButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    resultMessage.textContent = 'Please enter a valid number between 1 and 10.';
    resultMessage.style.color = 'red';
  } else {
    if (userGuess === secretNumber) {
      resultMessage.textContent = 'Congratulations! You guessed the correct number.';
      resultMessage.style.color = 'green';
    } else {
      resultMessage.textContent = `Sorry, the correct number was ${secretNumber}. Try again!`;
      resultMessage.style.color = 'red';
    }
  }
});
// Your existing code

// Function to toggle fullscreen
function toggleFullScreen(elementId) {
  const element = document.getElementById(elementId);

  if (document.fullscreenElement) {
    // If an element is in fullscreen, exit fullscreen
    document.exitFullscreen();
  } else {
    // If no element is in fullscreen, enter fullscreen
    element.requestFullscreen().catch((error) => {
      console.error(`Error attempting to enable full-screen mode: ${error.message}`);
    });
  }
}
