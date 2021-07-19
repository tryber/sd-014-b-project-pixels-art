function changeColor(event) {
  const actual = document.querySelector('.selected');
  event.target.style.backgroundColor = actual.id;
}

function clearAll() {
  const array = document.querySelectorAll('.pixel');
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    element.style.backgroundColor = '';
  }
}

function createTable(numberOfColumns, numberOfLines) {
  const tableIntes = document.querySelector('#pixel-board');

  for (let index = 0; index < numberOfLines; index += 1) {
    const pixelsLines = document.createElement('tr');
    tableIntes.appendChild(pixelsLines);
    for (let i = 0; i < numberOfColumns; i += 1) {
      const pixelsColumns = document.createElement('td');
      pixelsColumns.addEventListener('click', changeColor);
      pixelsLines.appendChild(pixelsColumns);
      pixelsColumns.classList.add('pixel');
    }
  }
}
function generateColor() {
  let colors = document.querySelectorAll('.generate-color');
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 3; index += 1) {
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colors[index].style.backgroundColor = color;
    colors[index].setAttribute('id', color);
    color = '#';
  }
}

function selectElements(event) {
  let actual = document.querySelector('.selected');

  if (!event.target.classList.contains('.selected')) {
    actual.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function generateBoard() {
  let input = document.getElementById('board-size').value;
  if (input === '') {
    alert('Board inválido!');
  } else if (input > 50) {
    input = 50;
  } else if (input < 5) {
    input = 5;
  }
  document.querySelector('#pixel-board').innerText = '';
  createTable(input, input);
}

window.onload = function () {
  generateColor();
  createTable(5, 5);
  document.querySelector('#black').addEventListener('click', selectElements);
  document.querySelector('.colors1').addEventListener('click', selectElements);
  document.querySelector('.colors2').addEventListener('click', selectElements);
  document.querySelector('.colors3').addEventListener('click', selectElements);
  document.querySelector('#generate-board').addEventListener('click', generateBoard);
  document.querySelector('#clear-board').addEventListener('click', clearAll);
}
