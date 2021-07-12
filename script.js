function createColors() {
  let cores = ['black', 'red', 'blue', 'green']
  const elementId = document.querySelector('#color-palette');
  for (let i = 0; i < 4; i += 1) {
    const elementColor = document.createElement('span');
    elementColor.className = 'color';
    elementId.appendChild(elementColor);
    elementColor.style.backgroundColor = cores[i];
  } 
}
createColors();

function addBlocks() {
  const lines = 5;
  const colunms = 5;
  const elementId = document.querySelector('#pixel-board');
  for (let iLine = 0; iLine < lines; iLine += 1) {
    for (let i = 0; i < colunms; i += 1) {
      const divs = document.createElement('div');
      divs.className = 'pixel';
      elementId.appendChild(divs);
    }
  }
}
addBlocks();

window.onload = function () {
  const colorInitial = document.querySelector('.color');
  colorInitial.classList.add('selected');
};
