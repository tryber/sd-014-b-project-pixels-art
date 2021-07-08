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

function defineBlackColor(color) {
  const colorBlack = document.querySelectorAll('.pixel');
  for (let i = 0; i < colorBlack.length; i += 1) {
    colorBlack[i].style.backgroundColor = color;
    colorBlack[i].className += ' selected';
  }
}
defineBlackColor('black');

function selectColor() {
  const colorSelected = document.querySelectorAll('.color');
  for (let i = 0; i < colorSelected.length; i += 1) {
    colorSelected[i].addEventListener('click', function () {
      if (!colorSelected[i].classList.contains('selected')) {
        for (let index = 0; index < colorSelected.length; index += 1) {
          colorSelected[index].classList.contains('selected');
          if (colorSelected[index].classList.contains('selected')) {
            colorSelected[index].classList.remove('selected');
          }
        }
        colorSelected[i].classList.add('selected');            
      } else colorSelected[i].classList.remove('selected');
    })
  }
}
selectColor();