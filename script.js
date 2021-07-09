const divColors = document.querySelector('#color-palette');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const cleaner = document.querySelector('#clear-board');
const board = document.querySelector('#pixel-board');
let selectedDiv = document.querySelector('.selected');
let selectedColor;

//  FUNCTIONS
//  Função responsável por remover classe 'selected' da cor selecionada no momento
function clearSelection() {
  selectedDiv.classList.remove('selected');
}
//  Função responsável por adicionar classe 'selected' ao elemento selecionado
function addSelection(target) {
  target.classList.add('selected');
  selectedDiv = document.querySelector('.selected');
}
//  Função Responsável por pegar a cor da div selecionada
function getColor() {
  const property = window.getComputedStyle(selectedDiv, null).getPropertyValue('background-color');
  return property;
}
//  Função responsável por pintar pixel
function paint(target) {
  target.style.backgroundColor = selectedColor;
}
//  Função responsável por limpar a board
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = '';
  }
}
//  Função responsável por criar rows da matriz
function buildRow(number) {
  const divRow = document.createElement('div');
  divRow.className = 'row';
  for (let index = 0; index < number; index += 1) {
    const divCell = document.createElement('div');
    divCell.className = 'pixel';
    divRow.appendChild(divCell);
  }
  board.appendChild(divRow);
}
//  Função responsável por construir board
function buildBoard(number) {
  board.innerHTML = '';
  for (let index = 0; index < number; index += 1) {
    buildRow(number);
  }
}
function generateColor() { // Inspirado em código achado no seguint url (https://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript/1152508)
  const first = Math.floor(Math.random() * 256);
  const second = Math.floor(Math.random() * 256);
  const third = Math.floor(Math.random() * 256);
  return `rgb(${first}, ${second}, ${third})`;
}
//  DEFINIÇÕES PÓS FUNÇÕES
selectedColor = getColor(selectedDiv);

//  EVENTOS
//  Gerando cores
window.onload = function () {
  color1.style.backgroundColor = generateColor();
  color2.style.backgroundColor = generateColor();
  color3.style.backgroundColor = generateColor();
};
//  Adicionando evento de clique nas cores da paleta
divColors.addEventListener('click', function (event) {
  clearSelection();
  addSelection(event.target);
  selectedColor = getColor();
});
//  Adicionando evento de clique na pixel-board
board.addEventListener('click', function (event) {
  paint(event.target);
});
// Adicionando evento de clique no botão limpar
cleaner.addEventListener('click', function () {
  clearBoard();
});
//  Adicionando evento de clique no botão generate board
generateBoard.addEventListener('click', function () {
  let number = 0;
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    number = 5;
    buildBoard(number);
  } else if (boardSize.value > 50) {
    number = 50;
    buildBoard(number);
  } else {
    number = boardSize.value;
    buildBoard(number);
  }
});