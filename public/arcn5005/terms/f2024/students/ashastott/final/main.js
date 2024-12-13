setTimeout(() => {
    const fullscreenPhoto = document.getElementById('fullscreenPhoto');
    fullscreenPhoto.classList.add('show'); 
    setTimeout(() => {
      fullscreenPhoto.classList.remove('show');
    }, 10000);
  }, 20000);