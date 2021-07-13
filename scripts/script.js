console.log('Hello, world!');
// Referência: Usada para gerar um valor hexadecimal aleatoriamente e usar para aplciar cores no elemento.
// src: https://css-tricks.com/snippets/javascript/random-hex-color/
function setColors() {
  const colors = document.querySelectorAll('.color');
  colors.forEach((element) => {
    const color = element;
    const randomColor = Math.floor(Math.random() * 16777209).toString(16);
    color.style.backgroundColor = `#${randomColor}`;
  });
  colors[0].style.backgroundColor = 'black';
}

function setBoard(length) {
  const board = document.querySelector('#pixel-board');
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }
  for (let indexLine = 0; indexLine < length; indexLine += 1) {
    const line = document.createElement('div');
    line.id = 'line';
    board.appendChild(line);
    for (let index = 0; index < length; index += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
}

// function setBoardRows(length) {
//   for (let index = 0; index < length; index += 1) {
//     const row = document.createElement('div');
//     row.classList.add('row');
//     document.querySelector('#pixel-board').appendChild(row);
//   }
// }

// function setPixels() {
//   const rows = document.querySelectorAll('.row');
//   rows.forEach((element) => {
//     const row = element;
//     for (let index = 0; index < rows.length; index += 1) {
//       const pixel = document.createElement('div');
//       pixel.classList.add('pixel');
//       row.appendChild(pixel);
//     }
//   });
// }
function pickColor() {
  document.querySelectorAll('.color').forEach((element) => {
    element.addEventListener('click', (event) => {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  });
}

function fillPixel() {
  document.querySelectorAll('.pixel').forEach((element) => {
    element.addEventListener('click', (event) => {
      const pixel = event.target;
      const color = document.querySelector('.selected').style.backgroundColor;
      pixel.style.backgroundColor = color;
    });
  });
}

function clearBoard() {
  document.querySelector('#clear-board').addEventListener('click', () => {
    document.querySelectorAll('.pixel').forEach((element) => {
      const pixel = element;
      pixel.style.backgroundColor = 'white';
    });
  });
}

function getBoardSize() {
  const genBoardBtn = document.querySelector('#generate-board');
  genBoardBtn.addEventListener('click', () => {
    const boardSize = document.querySelector('#board-size').value;
    if (boardSize === '') {
      alert('Board inválido!');
      return;
    }
    if (boardSize < 5) {
      setBoard(5);
    } else if (boardSize > 50) {
      setBoard(50);
    } else {
      setBoard(boardSize);
      fillPixel();
    }
  });
}

window.onload = () => {
  setColors();
  setBoard(5);
  getBoardSize();
  // setBoardRows(5);
  // setPixels();
  pickColor();
  fillPixel();
  clearBoard();
};
