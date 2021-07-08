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

let pixel = document. querySelectorAll("#pixel-board td");
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].classList.add("pixel");
}

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
  console.log(event.target);
}
