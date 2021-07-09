/*
function makeFramePixel() {
  for (let index = 0; index < 5; index += 1) {
    let parentPixel = document.querySelector("#pixel-board")
    let pixel = document.createElement("table");
    pixel.classList.add("pixel");
    parentPixel.appendChild(pixel);
  }
}
*/

document.getElementById("pixel-board").style.marginLeft = "10px";

document.getElementById("black").classList.add("selected");


let blackColor = document.getElementById("black");
let yellowColor = document.getElementById("yellow");
let redColor = document.getElementById("red");
let blueColor = document.getElementById("blue");

blackColor.addEventListener("click", pickColor);
yellowColor.addEventListener("click", pickColor);
redColor.addEventListener("click", pickColor);
blueColor.addEventListener("click", pickColor);

function pickColor (event) {
  let colorWithSelected = document.querySelector(".selected");
  colorWithSelected.classList.remove("selected");
  event.target.classList.add("selected");
}

// Cria função para fazer armezanar o pixel que está selecionado (mesma lógica da pickColor) 

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

