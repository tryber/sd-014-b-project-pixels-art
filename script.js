function create(value) {
  const board = document.querySelector('#pixel-board');
  for (let i = 0; i < value; i += 1) {
    const boardItem = document.createElement('div');
    boardItem.className = 'pixel';
    board.appendChild(boardItem);
  }
}
create(5 ** 2);

function paletteColor() {
  document.querySelector('#color1').style.backgroundColor = 'black';
  document.querySelector('#color2').style.backgroundColor = 'red';
  document.querySelector('#color3').style.backgroundColor = 'green';
  document.querySelector('#color4').style.backgroundColor = 'blue';
}
paletteColor();

const blackColor = document.querySelector('.black');
const redColor = document.querySelector('.red');
const greenColor = document.querySelector('.green');
const blueColor = document.querySelector('.blue');

function fillPixel(evento) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  evento.target.classList.add('selected');
}

function changeColor(event) {
  for (i = 0; i < 5; i++) {
    let atual = document.querySelectorAll('.color');
    if (atual[i] === document.querySelector('.selected'))
      [(atual = atual[i].classList.remove('selected'))];
  }
  event.target.classList.add('selected');
}

const board= document.querySelector('#pixel-board');
board.addEventListener('click', (e) => {
  const select =
    document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = select;
});

const btn = document.querySelector('#clear-board');
btn.addEventListener('click', clearBtn);
function clearBtn() {
  document.querySelector('#pixel-board').style.backgroundColor = 'white';
}