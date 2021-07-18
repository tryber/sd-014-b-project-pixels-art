const colors = document.getElementsByClassName('color');
// coloca cor nos pixels
for (let i = 0; i < colors.length; i += 1) {
  if (i === 0) {
    colors[0].style.backgroundColor = 'black';
  }
  if (i === 1) {
    colors[1].style.backgroundColor = '#AB4E68';
  }
  if (i === 2) {
    colors[2].style.backgroundColor = '#533745';
  }
  if (i === 3) {
    colors[3].style.backgroundColor = '#9D9171';
  }
}
const firstColor = document.querySelector('#first-color');
const secondColor = document.querySelector('#second-color');
const thirdColor = document.querySelector('#third-color');
const fourthColor = document.querySelector('#fourth-color');

// cria pixel board
const pixelBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 25; i += 1) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('pixel');
  pixelBoard.appendChild(newDiv);
}

// seleciona cor na paleta
function oneClick(event) {
  const selectClass = document.querySelector('.selected');
  selectClass.classList.remove('selected');
  event.target.classList.add('selected');
}

firstColor.addEventListener('click', oneClick);
secondColor.addEventListener('click', oneClick);
thirdColor.addEventListener('click', oneClick);
fourthColor.addEventListener('click', oneClick);

// pintar pixel
function chooseColor(event) {
  const selectClass = document.querySelector('.selected');
  event.target.style.backgroundColor = selectClass.style.backgroundColor;
}
pixelBoard.addEventListener('click', chooseColor);
