/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable max-lines-per-function */

const sectionPalette = document.getElementById('color-palette');
const clearButton = document.getElementById('clear-board');
for (let i = 1; i <= 4; i += 1) {
  const divPalette = document.createElement('div');
  divPalette.className = 'color';
  sectionPalette.appendChild(divPalette);
}
const divsPalette = document.querySelectorAll('div');
const colors = ['black', 'green', 'blue', 'red'];
const divsIds = ['first-palette', 'second-palette', 'third-palette', 'fourth-palette'];

for (let i = 0; i < divsPalette.length; i += 1) {
  divsPalette[i].style.backgroundColor = colors[i];
  divsPalette[i].id = divsIds[i];
}
divsPalette[0].classList.add('selected');
const miniFrame = document.querySelectorAll('td');
for (let i = 0; i < miniFrame.length; i += 1) {
  miniFrame[i].className = 'pixel';
}
clearButton.addEventListener('click', () => {
  for (let i = 0; i < miniFrame.length; i += 1) {
    miniFrame[i].style.backgroundColor = 'white';
  }
});

function changeSelectedPalette(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}
const firstPalette = document.getElementById('first-palette');
const secondPalette = document.getElementById('second-palette');
const thirdPalette = document.getElementById('third-palette');
const fourthPalette = document.getElementById('fourth-palette');

firstPalette.addEventListener('click', changeSelectedPalette);
secondPalette.addEventListener('click', changeSelectedPalette);
thirdPalette.addEventListener('click', changeSelectedPalette);
fourthPalette.addEventListener('click', changeSelectedPalette);

function coloringFrame() {
  const table = document.getElementById('pixel-board');
  table.addEventListener('click', (event) => {
    const selectedElement = document.querySelector('.selected');
    event.target.style.backgroundColor = selectedElement.style.backgroundColor;
  });
}
coloringFrame();
