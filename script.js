// exercício 7
const getColor = document.getElementsByClassName('color');

function getColors(evt) {
  console.log('yes');
  for (let index = 0; index < getColor.length; index += 1) {
    if (getColor[index].className !== 'color') {
      getColor[index].className = 'color';
    }
  }
  evt.target.className = 'color selected';
}

function colorEvent() {
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', getColors);
  }
}

colorEvent();

// exercício 8
const getPixel = document.getElementsByClassName('pixel');
const getSelected = document.getElementsByClassName('color selected');

function switchC(evt) {
  for (let index = 0; index < getPixel.length; index += 1) {
    evt.target.style.backgroundColor = getSelected[0].style.backgroundColor; 
  }
}

function switchColor() {
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].addEventListener('click', switchC);
  }
}
switchColor();

// exercício 9
const getButton = document.getElementById('clear-board');

function whipeColors() {
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].style.backgroundColor = 'white';
  }
}
function clickWhipeColors() {
  getButton.addEventListener('click', whipeColors);
}
clickWhipeColors();
