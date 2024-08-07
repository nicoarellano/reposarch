//
    // In this solution, we use JavaScript to create a list of slides (one for each image) in 
    // the slideshow-container, in similar way that we create de dots. 
    // The rest of the solution is similar to JSSlideShow01, the diffrence is that  
    //  the list of slides is not hard-coded in the HTML.
    //
    var slideArray = ["img/tehran.jpg", "img/ramsar1.jpg", "img/hamedan.jpg", "img/shiraz.jpg", "img/tabriz.jpg"]
    var captionArray = ["Tehran", "Ramsar", "Hamedan", "Shiraz", "Tabriz"]

    setupSlides();
    setupDots();

    var slideIndex = 1;     // slides indexed from 1
    showSlides(slideIndex);

    var timeout = null;
    timeout = setTimeout(automaticChange, 7000);  // To avoid automatic slide change, comment this line

    function setupSlides() {
        var i;
        var slideSet = document.getElementsByClassName("slideSet")[0];
        for (i = 0; i < slideArray.length; i++) {
            var slide = document.createElement('div');      // create a new slide
            slide.className = "mySlides fade";              // set its classes to ber mySlides and fade

            var number = document.createElement('div');     // create the numbertex to be included in the new slide 
            number.className = "numbertext";
            number.innerHTML = (i + 1) + " / " + slideArray.length;
            slide.appendChild(number);

            var image = document.createElement('img');      // create the img to be included in the new slide
            image.style.width = "100%";
            image.src = slideArray[i];
            slide.appendChild(image);

            var caption = document.createElement('div');    // create the caption to be included in the new slide
            caption.className = "text";
            caption.innerHTML = captionArray[i];
            slide.appendChild(caption);

            slideSet.appendChild(slide);                    // add the new slide to the slideSet                            
        }
    }

    function setupDots() {
        var i;
        var dotSet = document.getElementsByClassName("dots-container")[0];
        for (i = 0; i < slideArray.length; i++) {
            var dot = document.createElement('span'); // create a new element of type (tag) span
            dot.className = "dot";                    // give it class="dot"
            dot.index = i + 1;                        // give it an attribute index to remember its index
            dot.onclick = function () { currentSlide(this.index) };  // give it the onclick event
            dotSet.appendChild(dot);                  // add it as a child to to div "dots-container"
        }
    }

    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
        /* if automaticChange is on, reset the timer */
        if (timeout !== null) {
            clearTimeout(timeout);
            timeout = setTimeout(automaticChange, 7000);
        }
    }

    function currentSlide(n) {
        slideIndex = n
        showSlides(slideIndex);
        /* if automaticChange is on, reset the timer */
        if (timeout !== null) {
            clearTimeout(timeout);
            timeout = setTimeout(automaticChange, 7000);
        }
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }   // if beyond the last one, go to the first one
        if (n < 1) { slideIndex = slides.length }   // if before the first one, go to the last one
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function automaticChange() {
        slideIndex++;
        showSlides(slideIndex);
        timeout = setTimeout(automaticChange, 7000);   // call again automaticChange() after 7s
    }