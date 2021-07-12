const colorPalette = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
const clearButton = document.querySelector('#clear-board');
const sizeButton = document.querySelector('#generate-board');
const table = document.querySelector('table');

for (const colors of colorPalette) {
  colors.addEventListener('click', function (event) {
    for (let color of colorPalette) {
      color.classList.remove('selected');
    }
  event.target.classList.add('selected')
    })
}

function paint() {
  for (const pixel of pixels) {
    pixel.addEventListener('click', function (event) {
      const selectedColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
      event.target.style.backgroundColor = selectedColor;
    })
  }
}

paint();

clearButton.addEventListener('click', function () {
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});

function createTable() {
  let size = parseFloat(document.querySelector('#board-size').value);
  console.log(size)
  if (size < 0 || isNaN(size)) {
    return alert('Board inválido!');
  } else if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  } 
  table.removeChild(table.childNodes[1]);
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  for (let index = 0; index < size; index++) {
    let newX = document.createElement('tr');
    tbody.appendChild(newX);
    for (let indexSecond = 0; indexSecond < size; indexSecond++) {
      let newY = document.createElement('td');
      newY.className = 'pixel white';
      newX.appendChild(newY);
    }
  }
  pixels = document.querySelectorAll('.pixel');
  paint();
}

function randomColor() {
  const cores = document.querySelectorAll('.color');
  for (let index = 1; index < cores.length; index++) {
    const r = Math.trunc(Math.random() * 255);
    const g = Math.trunc(Math.random() * 255); 
    const b = Math.trunc(Math.random() * 255);
    cores[index].style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

randomColor();

sizeButton.addEventListener('click', createTable);
