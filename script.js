const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const pixelBoard = document.getElementById('pixel-board');
const button = document.getElementById('clear-board');
const buttonVV = document.getElementById('generate-board');

function selected(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', selected);
}

function pixelColor(event) {
  const select = document.querySelector('.selected');
  const cor = select.id;
  const evento = event.target;
  evento.style.backgroundColor = cor;
}
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', pixelColor);
}

function clearButton() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearButton);

function GenerateBoard() {
  const input = document.getElementById('board-size');
  const values = input.value;
  if (values === '') {
    window.alert('Board inválido!');
  } else {
    pixelBoard.style.width = `${values * values}px`;
    pixelBoard.style.height = `${values * values}px`;
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
      pixel[index].style.width = `${input.values }px`;
      pixel[index].style.height = `${input.values}px`;
    }
  }
}
buttonVV.addEventListener('click', GenerateBoard);
