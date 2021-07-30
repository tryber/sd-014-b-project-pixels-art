let pblack = document.querySelector('#black');
let pblack2 = document.getElementById('#black');


let cor;

//pblack.addEventListener('click', pintar) { }

let ppixel = document.querySelector('.pixel');

//window.onload = { }

function pintar (event){
    ppixel.style.backgroundColor = black;
    
}

ppixel.addEventListener("change", pintar);