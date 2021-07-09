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

window.onload = function () {
  getDivsColor()
  creadPixelBoard()
}
