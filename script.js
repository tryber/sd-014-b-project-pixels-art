// Quando a página carregar vai executar essa função (colocar cor nos quadrados)
window.onload = function () {
  let colors = document.getElementsByClassName('color');
//variavel colors com o caminho do elemento
  for (let i = 0; i < colors.length; i += 1) {
    if (i === 0) {
      colors[0].style.backgroundColor = 'black';
    }
    if (i === 1) {
      colors[1].style.backgroundColor = '#AB4E68';
    }
    if (i === 2) {
      colors[2].style.backgroundColor = '#533745';
    }
    if (i === 3) {
      colors[3].style.backgroundColor = '#9D9171';
    }
  }
  let pixelBoard = document.getElementById ('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    let elemento = document.createElement('div');
    elemento.classList.add('pixel');
    pixelBoard.appendChild(elemento);
  }
}
