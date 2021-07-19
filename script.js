const palette = document.querySelectorAll('.color');
const black = document.querySelector('#black');
const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const teal = document.querySelector('#teal');
const mosaic = document.querySelector('#pixel-board');
const btnContainer = document.querySelector('#button-container');
let selected = document.querySelector('.selected');
let pixels = document.querySelectorAll('.pixel');

function generateClearBoardButton() {
  let clearBoardButton = document.createElement('button');
  clearBoardButton.id = 'clear-board';
  clearBoardButton.innerText = 'Limpar';
  btnContainer.appendChild(clearBoardButton);
  clearBoardButton.addEventListener('click', clearBoard);
}
generateClearBoardButton();

function takeColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function paintBox(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function clearBoard() {
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

function generateInputData(){
    let input = document.createElement('input');
    input.id = 'board-size';
    input.type = 'number';
    input.min = '1'; 
    input.max = '50';
    btnContainer.appendChild(input);
}
generateInputData();

function generateInputButton (){
    let inputBtn = document.createElement('button');
    inputBtn.id = 'generate-board';
    inputBtn.innerText = 'VQV';
    btnContainer.appendChild(inputBtn);
    inputBtn.addEventListener('click', createInteractibleBoard );
}
generateInputButton();

function createInteractibleBoard(){
    let inputData = document.querySelector('#board-size').value;
    console.log(inputData);
    if (inputData < 1){
        alert ('Board inválido!');
    }else if (inputData < 5){
        inputData = 5;
    }else if (inputData > 50){
        inputData = 50
    }
    mosaic.querySelector('tbody').innerHTML = '';
    for (let index = 0; index < inputData; index += 1){
        row = document.createElement('tr');
        mosaic.querySelector('tbody').appendChild(row);
        for (let index2 = 0; index2 < inputData; index2 += 1) {
            let cel = document.createElement('td');
            cel.classList.add('pixel');
            row.appendChild(cel);
        }
    }
}

function createRandomColors(){
    black.style.backgroundColor = '#000000';
    red.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    orange.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    teal.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}
createRandomColors();

black.addEventListener('click', takeColor);
red.addEventListener('click', takeColor);
orange.addEventListener('click', takeColor);
teal.addEventListener('click', takeColor);
mosaic.addEventListener('click', paintBox);
