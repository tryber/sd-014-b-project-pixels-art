const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const createCanvasButton = document.querySelector('#generate-board');
const colorToPick = ['#1b998b', '#ed217c', '#2d3047', '#fffd82', '#ff9b71', '#d8cfaf', '#e6b89c', '#ed9390', '#f374ae', '#32533d', '#042a2b', '#5eb1bf', '#54f2f2', '#f4e04d', '#f3752b', '#a20021'];
const colors = ['black'];
const minPixelBoard = 5;
const maxPixelBoard = 50;
const colorsPalette = document.getElementsByClassName('color');

let selectedColor = document.querySelector('.selected');
let boardValue = 0;

function generateColors() {
  for (let i = 0; i < 4; i += 1) {
    let randomIndex = Math.floor(Math.random() * (colorToPick.length - 0) + 0);
    let randomColor = colorToPick[randomIndex];
    if (colors.includes(randomColor)) {
		randomIndex = Math.floor(Math.random() * (colorToPick.length - 0) + 0);
		randomColor = colorToPick[randomIndex];
	}
	colors.push(randomColor);
  }
}

function setSelectedColor(event) {
	selectedColor = document.querySelector('.selected');
	selectedColor.classList.remove('selected');
	const newSelectedColor = event.target;
	newSelectedColor.classList.add('selected');
	selectedColor = document.querySelector('.selected');
}

function setColorsInPalette() {
	for (let i = 0; i < colorsPalette.length; i += 1) {
		const color = colorsPalette[i];
		color.style.backgroundColor = colors[i];
		color.addEventListener('click', setSelectedColor);
	}
	const erase = document.querySelector('.erase')
	erase.addEventListener('click', setSelectedColor);
	colorsPalette[0].classList.add('selected');
}

function setPixelBoardValues(element) {
	const pixel = element;
	pixel.style.width = '41px';
	pixel.style.height = '41px';
	pixel.style.backgroundColor = 'white';
	pixel.style.padding = '0px';
	pixel.style.border = 'solid #61210f 1px';
	pixel.classList.add('pixel');
}

function fillColorInPixel(event) {
	const color = selectedColor.style.backgroundColor;
	const pixel = event.target;
	pixel.style.backgroundColor = color;
}

function addEventListenerToPixel() {
	const pixels = document.querySelectorAll('.pixel');

	for (let i = 0; i < pixels.length; i += 1) {
		const pixel = pixels[i];
		pixel.addEventListener('click', fillColorInPixel);
	}
}

function createInitialPixelBoard() {
	selectedColor = document.querySelector('.selected');
	boardValue = document.querySelector('#board-size').value;
	const value = 5;
	for (let i = 0; i < value; i += 1) {
		const line = document.createElement('tr');
		pixelBoard.appendChild(line);
		for (let j = 0; j < value; j += 1) {
			const colum = document.createElement('td');
			setPixelBoardValues(colum);
			line.appendChild(colum);
		}
	}
	addEventListenerToPixel();
}

function compareBoardSize() {
	boardValue = document.querySelector('#board-size').value;
	if (boardValue === '') {
		window.alert('Board inválido!');
	} else if (boardValue < minPixelBoard) {
		boardValue = minPixelBoard;
	} else if (boardValue > maxPixelBoard) {
		boardValue = maxPixelBoard;
	}
}

function clearPixelBoard() {
	const size = pixelBoard.children.length;

	for (let i = size - 1; i >= 0; i -= 1) {
		const child = pixelBoard.children[i];
		pixelBoard.removeChild(child);
	}
}

function generatePixelBoard() {
	compareBoardSize();
	clearPixelBoard();
	for (let i = 0; i < boardValue; i += 1) {
		const line = document.createElement('tr');
		pixelBoard.appendChild(line);
		for (let j = 0; j < boardValue; j += 1) {
			const colum = document.createElement('td');
			setPixelBoardValues(colum);
			line.appendChild(colum);
		}
	}
	addEventListenerToPixel();
}

function clearBoard() {
	const pixels = document.querySelectorAll('.pixel');

	for (let i = 0; i < pixels.length; i += 1) {
		const pixel = pixels[i];
		pixel.style.backgroundColor = 'white';
	}
}

//  Calling Functions in Order

generateColors();
setColorsInPalette();
createInitialPixelBoard();

//  Buttons

clearButton.addEventListener('click', clearBoard);
createCanvasButton.addEventListener('click', generatePixelBoard);
