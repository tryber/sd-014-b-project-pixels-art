// Requisito 07
const black = document.querySelector('#black');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const yellow = document.querySelector('#yellow');
const boxes = document.querySelector('#pixel-board');

function selectedColor(event) {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectedColor);
green.addEventListener('click', selectedColor);
blue.addEventListener('click', selectedColor);
yellow.addEventListener('click', selectedColor);

// Requisito 08
function changeBgColorPixel(event) {
  const getColor = document.querySelector('.selected');
  event.target.style.backgroundColor = getColor.id;
}
boxes.addEventListener('click', changeBgColorPixel);

// Requisito 09
function clearButton() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (const value of pixels) {
      value.style.backgroundColor = 'white';
    }
  });
}

clearButton();
