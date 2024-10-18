let slider = document.getElementById('rang');
let val = document.getElementById('val');
let mail = document.getElementById('mail');
let mailbutton = document.getElementById('mailbutton');
let mailout = document.getElementById('mailout');

slider.addEventListener('input', function(){
    val.textContent = '(' + String(this.value).substr(0,3) + ') ' + String(this.value).substr(3,3) + '-' + String(this.value).substr(6,4);
})

mailbutton.addEventListener('click', function(){
    console.log('clicked');
    mailout.textContent = "Retrieving passwords...";
    document.body.style.cursor = "wait";
    document.body.style.backgroundImage = "none";
    document.getElementById('hidden').style.display = "block";
    document.querySelector('h2').style.fontFamily = "serif";
    document.querySelector('h6').style.fontFamily = "serif";
    document.querySelector('p').style.fontFamily = "serif";
})
