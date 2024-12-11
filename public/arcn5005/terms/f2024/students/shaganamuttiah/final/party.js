document.getElementById('party-button').addEventListener('click', () => {
  // Function to create hearts
  const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall duration
    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  // Create multiple hearts
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100); // Delay between hearts
  }

  // Add party banner
  const banner = document.createElement('div');
  banner.textContent = "party! party! party!";
  banner.classList.add('party-banner');
  document.body.appendChild(banner);

  // Remove banner after 5 seconds
  setTimeout(() => {
    banner.remove();
  }, 5000);
});
