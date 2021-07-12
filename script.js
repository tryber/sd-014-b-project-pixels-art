// Requisito 5
let divPai = document.getElementById("pixel-board");
       
for(let index2 = 0; index2 <= 4; index2 +=1){
   let newSpan = document.createElement("span");
   newSpan.classList.add("pixel-line");
   newSpan.style.display = "block"
    divPai.appendChild(newSpan);
 }

let spanList = document.querySelectorAll(".pixel-line");

for(let index = 0; index <= 4; index +=1){
   for(let index3 = 0; index3 <= 4; index3 +=1){
    let newDiv = document.createElement("div");
    newDiv.classList.add("pixel");
    spanList[index].appendChild(newDiv);
   }
}  

// Requisito 7
let colorList = document.querySelectorAll(".color");
let pixelList = document.querySelectorAll(".pixel");
function addSelected(event){
   let getSelected = document.querySelector(".selected");
   getSelected.classList.remove("selected");
   event.target.classList.add("selected");
}

for(let index = 0; index < colorList.length; index +=1){
   colorList[index].addEventListener("click", addSelected);
}

// Requisito 12
let black = document.getElementById("black");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let blue = document.getElementById("blue");

let z = Math.trunc(Math.random()* 10);
let y = Math.trunc(Math.random()* 10);
let x = Math.trunc(Math.random()* 10);

if(x === 1) { x = "orange"}
else if(x === 2) { x = "green"}
else if(x === 3) { x = "blue"}
else if(x === 4) { x = "purple"}
else if(x === 5) { x = "brown"}
else if(x === 6) { x = "pink"}
else if(x === 7) { x = "cyan"}
else if(x === 8) { x = "gray"}
else if(x === 9) { x = "red"}
else if(x === 0) { x = "yellow"}

if(y === 1) { y = "orange"}
else if(y === 2) { y = "green"}
else if(y === 3) { y = "blue"}
else if(y === 4) { y = "purple"}
else if(y === 5) { y = "brown"}
else if(y === 6) { y = "pink"}
else if(y === 7) { y = "cyan"}
else if(y === 8) { y = "gray"}
else if(y === 9) { y = "red"}
else if(y === 0) { y = "yellow"}

if(z === 1) { z = "orange"}
else if(z === 2) { z = "green"}
else if(z === 3) { z = "blue"}
else if(z === 4) { z = "purple"}
else if(z === 5) { z = "brown"}
else if(z === 6) { z = "pink"}
else if(z === 7) { z = "cyan"}
else if(z === 8) { z = "gray"}
else if(z === 9) { z = "red"}
else if(z === 0) { z = "yellow"}

black.style.backgroundColor = "black";
orange.style.backgroundColor = x;
green.style.backgroundColor = y;
blue.style.backgroundColor = z;

// Requisito 8
function addColor(event){
   let getSelected = document.querySelector(".selected");
   let bgcSelected = getSelected.style.backgroundColor;
   event.target.style.backgroundColor = bgcSelected;
}

for(let index = 0; index < pixelList.length; index +=1){
   pixelList[index].addEventListener("click", addColor);
}
 
// Requisito 10
let getButton2 = document.getElementById("generate-board");
let getInput = document.getElementById("board-size");

function generateBoard(){
   let spanList = document.querySelectorAll(".pixel-line");
   let divPai = document.getElementById("pixel-board");
   let boardSize = getInput.value;
   let pixelList = document.querySelectorAll(".pixel");
   let getPixelline = document.querySelectorAll(".pixel-line");
   

   divPai.innerHTML = ""
   

   if(boardSize !== "" ){
      if(boardSize < 5){
         boardSize = 5;
      } else if (boardSize > 50){
         boardSize = 50;
      }

      for(let index2 = 0; index2 < boardSize; index2 +=1){
         let newSpan = document.createElement(("span"));
         newSpan.classList.add("pixel-line");
         newSpan.style.display = "block"
         divPai.appendChild(newSpan);
      }

      let spanList = document.querySelectorAll(".pixel-line");

      for(let index = 0; index < spanList.length; index +=1){
      for(let index3 = 0; index3 < boardSize ; index3 +=1){
         let newDiv = document.createElement("div");
         newDiv.classList.add("pixel");
         spanList[index].appendChild(newDiv);
         }
      }

// Requisito 7
let colorList = document.querySelectorAll(".color");
let pixelList = document.querySelectorAll(".pixel");
function addSelected(event){
   let getSelected = document.querySelector(".selected");
   getSelected.classList.remove("selected");
   event.target.classList.add("selected");
}

for(let index = 0; index < colorList.length; index +=1){
   colorList[index].addEventListener("click", addSelected);
}

// Requisito 8
function addColor(event){
   let getSelected = document.querySelector(".selected");
   let bgcSelected = getSelected.id
   event.target.style.backgroundColor = bgcSelected;
}

for(let index = 0; index < pixelList.length; index +=1){
   pixelList[index].addEventListener("click", addColor);
}
      
   } else {
      alert("Board inválido!");
   }
}
getButton2.addEventListener("click",generateBoard);

// Requisito 9
function emptyPixels(){
   let pixelList = document.querySelectorAll(".pixel");
   let divPai = document.getElementById("pixel-board");
   for(let index = 0; index < pixelList.length; index +=1){
      pixelList[index].style.backgroundColor = "white";
   }

}
let getButton = document.getElementById("clear-board");
getButton.addEventListener("click", emptyPixels);
