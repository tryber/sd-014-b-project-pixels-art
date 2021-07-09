
function getDivsColor () {
  const getDivs = document.querySelectorAll('.color');
  getDivs[0].classList.add('black');
  getDivs[1].classList.add('red');
  getDivs[2].classList.add('blue');
  getDivs[3].classList.add('green');
}



window.onload = function () {
  getDivsColor()
}

