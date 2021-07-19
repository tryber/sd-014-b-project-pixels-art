window.onload = function() {
  function paletteColor() { 
    const getPalette = document.getElementsByClassName('color');
    for (let index of getPalette) {
      if (index === getPalette[0]) {
        index.style.background = 'black';
      } else if (index === getPalette[1]) {
        index.style.background = 'rgb(255,'+ Math.floor(Math.random() * 255) + ',' +Math.floor(Math.random() * 255) +')';
      } else if (index === getPalette[2]) {
        index.style.background = 'rgb(99,'+ Math.floor(Math.random() * 255) + ',' +Math.floor(Math.random() * 255) +')';
      } else if (index === getPalette[3]) {
        index.style.background = 'rgb('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ',' +Math.floor(Math.random() * 255) +')';
      }
     
      index.addEventListener('click', function(event) {
        for (let indexTwo = 0; indexTwo < getPalette.length; indexTwo += 1) {
          getPalette[indexTwo].classList.remove('selected');
          event.target.classList.add('selected');
        }
      });
    }
  }
  paletteColor();
}

const tableSize = 5;
const pixelsBoard = document.querySelector('#pixel-board');

function creatPixilsBoard(boardSize) {
  pixelsBoard.innerHTML = '';
  for (let index = 0; index < boardSize; index += 1) {
    const creatTr = document.createElement('tr');
    pixelsBoard.appendChild(creatTr);
    for (let indexTwo = 0; indexTwo < boardSize; indexTwo += 1) {
      const creatTd = document.createElement('td');
      creatTr.appendChild(creatTd);
      creatTd.classList.add('pixel')
    }
  }
}

creatPixilsBoard(tableSize);

const getTdPixels = document.querySelector('#pixel-board');
  
getTdPixels.addEventListener('click', function(event) {
  const selected = document.querySelector('.selected').style.background;
  event.target.style.backgroundColor  = selected;
});

const clearButton = document.querySelector('#clear-board');

clearButton.addEventListener('click', function() {
  const getPixels = document.querySelectorAll('.pixel');
  for  (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].style.backgroundColor = 'white';
  }
});

function verifyNumberUser(boardSize) {
  if (boardSize < 6) {
    alert('Digite um valor maior que 5!');
    return 5;
  }  
  if (boardSize > 50) {
    alert('Digite um número entre 5 e 50!')
    return 50;
  }
  return boardSize;
}

const buttonVqv = document.querySelector('#generate-board');

buttonVqv.addEventListener('click', function() {
  let boardSize = document.getElementById('board-size').value;
  
  if (boardSize.length < 1) {
    alert('Board Inválido!');
  } else {
    boardSize = verifyNumberUser(boardSize);
    creatPixilsBoard(boardSize);
  }
});
