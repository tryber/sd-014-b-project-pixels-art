let colorSelected = 'black';
let pintarTudo = false;

function setColors() {
  const botoesCores = document.querySelectorAll('.color');

  for (let i = 1; i <= 3; i += 1) {
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);

    botoesCores[i].style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

function selectColor(event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
  colorSelected = window.getComputedStyle(event.target, null).getPropertyValue('background-color');
}

function colorPixel(event) {
  if (pintarTudo === true) {

    const pixel = document.querySelectorAll('.pixel');
    let corPixel = event.target.style.backgroundColor;

    for (let i = 0; i < pixel.length; i += 1) {
      if (pixel[i].style.backgroundColor == corPixel) {
        pixel[i].style.backgroundColor = colorSelected;
      }
    }

  } else {
    event.target.style.backgroundColor = colorSelected;
  }
}

function resetPalette() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function defineSizeBoard() {
  const valueInput = document.getElementById('board-size').value;
  const paitingArea = document.getElementById('painting-area');
  if (valueInput !== '') {
    const valueInput = parseInt(document.getElementById('board-size').value);
    if (valueInput >= 5 && valueInput <= 50) {
      if (document.getElementById('pixel-board') !== null) {
        document.getElementById('pixel-board').remove();
      }

      const tablePaint = document.createElement('table');
      tablePaint.id = 'pixel-board';

      const linhaBoard = document.createElement('tr');
      const pixel = '<td></td>';

      for (let i = 1; i <= valueInput; i += 1) {
        linhaBoard.innerHTML += pixel;
        linhaBoard.children[i - 1].classList.add('pixel');
      }
      for (let i = 1; i <= valueInput; i += 1) {
        tablePaint.innerHTML += linhaBoard.innerHTML;
      }
      paitingArea.appendChild(tablePaint);
      const pixels = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', colorPixel);
      }
    } else if (valueInput > 50) {
      if (document.getElementById('pixel-board') !== null) {
        document.getElementById('pixel-board').remove();
      }

      let tablePaint = document.createElement('table');
      tablePaint.id = 'pixel-board';
  
      let linhaBoard = document.createElement('tr');
      let pixel = '<td></td>';
  
      for (let i = 1; i <= 50; i += 1) {
  
        linhaBoard.innerHTML += pixel;
        linhaBoard.children[i - 1].classList.add('pixel');
  
      }
  
      for (let i = 1; i <= 50; i += 1) {
        tablePaint.innerHTML += linhaBoard.innerHTML;
      }
  
      paitingArea.appendChild(tablePaint);
  
      let pixels = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', colorPixel);
      }
    }
  } else {
    alert('Board inválido!');
  }
}

function removeBorders() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.border = 'none';
  }
}

function addBorders() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.border = '1px solid black';
  }
}

function eraserTool() {
  document.querySelector('.selected').classList.remove('selected');
  colorSelected = 'white';
}

function baldeDeTinta() {
  if (pintarTudo == false) {
    pintarTudo = true;
  } else {
    pintarTudo = false;
  }
}

function eventAdd() {
  const botoesCores = document.querySelectorAll('.color');
  const pixels = document.querySelectorAll('.pixel');
  const botaoReset = document.getElementById('clear-board');
  const botaoResize = document.getElementById('generate-board');
  const botaoBorder = document.getElementById('border');
  const botaoRemoveBorder = document.getElementById('noBorder');
  const botaoEraser = document.getElementById('eraser');
  const botaoBaldeTinta = document.getElementById('fill');

  for (let i = 0; i < botoesCores.length; i += 1) {
    botoesCores[i].addEventListener('click', selectColor);
  }
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', colorPixel);
  }

  botaoReset.addEventListener('click', resetPalette);
  botaoResize.addEventListener('click', defineSizeBoard);
  botaoBorder.addEventListener('click', addBorders);
  botaoRemoveBorder.addEventListener('click', removeBorders);
  botaoEraser.addEventListener('click', eraserTool);
  botaoBaldeTinta.addEventListener('click', baldeDeTinta);
}

function initialBoard() {

  let valueInput = document.getElementById('board-size').value;

  if (valueInput === '') {

    let paitingArea = document.getElementById('painting-area');
    
    let tablePaint = document.createElement('table');
    tablePaint.id = 'pixel-board';
  
    let linhaBoard = document.createElement('tr');
    let pixel = '<td></td>';
  
    for (let i = 1; i <= 5; i += 1) {
  
      linhaBoard.innerHTML += pixel;
      linhaBoard.children[i - 1].classList.add('pixel');
  
    }
  
      for (let i = 1; i <= 5; i += 1) {
        tablePaint.innerHTML += linhaBoard.innerHTML;
      }
  
      paitingArea.appendChild(tablePaint);
  
      let pixels = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', colorPixel);
      }

  }

}

window.onload = function () {
  setColors();
  eventAdd();
  initialBoard();
  const colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
}
