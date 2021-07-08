const title = document.querySelector('#title');
title.innerHTML = 'Paleta de Cores';

function setColor() {
  const colorPalette = document.querySelectorAll('.color');
  colorPalette[0].style.backgroundColor = 'Black';
  colorPalette[1].style.backgroundColor = 'Blue';
  colorPalette[2].style.backgroundColor = 'Yellow';
  colorPalette[3].style.backgroundColor = 'Red';
}
setColor();