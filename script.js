const blackColor = document.querySelector('.black');
window.addEventListener('load', function() {
  blackColor.classList.add('selected');
});

const colors = document.querySelectorAll('.color');
const divColors = document.body.children[0].children[1];

function selectedPallet(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.length === 3) {
      event.target.parentElement.children[index].classList.remove('selected');
    }
    if (colors[index].classList.length === 2) {
      event.target.classList.add('selected');
    }
  }
}

divColors.addEventListener('click', selectedPallet);

// A função de randomizar cores foi retirada do seguinte site: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript; Publicado em 20/02/2021.
function gerar_cor1(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  
  document.querySelector('.pink').style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

function gerar_cor2(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  
  document.querySelector('.purple').style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

function gerar_cor3(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  
  document.querySelector('.skyBlue').style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

gerar_cor1();
gerar_cor2();
gerar_cor3();

const table = document.querySelector('#pixel-board');
function copySelectedColor(event) {
  if (colors[0].classList.length === 3) {
    event.target.style.backgroundColor = 'black';
  }
  if (colors[1].classList.length === 3) {
    event.target.style.backgroundColor = document.querySelector('.pink').style.backgroundColor;
  }
  if (colors[2].classList.length === 3) {
    event.target.style.backgroundColor = document.querySelector('.purple').style.backgroundColor;
  }
  if (colors[3].classList.length === 3) {
    event.target.style.backgroundColor = document.querySelector('.skyBlue').style.backgroundColor;
  }
}

table.addEventListener('click', copySelectedColor);

const clearButton = document.querySelector('#clear-board');
function clearBoard() {
  for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);

const takeInput = document.querySelector('#board-size');
const takeGenerateButton = document.querySelector('#generate-board');
function createBoard() {
if (takeInput.value < 5 && takeInput.value > 0) {
  takeInput.value = 5;
} else if (takeInput.value > 50) {
  takeInput.value = 50;
}
if (takeInput.value === '') {
    window.alert('Board inválido!');
  } else {
    for (let index = table.children.length - 1; index >= 0; index -= 1) {
      table.children[index].remove();
    }
    for (let index = 0; index < takeInput.value; index += 1) {
      const trs = table.appendChild(document.createElement('tr'));
      for (let index2 = 0; index2 < takeInput.value; index2 += 1) {
        trs.appendChild(document.createElement('td')).className = 'pixel';
      }
    }
  }
}

takeGenerateButton.addEventListener('click', createBoard);
