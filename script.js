window.onload = function (){
  boardSize.addEventListener('click', setBoard);
  clearPixels.addEventListener('click', clear);
  let first = document.querySelector('.color');
  first.classList.add('selected');
  for(let color of colors){
    color.addEventListener('click', selectColor);
  }
  colorPallete();
  first.style.backgroundColor = 'black';
  update();
  setBoard(5);
}

function update() {
  pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.addEventListener('click', paint);
  }
}

let colors = document.getElementsByClassName('color');
let pixels = document.querySelectorAll('.pixel');
let clearPixels = document.getElementById('clear-board');
let input = document.getElementById('board-size');
let boardSize = document.getElementById('generate-board');
let pixelBoard = document.querySelector('#pixel-board');

function setBoard(num){
  if(input.value < 5 && input.value !== ""){
    input.value = 5;
  }else if(input.value > 50){
    input.value = 50;
  }
  
  num === 5 
    ? (pixelBoardSize = num)
    : (pixelBoardSize = input.value); 
  
  if(pixelBoardSize !== ""){
    while(pixelBoard.firstChild){
      pixelBoard.removeChild(pixelBoard.lastChild);
    }
    for(let i = 0; i < pixelBoardSize; i++){
      let trElement = document.createElement('tr');
      for(let j = 0; j < pixelBoardSize; j += 1){
        let tdElement = document.createElement('td');
        tdElement.className = 'pixel';
        trElement.appendChild(tdElement);
      }
      pixelBoard.appendChild(trElement);
    }
    clear();
    update();
  }else{
    alert('Board inválido!');
  }
}

function selectColor(selectedColor){
  for(let color of colors){
    if(color.className.includes('selected')){
      color.classList.remove('selected');
    }
  }
  selectedColor.target.className += ' selected';
}

function paint(pixel){
  let selectedColor = document.querySelector('.selected');
  style = window.getComputedStyle(selectedColor);
  pixel.target.style.backgroundColor = style.backgroundColor; 
}

function clear(){
  for(let pixel of pixels){
    pixel.style.backgroundColor = 'white';
  }
}

function colorPallete(){
  for(color of colors){
    color.style.backgroundColor = randomColor()
  }
}

function randomColor(){
  let letters = '0123456789ABCDEF';
  let generatedColor = '#';
  for (var i = 0; i < 6; i++) {
    generatedColor += letters[Math.floor(Math.random() * 16)]; 
  }
  return generatedColor;
}
