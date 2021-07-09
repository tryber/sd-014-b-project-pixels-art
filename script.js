let blackColor = document.querySelector('.black');
window.addEventListener('load', function() {
  blackColor.classList.add('selected');
})

let colors = document.querySelectorAll('.color');
let divColors = document.body.children[0].children[1];
let selectColor = document.querySelector('.selected');

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

let table = document.querySelector('#pixel-board');
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

let clearButton = document.querySelector('#clear-board');
let cells = document.querySelectorAll('td');
function clearBoard () {
  for (let index = 0; index < cells.length; index += 1) {
    cells[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);
