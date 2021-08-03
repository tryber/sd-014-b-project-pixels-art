const rainbow = document.getElementById('color-palette');
const boxPixels = document.getElementById('pixel-board');
const buttonClear = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');
const boardSize = document.getElementById('board-size');
const gerarButton = document.getElementById('generate-board');

//selected (7) e meio do 10 :( 
gerarButton.addEventListener('click', () => {
  const boxSize = parseInt(boardSize.value, 10);
  if (boardSize.value.length === 0) {
    window.alert('Board inválido!');
  } else {
    console.log(boxSize);
  }
});
// rainbow.addEventListener('click', colorPixel);
// boxPixels.addEventListener('click', rainbowBoard);

// requisito 8
function colorPixel(event) {
  const pixColor = document.getElementById('color-palette').childNodes;
  for (let index = 1; index < pixColor.length; index++) {
      pixColor[index].className = 'color';
  }
  event.target.className = 'color selected';
}
rainbow.addEventListener('click', colorPixel);

function rainbowBoard(event) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  const selectedColor = window.getComputedStyle(colorSelected).backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}
boxPixels.addEventListener('click', rainbowBoard);

// buttonClear.addEventListener('click', backgroundWhite)

// requisito 9
function backgroundWhite() {
  for (let index = 0; index < pixels.length; index++ ) {
    pixels[index].style.backgroundColor = 'white';
  }
}
buttonClear.addEventListener('click', backgroundWhite);

// questão 12// referências: https://www.youtube.com/watch?v=mys7LGIlEf8&ab_channel=TECHNOLOGYFAQ
function generatorColor() {
  const newColor = document.getElementsByClassName('color');
  for (let index = 1; index < newColor.length; index += 1) {
    const index1 = Math.floor(Math.random() * (255));
    const index2 = Math.floor(Math.random() * (255));
    const index3 = Math.floor(Math.random() * (255));
    newColor[index].style.backgroundColor = `rgb(${index1}, ${index2},${index3})`; 
  }
}

generatorColor();

//questões 10