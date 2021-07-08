function addBlocks() {
  const lines = 5;
  const colunms = 5;
  const elementId = document.querySelector('#pixel-board');
  for (let iLine = 0; iLine < lines; iLine += 1) {
    for (let i = 0; i < colunms; i += 1) {
      let divs = document.createElement('div');
      divs.className = 'pixel';
      elementId.appendChild(divs);
    }
  }
}
addBlocks();

function defineBlackColor(color) { 
  let colorBlack = document.querySelectorAll('.pixel');
  for (let i = 0; i < colorBlack.length; i += 1) {
    colorBlack[i].style.backgroundColor = color;
    colorBlack[i].className += ' selected';
  }
}
defineBlackColor('black');
