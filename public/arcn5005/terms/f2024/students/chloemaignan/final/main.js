// Main JavaScript File

// Photo Gallery Slider Control
const slider = document.querySelector('.slider');
let currentSlide = 0;
const slideInterval = setInterval(() => {
  const totalSlides = slider.children.length;
  currentSlide = (currentSlide + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 20000);

// Interactive Button Hover Effect
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('hovered');
  });
  button.addEventListener('mouseout', () => {
    button.classList.remove('hovered');
  });
});

// Optional: Add dynamic content or interactivity
console.log("Welcome to my Architectural Portfolio!");
