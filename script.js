let paint = document.querySelector('#pixel-board');

function putColors () {
  let colorsPallet;
  colorsPallet = document.querySelectorAll('.color');
  //For baseado no do colega Glauco Lombeira
  for (let color of colorsPallet) {
    if (colorsPallet[0] === color) {
      color.style.backgroundColor = 'black';
      color.classList.add('selected');
    } else if (colorsPallet[1] === color) {
      color.style.backgroundColor = 'red';
    } else if (colorsPallet[2] === color) {
      color.style.backgroundColor = 'green';
    } else if (colorsPallet[3] === color) {
      color.style.backgroundColor = 'blue';
    }
  }
}

function createPixelBoard () {
  for (let index = 0; index < 5; index += 1){
    let tableRow = document.createElement('div');
    tableRow.className = 'pixel tr';
    document.querySelector('#pixel-board').appendChild(tableRow);
    for (let indexB = 0; indexB < 5; indexB += 1){
      let tableCell = document.createElement('div');
      tableCell.className = 'pixel td'
      document.querySelectorAll('.tr')[index].appendChild(tableCell);
    }
  }

}

function addListener () {
  document.querySelector('#black').addEventListener('click', changeSelectedColorBlack);
  document.querySelector('#red').addEventListener('click', changeSelectedColorRed);
  document.querySelector('#green').addEventListener('click', changeSelectedColorGreen);
  document.querySelector('#blue').addEventListener('click', changeSelectedColorBlue);
}

paint.addEventListener('click', (event) => {
  let alreadySelected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = alreadySelected;
});

function clearSelectedColor () {
  for(let index = 0; index < 5; index += 1){
    document.querySelectorAll('.color')[index].className = 'color';
  }
}
function changeSelectedColorBlack () {
  clearSelectedColor();
  document.querySelector('#black').className = 'color selected';
}
function changeSelectedColorYellow () {
  clearSelectedColor();
  document.querySelector('#yellow').className = 'color selected';
}
function changeSelectedColorRed () {
  clearSelectedColor();
  document.querySelector('#red').className = 'color selected';
}
function changeSelectedColorGreen () {
  clearSelectedColor();
  document.querySelector('#green').className = 'color selected';
}
function changeSelectedColorBlue () {
  clearSelectedColor();
  document.querySelector('#blue').className = 'color selected';
}

document.querySelector('#clear-board').addEventListener('click', () =>{
  for(pixel of document.querySelectorAll('.td')){
    pixel.style.backgroundColor = 'white';
  }
});

window.onload = function () {
  createPixelBoard();
  addListener();
  putColors();
}