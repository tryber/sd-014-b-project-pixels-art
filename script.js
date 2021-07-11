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

window.onload = function() {
  getDivsColor()
  creadPixelBoard()
  colorSelecte()
}
