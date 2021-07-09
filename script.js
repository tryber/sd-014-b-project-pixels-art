function createPixel(value) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < value; i += 1) {
    const boardItem = document.createElement('div');
    boardItem.className = 'pixel';
    pixelBoard.appendChild(boardItem);
  }
}
createPixel(5 ** 2);

function corPaleta() {
  document.querySelector('#color1').style.backgroundColor = 'black';
  document.querySelector('#color2').style.backgroundColor = 'red';
  document.querySelector('#color3').style.backgroundColor = 'orange';
  document.querySelector('#color4').style.backgroundColor = 'yellow';
}
corPaleta();

const blackColor = document.querySelector('.black');
const redColor = document.querySelector('.red');
const orangeColor = document.querySelector('.orange');
const yellowColor = document.querySelector('.yellow');

function pintaPixel(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}
blackColor.addEventListener('click', pintaPixel);
redColor.addEventListener('click', pintaPixel);
orangeColor.addEventListener('click', pintaPixel);
yellowColor.addEventListener('click', pintaPixel);
