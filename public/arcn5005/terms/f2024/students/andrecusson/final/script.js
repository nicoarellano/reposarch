// name animation
const headerText = document.querySelector('.header h2');
setTimeout(() => {
  headerText.classList.add('loaded');
}, 500);

document.body.addEventListener('click', () => {
  headerText.classList.toggle('loaded');
});


//toggle button for map and three.js
document.getElementById("toggleButton").addEventListener("click", () => {
  const mapIframe = document.getElementById("maplibre");
  const threeJsIframe = document.getElementById("threejs");

  if (mapIframe.style.display !== "none") {
    mapIframe.style.display = "none";  // hide the map
    threeJsIframe.style.display = "block";  // show the Three.js scene
  } else {
    mapIframe.style.display = "block";  // show the map
    threeJsIframe.style.display = "none";  // hide the Three.js scene
  }
});

//slideshow
let currentIndex = 0;
const images = document.querySelectorAll('#profile-pic-container .profile-pic'); //  images from profile-pic-container
const totalImages = images.length;

function changeImage() {
  // hide the current image
  images[currentIndex].style.opacity = 0;

  // move to the next image
  currentIndex = (currentIndex + 1) % totalImages; // loop back to the first image after the last one

  // show the next image
  images[currentIndex].style.opacity = 1;
}

// change image every 3 seconds (3000ms)
setInterval(changeImage, 3000);
