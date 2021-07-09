function criaPixel(quant) {
  let pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < quant; i++) {
    const pixel = document.createElement('div');

    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
criaPixel(25);

function firstBlack() {
  let color1 = document.querySelector('#cor1');
  color1.classList.add('selected');
}
firstBlack();

function print(color) {
  let pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i++) {
    let element = pixels[i];
    element.addEventListener('click', function () {
      element.style.backgroundColor = `${color}`;
    });
  }
}

function getColor() {
  let selec = document.querySelector('.selected');
  print(selec.classList[1]);
}

/*changeSelec();
function changeSelec() {
  let colors = document.getElementsByClassName('color');

  for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    element.addEventListener('click', function (who) {
      if (who.target !== element) {
        for (const i of colors) {
          i.classList.remove('selected');
        }
      }
      who.target.classList.add('selected');
      console.log(who.target);
      console.log(document.querySelectorAll('selected'));
    });
  }
}
changeSelec();*/

function clearButton() {
  let button = document.querySelector('#clear-board');
  let pixels = document.querySelectorAll('.pixel');
  console.log(pixels.length)
  button.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i++) {
      const pixel = pixels[i];

      pixel.style.backgroundColor = 'white';
    }
  });
}
clearButton();

/*
const blackColor = document.querySelector('.black');
const redColor = document.querySelector('.red');
const orangeColor = document.querySelector('.orange');
const yellowColor = document.querySelector('.yellow');

function pintaPixel(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}
blackColor.addEventListener('click', pintaPixel);
redColor.addEventListener('click', pintaPixel);
orangeColor.addEventListener('click', pintaPixel);
yellowColor.addEventListener('click', pintaPixel);
*/