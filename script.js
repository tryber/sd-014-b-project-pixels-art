function createColors() {
  const cores = ['black', 'red', 'blue', 'green'];
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
  const colorInitial = document.querySelectorAll('.color');
  colorInitial[0].classList.add('selected');
};

function selectedClass() {
  const elementClass = document.querySelectorAll('.color');
  for (let i = 0; i < elementClass.length; i += 1) {
    elementClass[i].addEventListener('click', () => {
      for (let x = 0; x < elementClass.length; x += 1) {
        const elementX = elementClass[x].classList;
        if (elementX.contains('selected')) {
          elementX.remove('selected');
        }
        elementClass[i].classList.add('selected');
      }
    });
  }
}
selectedClass();

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for(let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      const selectedBlock = document.querySelector('.selected');
      const colorBlock = window.getComputedStyle(selectedBlock, null).backgroundColor;
      pixels[i].style.backgroundColor = colorBlock;
    });
  }
}
paintPixel();
