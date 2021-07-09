window.onload = function () {


const black = document.getElementById('black');
const green = document.getElementById('green');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

function clickColor(event) {
    const previousColor = document.querySelector('.selected');
    previousColor.classList.remove('selected');
    event.target.classList.add('selected');        
} 

black.addEventListener('click', clickColor);
green.addEventListener('click', clickColor);
red.addEventListener('click', clickColor);
blue.addEventListener('click', clickColor); 

document.querySelector(".pixel").classList.add("pixel-selected");

let pixelSelected = document.querySelectorAll(".pixel");
for (let index = 0; index < pixelSelected.length; index += 1) {
  pixelSelected[index].addEventListener("click", pickPixel);
  pixelSelected[index].addEventListener("click", changeColor);
};
function pickPixel(event) {
  let pixelClick = document.querySelector(".pixel-selected");
  pixelClick.classList.remove("pixel-selected");
  event.target.classList.add("pixel-selected");
}

let changeColorPixel = document.querySelector(".pixel-selected")
changeColorPixel.addEventListener("click", changeColor);


function changeColor () {
  let paleta = document.querySelector(".selected").id;
  let pixel = document.querySelector(".pixel-selected")
  pixel.style.backgroundColor = paleta;
}

}
