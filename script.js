const black = document.querySelector('#black');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const orange = document.querySelector('#orange');

// selecionando as cores
function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
orange.addEventListener('click', selectColor);

// 8. aplicando as cores no pixel selecionado
/* Unless you have directly defined the backgroundColor on the element itself
   you have to use getComputedStyle() "stackoverflow"
   https://stackoverflow.com/questions/10556185/style-backgroundcolor-is-an-empty-string-in-javascript */
function selectPixel(event) {
  event.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
}

document.querySelector('#pixel-board').addEventListener('click', selectPixel);

// 9. botão clear
const button = document.querySelector('#clear-board');
const allPixels = document.querySelectorAll('.pixel');
function clear() {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clear);

// 10. quadro definido pelo tamanho usuario
function makeBoard() {
  let allPixelLine = document.querySelectorAll('.pixelLine');
  let size = document.querySelector('#board-size').value;

  if (size <= 0) {
    alert('Board inválido!');
  } else {
    if (size < 5) { size = 5; }
    if (size > 50) { size = 50;}
    console.log(size);
    allPixelLine = document.querySelectorAll('.pixelLine');
    for (let index = 0; index < allPixelLine.length; index += 1) {
      allPixelLine[index].remove('div');
    }
  }

  for (let x = 0; x < size; x += 1) {
    const div = document.createElement('div');
    div.className = 'pixelLine';
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(div);
  }

  allPixelLine = document.querySelectorAll('.pixelLine');
  for (let index = 0; index < allPixelLine.length; index += 1) {
    for (let i = 0; i < size; i+= 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      allPixelLine[index].appendChild(div);
    }
  }
}

const btnPixelBoard = document.querySelector('#generate-board');
btnPixelBoard.addEventListener('click', makeBoard);
