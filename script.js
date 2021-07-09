let allColors = document.querySelectorAll('.color');
let color1 = document.querySelector('.color-1');
let color2 = document.querySelector('.color-2');
let color3 = document.querySelector('.color-3');
let color4 = document.querySelector('.color-4');

function clickColor() {
  for (index = 0; index < allColors.length; index += 1) {
    let currentBoxColor = allColors[index];
    // Verifico qual elemento está com a classe selected e removo
    if (currentBoxColor.classList.contains('selected')) {
      currentBoxColor.classList.remove('selected');
    }
  }
  // Adicion a classe selected ao elemento que chamou a função
  // O event.target referencia o o próprio elemento que realizou o evento
  event.target.classList.add('selected');
}

color1.addEventListener('click', clickColor);
color2.addEventListener('click', clickColor);
color3.addEventListener('click', clickColor);
color4.addEventListener('click', clickColor);
