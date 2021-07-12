let colorSelected = 'black';

window.onload = function() {
  setColors();
  eventAdd();
  initialBoard();
  const colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
}

function eventAdd() {
  let botoesCores = document.querySelectorAll('.color');
  let pixels = document.querySelectorAll('.pixel');
  let botaoReset = document.getElementById('clear-board');
  let botaoResize = document.getElementById('generate-board');

  for (let i = 0; i < botoesCores.length; i += 1) {
    botoesCores[i].addEventListener('click', selectColor);
  }
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', colorPixel);
  }

  botaoReset.addEventListener('click', resetPalette);
  botaoResize.addEventListener('click', defineSizeBoard);
}

function setColors() {
  let botoesCores = document.querySelectorAll('.color');

  for (let i = 1; i <= 3; i += 1) {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    botoesCores[i].style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  colorSelected = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
}

function colorPixel(event) {
  event.target.style.backgroundColor = colorSelected;
}

function resetPalette() {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function displayOptions() {
  document.getElementById('container-options').style.display = 'block';
}

function defineSizeBoard() {

  let valueInput = document.getElementById('board-size').value;
  let paitingArea = document.getElementById('painting-area');
  
  if (valueInput !== '') {
    
    let valueInput = parseInt(document.getElementById('board-size').value);
    if (valueInput >= 5 && valueInput <= 50) {

      if (document.getElementById('pixel-board') !== null) {
        document.getElementById('pixel-board').remove();
      }

      let tablePaint = document.createElement('table');
      tablePaint.id = 'pixel-board';
  
      let linhaBoard = document.createElement('tr');
      let pixel = '<td></td>';
  
      for (let i = 1; i <= valueInput; i += 1) {
  
        linhaBoard.innerHTML += pixel;
        linhaBoard.children[i - 1].classList.add('pixel');
  
      }
  
      for (let i = 1; i <= valueInput; i += 1) {
        tablePaint.innerHTML += linhaBoard.innerHTML;
      }
  
      paitingArea.appendChild(tablePaint);
  
      let pixels = document.querySelectorAll('.pixel');
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
