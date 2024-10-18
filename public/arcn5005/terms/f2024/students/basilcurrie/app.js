let slider = document.getElementById('rang');
let val = document.getElementById('val');
let mail = document.getElementById('mail');
let mailbutton = document.getElementById('mailbutton');
let mailout = document.getElementById('mailout');
let avatar = document.getElementById('avatar');

slider.addEventListener('input', function(){
    val.textContent = '(' + String(this.value).substr(0,3) + ') ' + String(this.value).substr(3,3) + '-' + String(this.value).substr(6,4);
    avatar.style.transform = "translate(" + [(this.value-1000000000)/8999999999*5] + "in)rotate(" + [(this.value-1000000000)/8999999999*720] + "deg)";
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
