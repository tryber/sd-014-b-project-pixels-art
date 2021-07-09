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

function mudaCor(evento) {
  for (i = 0; i < 5; i++) {
    let corAtual = document.querySelectorAll('.color');
    if (corAtual[i] === document.querySelector('.selected'))
      [(corAtual = corAtual[i].classList.remove('selected'))];
  }
  evento.target.classList.add('selected');
}

const pixelBo4rd = document.querySelector('#pixel-board');
pixelBo4rd.addEventListener('click', (e) => {
  const jáSelecionada =
    document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = jáSelecionada;
});

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', clearButton);
function clearButton() {
  document.querySelector('#pixel-board').style.backgroundColor = 'white';
}
