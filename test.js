/* var test = document.getElementsByClassName('color')[0];
test.classList.add('selected'); */

const arrayPaleta = document.getElementsByClassName('color');
arrayPaleta[0].classList.add('selected');

let coresAtribuir = ['#003D2E', 'rgb(0,127,95)', 'rgb(43, 147, 72)'];
for (let index = 1; index <= arrayPaleta.length; index += 1) {
  arrayPaleta[index].style.backgroundColor = coresAtribuir[index];
}




// nomeando uma variável pra cada div-cor:
const setBlack = document.getElementsByClassName('color')[0];
const setColor1 = document.getElementsByClassName('color')[1];
const setColor2 = document.getElementsByClassName('color')[2];
const setColor3 = document.getElementsByClassName('color')[3];

// Eventos click
setBlack.addEventListener('click', selectColor);
setColor1.addEventListener('click', selectColor);
setColor2.addEventListener('click', selectColor);
setColor3.addEventListener('click', selectColor);

// Req 7: Reseleciona classe 'selected':
function selectColor(evento) {
  let test = document.getElementsByClassName('color');
  for (let index = 0; index < test.length; index += 1) {
    test[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

// Req 8:
let selectedColor = setBlack.style.backgroundColor;
console.log(selectedColor);


/* event.target.style.backgroundColor */






