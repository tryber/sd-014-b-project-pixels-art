window.onload = function() {
  function paletteColor() {
    const getPalette = document.getElementsByClassName('color');
    for (let index of getPalette) {
      if (index === getPalette[0]) {
        index.style.background = 'black';
      } else if (index === getPalette[1]) {
        index.style.background = 'green';
      } else if (index === getPalette[2]) {
        index.style.background = 'blue';
      } else if (index === getPalette[3]) {
        index.style.background = 'yellow';
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

function creatPixilsBoard() {
  const pixelsBoard = document.querySelector('#pixel-board');
  for (let index = 1; index <= 5; index += 1) {
    const creatTr = document.createElement('tr');
    pixelsBoard.appendChild(creatTr);
    for (let indexTwo = 1; indexTwo <= 5; indexTwo += 1) {
      const creatTd = document.createElement('td');
      creatTr.appendChild(creatTd);
      creatTd.classList.add('pixel')
    }
  }
}

creatPixilsBoard();

