document.getElementById('black-box').style.backgroundColor = 'black';
document.getElementById('red-box').style.backgroundColor = 'red';
document.getElementById('green-box').style.backgroundColor = 'green';
document.getElementById('blue-box').style.backgroundColor = 'blue';

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

document.querySelector('#generate-board').addEventListener('click', () => {
  if (document.querySelector('#board-size').value === '' || parseInt(document.querySelector('#board-size').value) < 1 || parseInt(document.querySelector('#board-size').value) > 50) {
    alert('Board Inválido!');
  } else {
    document.querySelectorAll('.pixel').forEach((element) => { element.remove(); });
    const nPixel = JSON.parse(document.getElementById('board-size').value) * JSON.parse(document.getElementById('board-size').value);
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
