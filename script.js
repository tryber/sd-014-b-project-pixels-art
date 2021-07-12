function creatPixel (value) {
    const pixelBoard = document.querySelector('#pixel-board');
    for (let i=0; i<value; i+= 1) {
const boardItem = document.createElement('div');
boardItem.className = 'pixel';
pixelBoard.appendChild(boardItem);
    }
}

creatPixel(5**2);

function corDaPaleta() {
    document.querySelector('#color1').style.backgroundColor = 'black';
    document.querySelector('#color2').style.backgroundColor = 'aqua';
  document.querySelector('#color3').style.backgroundColor = 'darkred';
  document.querySelector('#color4').style.backgroundColor = 'lawngreen';
}

corPaleta();

const blackColor = document.querySelector('.black');
const aquaColor = document.querySelector('.aqua');
const redColor = document.querySelector('.darkred');
const greenColor = document.querySelector('.lawngreen');

function pintaPixel(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  blackColor.addEventListener('click', pintaPixel);
  aquaColor.addEventListener('click', pintaPixel);
  redColor.addEventListener('click', pintaPixel);
  greenColor.addEventListener('click', pintaPixel);