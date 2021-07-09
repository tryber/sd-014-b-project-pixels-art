document.getElementById('black').classList.add('selected');

const palletColors = document.querySelectorAll('.color');

function checkPallet(array) {
  const colorArray = array;
  const color = ['black', 'blue', 'red', 'yellow'];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === palletColors[index]) {
      colorArray[index].style.backgroundColor = color[index];
    }
  }
}
checkPallet(palletColors);

function selectColor(event) {
  for (let index = 0; index < palletColors.length; index += 1) {
    palletColors[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

for (let index = 0; index < palletColors.length; index += 1) {
  palletColors[index].addEventListener('click', selectColor);
}

const pixels = document.querySelectorAll('.pixel');
function paintPixel(event) {
  const evento = event;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  evento.target.style.backgroundColor = selectedColor;
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paintPixel);
}

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);
