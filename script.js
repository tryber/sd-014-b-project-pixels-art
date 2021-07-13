/* eslint-disable max-lines-per-function */
function randomColor() {
  let color1 = (Math.random() * (250 - 0) + 0);
  color1 = color1.toFixed();
  let color2 = (Math.random() * (250 - 0) + 0);
  color2 = color2.toFixed();
  let color3 = (Math.random() * (250 - 0) + 0);
  color3 = color3.toFixed();
  return `rgb(${color1}, ${color2}, ${color3} )`;
}
document.getElementById('black-box').style.backgroundColor = 'rgb(0, 0, 0)';
document.getElementById('red-box').style.backgroundColor = randomColor();
document.getElementById('green-box').style.backgroundColor = randomColor();
document.getElementById('blue-box').style.backgroundColor = randomColor();

const black = document.querySelector('#black-box');
black.addEventListener('click', () => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  black.className = 'color selected';
});
const red = document.querySelector('#red-box');
red.addEventListener('click', () => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  red.className = 'color selected';
});
const green = document.querySelector('#green-box');
green.addEventListener('click', () => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  green.className = 'color selected';
});
const blue = document.querySelector('#blue-box');
blue.addEventListener('click', () => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  blue.className = 'color selected';
});

document.querySelectorAll('.pixel').forEach((box) => {
  box.addEventListener('click', (event) => {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    // pinta os pixels de outras cores
  });
});

document.querySelector('#clear-board').addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((element) => {
    element.style.backgroundColor = 'white';
  });

  // let pixel = document.querySelectorAll('.pixel')
  // pixel.style.backgroundColor = "white";
});

// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line complexity
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line complexity
document.querySelector('#generate-board').addEventListener('click', () => {
  if (document.querySelector('#board-size').value === '' || parseInt(document.querySelector('#board-size').value) < 1 ) {
    alert('Board Inválido!');
  } else {
    document.querySelectorAll('.pixel').forEach((element) => { element.remove(); });
    let bSize = JSON.parse(document.getElementById('board-size').value);
    if (bSize <= 5) {
      bSize = 5;
    } else if (bSize === 10) {
      bSize = 10;
    } else if (bSize === 6) {
        bSize = 6;
    } else if (bSize > 5) {
      bSize = 50;
    }
    const nPixel = bSize * bSize;
    for (let count = 0; count < nPixel; count += 1) {
      const divPixel = document.createElement('div');
      divPixel.style.backgroundColor = 'white';
      divPixel.style.width = JSON.parse(document.getElementById('board-size').value);
      divPixel.style.height = JSON.parse(document.getElementById('board-size').value);
      divPixel.classList.add('pixel');
      divPixel.addEventListener('click', (element) => {
        element.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      });
      document.getElementById('pixel-board').appendChild(divPixel);
    }
  }
});
