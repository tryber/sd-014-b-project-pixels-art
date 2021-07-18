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