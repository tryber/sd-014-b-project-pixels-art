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


let colors = document.querySelectorAll(".color");
for (let index = 1; index < colors.length; index += 1) {
  colors[index].addEventListener("click", pickColor);
  let color = getRandomColor();
  colors[index].style.backgroundColor = color;
  colors[index].id = color;
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  console.log(letters[Math.floor(Math.random() * 16)]);
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Função que seleciona a cor na paleta e atribui a classe "selected"
function pickColor (event) {
  let colorWithSelected = document.querySelector(".selected");
  colorWithSelected.classList.remove("selected");
  event.target.classList.add("selected");
}


document.querySelector(".pixel").classList.add("pixel-selected");

let pixelSelected = document.querySelectorAll(".pixel");

// For que seleciona pixels e pinta os que são clicados com a cor selecionada na paleta

for (let index = 0; index < pixelSelected.length; index += 1) {
  pixelSelected[index].addEventListener("click", pickPixel);
  pixelSelected[index].addEventListener("click", changeColor);
};

// Função que adiciona classe "pixel-selected" ao pixel clicado 

function pickPixel(event) {
  let pixelClick = document.querySelector(".pixel-selected");
  pixelClick.classList.remove("pixel-selected");
  event.target.classList.add("pixel-selected");
}

let changeColorPixel = document.querySelector(".pixel-selected")
changeColorPixel.addEventListener("click", changeColor);

// Função que atribui a cor ao pixel

function changeColor () {
  let paleta = document.querySelector(".selected").id;
  let pixel = document.querySelector(".pixel-selected")
  pixel.style.backgroundColor = paleta;
}

let buttonClear = document.querySelector("#clear-board");
buttonClear.addEventListener("click", clearSquare);

function clearSquare() {
  let pixelClear = document.querySelectorAll(".pixel");
  for (let index = 0; index < pixelClear.length; index += 1) {
    pixelClear[index].style.backgroundColor = 'white';
  }
}