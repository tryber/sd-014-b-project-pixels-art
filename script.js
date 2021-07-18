let getBlack = document.getElementsByClassName("color")[0];
let getRed = document.getElementsByClassName("color")[1];
let getGreen = document.getElementsByClassName("color")[2];
let getYellow = document.getElementsByClassName("color")[3];

getBlack.style.background = "black";
getRed.style.background = "red";
getGreen.style.background = "green";
getYellow.style.background = "yellow";

getBlack.classList.add("selected");


let getColor = document.getElementsByClassName("color");

for (i = 0; i < getColor.length; i += 1) {
getColor[i].addEventListener('click',function(){
    for (i2 = 0; i2 < getColor.length; i2 += 1) {
        getColor[i2].classList.remove('selected');
    }
    event.target.classList.add('selected');
    })
}

let getPixel = document.getElementsByClassName("pixel");
for (i3 = 0; i3 < getPixel.length; i3 +=1) {
    getPixel[i3].style.backgroundColor = "white";
}

for (i = 0; i < getPixel.length; i += 1) {
    getPixel[i].addEventListener('click',function(){
        for (i2 = 0; i2 < getPixel.length; i2 += 1) {
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