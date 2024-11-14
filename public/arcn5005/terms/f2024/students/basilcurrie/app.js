let slider = document.getElementById('rang');
let val = document.getElementById('val');
let mail = document.getElementById('mail');
let mailbutton = document.getElementById('mailbutton');
let mailout = document.getElementById('mailout');
let avatar = document.getElementById('avatar');

slider.addEventListener('input', function(){
    val.textContent = '(' + String(this.value).substr(0,3) + ') ' + String(this.value).substr(3,3) + '-' + String(this.value).substr(6,4);
    avatar.style.transform = "translate(" + [(this.value-1000000000)/8999999999*5] + "in)rotate(" + [(this.value-1000000000)/8999999999*720] + "deg)";
    document.getElementById('words').style.transform = "translate(" + [(this.value-1000000000)/8999999999*5] + "in)";
    document.getElementById('words').style.transition = "none";
})

mailbutton.addEventListener('click', function(){
    console.log('clicked');
    mailout.textContent = "Retrieving passwords...";
    document.body.style.cursor = "wait";
    setTimeout(function(){
        document.getElementById('hidden').style.display = "block";
    }, 500);
    setTimeout(function(){
        document.getElementById('hidden').style.display = "none";
    }, 550);
    setTimeout(function(){
        document.getElementById('hidden').style.display = "block";
    }, 600);
    setTimeout(function(){
        document.getElementById('hidden').style.display = "none";
    }, 650);
    setTimeout(function(){
        document.getElementById('hidden').style.display = "block";
    }, 1000);
    setTimeout(function(){
        document.body.style.cursor = "crosshair";
        mailout.textContent = "Your passwords are safe with me";
        document.getElementById('hidden').textContent = "Your passwords are safe with me";
        document.querySelector('h2').textContent = "YOUR PASSWORDS ARE SAFE WITH ME";
        document.querySelector('p').textContent = "Your passwords are safe with me";
        document.querySelector('h6').textContent = "Your passwords are safe with me";
        document.querySelector('h3').textContent = "Your passwords are safe with me";
        document.body.style.backgroundImage = "none";
        wwindow.open()
    }, 3000);
    setTimeout(function(){
        document.getElementById('hidden').style.display = "none";
    }, 5000);
    setTimeout(function(){
        window.self.location.reload()
    }, 6000);
})
