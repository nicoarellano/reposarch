// Number of ladybugs
const ladybugCount = 30;

// Variable to track whether ladybugs are active
let ladybugsActive = false; // Start with ladybugs turned off

// Function to create ladybugs
function createLadybugs() {
  for (let i = 0; i < ladybugCount; i++) {
    const ladybug = document.createElement('div');
    ladybug.classList.add('ladybug');

    // Set random starting position
    ladybug.style.left = `${Math.random() * window.innerWidth}px`;
    ladybug.style.top = `${Math.random() * window.innerHeight}px`;

    // Append ladybug to the body
    document.body.appendChild(ladybug);
  }
}

// Function to clear all ladybugs
function clearLadybugs() {
  document.querySelectorAll('.ladybug').forEach((ladybug) => ladybug.remove());
}

// Toggle button functionality
const toggleButton = document.getElementById('toggleEffect');
toggleButton.addEventListener('click', () => {
  ladybugsActive = !ladybugsActive;

  if (ladybugsActive) {
    toggleButton.textContent = 'Turn Off Ladybugs';
    createLadybugs();
  } else {
    toggleButton.textContent = 'Turn On Ladybugs';
    clearLadybugs();
  }
});

// Initialize with ladybugs off
toggleButton.textContent = 'Turn On Ladybugs';