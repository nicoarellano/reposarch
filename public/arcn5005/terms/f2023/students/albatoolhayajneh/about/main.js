document.addEventListener('DOMContentLoaded', function() {
    var movingImage = document.getElementById('movingImage');
    var isMoving = false;

    movingImage.addEventListener('mouseover', function() {
        if (isMoving) return; 

        isMoving = true;
        setTimeout(function() {
            var movementRange = 10; 
            var newX = Math.max(0, Math.min(window.innerWidth - movingImage.width, movingImage.offsetLeft + (Math.random() - 0.5) * movementRange));
            var newY = Math.max(0, Math.min(window.innerHeight - movingImage.height, movingImage.offsetTop + (Math.random() - 0.5) * movementRange));

            movingImage.style.left = newX + 'px';
            movingImage.style.top = newY + 'px';
            isMoving = false;
        }, 100); 
    });

    movingImage.addEventListener('click', function() {
        movingImage.src = 'resources/arch1.jpg';
        movingImage.style.width = '500px'; 
        movingImage.style.height = '500px'; 
        movingImage.style.position = 'static'; 

        
        document.body.style.backgroundImage = "url('resources/arch1.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
    });
});
