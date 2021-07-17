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

const table = document.querySelector('#pixel-board');
function copySelectedColor(event) {
  if (colors[0].classList.length === 3) {
    event.target.style.backgroundColor = 'black';
  }
  if (colors[1].classList.length === 3) {
    event.target.style.backgroundColor = 'rgb(255, 198, 255)';
  }
  if (colors[2].classList.length === 3) {
    event.target.style.backgroundColor = 'rgb(189, 178, 255)';
  }
  if (colors[3].classList.length === 3) {
    event.target.style.backgroundColor = 'rgb(155, 246, 255)';
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
