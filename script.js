window.onload = function () {
    let colorFirst = document.getElementById('black');
    colorFirst.classList.add('selected');
  };

  function paint(evento) {
    let color = document.querySelector('.selected');
    evento.target.style.backgroundColor = color.id;
  };

  let pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', paint);
}

let cleaning = document.querySelector('#clear-board');
cleaning.addEventListener('click', allDelete);

function allDelete() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white';
  }
};