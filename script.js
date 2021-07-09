/* var test = document.getElementsByClassName('color')[0];
test.classList.add('selected'); */

const arrayCores = document.getElementsByClassName('color');
arrayCores[0].classList.add('selected');

// nomeando uma variável pra cada div-cor:
const setBlack = document.getElementsByClassName('color')[0];
const setCastleton = document.getElementsByClassName('color')[1];
const spanishViridian = document.getElementsByClassName('color')[2];
const spanishGreen = document.getElementsByClassName('color')[3];

// Eventos click
setBlack.addEventListener('click', selectColor);
setCastleton.addEventListener('click', selectColor);
spanishViridian.addEventListener('click', selectColor);
spanishGreen.addEventListener('click', selectColor);

function selectColor(evento) {
  let test = document.getElementsByClassName('color');
  for (let index = 0; index < test.length; index += 1) {
    test[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}
