//const query = document.querySelector.bind(document);
//const queries = document.querySelectorAll.bind(document);

function criaPixel(quant) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < quant; i += 1) {
    const pixel = document.createElement('div');

    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
criaPixel(25);

function firstBlack() {
  const color1 = document.querySelector('.black');
  color1.classList.add('selected');
}
firstBlack();

function seleciona() {
  const blackColor = document.querySelector('.black');
  const redColor = document.querySelector('.red');
  const yellowColor = document.querySelector('.yellow');
  const blueColor = document.querySelector('.blue');

  function selectColor(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  blackColor.addEventListener('click', selectColor);
  redColor.addEventListener('click', selectColor);
  yellowColor.addEventListener('click', selectColor);
  blueColor.addEventListener('click', selectColor);
}
seleciona();

function getColor() {
  let selec = document.querySelector('.selected');
  return selec.classList[1];
}

function print() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const element = pixels[i];
    element.addEventListener('click', function () {
      element.style.backgroundColor = `${getColor()}`;
    });
  }
}
print();

function clearButton() {
  let button = document.querySelector('#clear-board');
  let pixels = document.querySelectorAll('.pixel');
  console.log(pixels.length);
  button.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i += 1) {
      let pixel = pixels[i];

      pixel.style.backgroundColor = 'white';
    }
  });
}
clearButton();
