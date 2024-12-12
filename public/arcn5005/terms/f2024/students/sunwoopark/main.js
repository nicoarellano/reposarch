const starsContainer = document.getElementById('stars');
const starsOverlay = document.createElement('div');
starsOverlay.id = 'stars-overlay';
document.body.appendChild(starsOverlay);

const starsToggle = document.getElementById('stars-toggle');

// Debugging click events
starsToggle.addEventListener('change', () => {
  console.log('Toggle state:', starsToggle.checked);
  if (starsToggle.checked) {
    starsContainer.style.display = 'block';
    starsOverlay.style.display = 'block';
  } else {
    starsContainer.style.display = 'none';
    starsOverlay.style.display = 'none';
  }
});

// Ensure stars are generated
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * 2 + 1;
  const xPos = Math.random() * window.innerWidth;
  const yPos = Math.random() * window.innerHeight;
  const animationDelay = Math.random() * 2 + 's';

  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.left = xPos + 'px';
  star.style.top = yPos + 'px';
  star.style.animationDelay = animationDelay;

  starsContainer.appendChild(star);
}

for (let i = 0; i < 200; i++) {
  createStar();
}

