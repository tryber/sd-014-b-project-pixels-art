function generateRandomColor() {
  let randomColor = document.querySelectorAll('.color');
  randomColor[0].style.background = 'black';
  for (let index = 1; index < randomColor.length; index += 1) {
    let random = () => [Math.floor(Math.random() * 255)];
    let color = `rgb(${random()}, ${random()}, ${random()})`;
    randomColor[index].style.background = color;
  }
}
generateRandomColor();

let color = 'black';
const board = document.querySelector('#color-palette');
board.addEventListener('click', function(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
  color = event.target.style.background;
})

const colorTable = document.querySelector('#pixel-board');
colorTable.addEventListener('click', function(event) {
  if (event.target.classList.value.includes('pixel')) {
    event.target.style.background = color;
  }
})

const button = document.querySelector('#clear-board');
button.addEventListener('click', function() {
  let pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.background = 'white';
  }
})