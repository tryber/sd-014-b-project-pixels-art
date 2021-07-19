let getBlack = document.getElementsByClassName("color")[0];
let getRed = document.getElementsByClassName("color")[1];
let getGreen = document.getElementsByClassName("color")[2];
let getYellow = document.getElementsByClassName("color")[3];

let symbols;
let color;
color = "#";
symbols = '0123456789ABCDEF';
for (let i=0;i<6;i++){
color = color + symbols[Math.floor(Math.random() * 16)];
}

let symbols2;
let color2;
color2 = "#";
symbols2 = '0123456789ABCDEF';
for (let i=0;i<6;i++){
color2 = color2 + symbols2[Math.floor(Math.random() * 16)];
}

let symbols3;
let color3;
color3 = "#";
symbols3 = '0123456789ABCDEF';
for (let i=0;i<6;i++){
color3 = color3 + symbols3[Math.floor(Math.random() * 16)];
}

getBlack.style.background = "black";
getRed.style.background = color;
getGreen.style.background = color2;
getYellow.style.background = color3;

getBlack.classList.add("selected");


let getColor = document.getElementsByClassName("color");

for (i = 0; i < getColor.length; i += 1) {
getColor[i].addEventListener('click',function(){
    for (i = 0; i < getColor.length; i += 1) {
        getColor[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
    })
}

let getPixel = document.getElementsByClassName("pixel");
for (i = 0; i < getPixel.length; i +=1) {
    getPixel[i].style.backgroundColor = "white";
}

for (i = 0; i < getPixel.length; i += 1) {
    getPixel[i].addEventListener('click',function(){
        for (i = 0; i < getPixel.length; i += 1) {
            let pinturinha = document.querySelector('.selected');
            if (getPixel[i].style.backgroundColor !== pinturinha.style.backgroundColor) {
                event.target.style.backgroundColor = pinturinha.style.backgroundColor;
            }
        }
    })
}

let botao = document.querySelector("#clear-board");
botao.addEventListener('click',function(){
    for (i = 0; i < getPixel.length; i += 1) {
        getPixel[i].style.backgroundColor = "white";
    }
})