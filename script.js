function getDivsColor() {
  const getDivs = document.querySelectorAll('.color');
  getDivs[0].classList.add('black');
  getDivs[1].classList.add('red');
  getDivs[2].classList.add('blue');
  getDivs[3].classList.add('green');
}

function creadPixelBoard() {
  const div = document.createElement('div');
  div.setAttribute('id', 'pixel-board');
  document.querySelector('body').appendChild(div)
  for (let i = 0; i < 25; i++) {
    const y = document.createElement('div')
    y.setAttribute('class', 'pixel');
    document.querySelector('#pixel-board').appendChild(y);
  }
}

function colorSelecte() {
  const divs = document.querySelectorAll('.color');
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
      for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove('selected');
      }
      divs[i].classList.add('selected');
    })
  }
}

function setColorInPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('click', function() {
      const selection = document.querySelector('.selected')
      const selectionColor = window.getComputedStyle(selection).getPropertyValue("background-color");
      pixel[i].setAttribute("style", `background-color: ${selectionColor}`);
    })
  }
}

function clearAllPixels() {
  const pixel = document.querySelectorAll('.pixel');
  const button = document.querySelector('#clear-board');
  function pixelWhite() {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  } 
  button.addEventListener('click', pixelWhite);
}

window.onload = function() {
  getDivsColor()
  creadPixelBoard()
  colorSelecte()
  setColorInPixel()
  clearAllPixels()
}
