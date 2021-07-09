let pixel = document.querySelector('#pixel-board');
// bug const select = document.querySelector('.selected'); bug bug bug

let black = document.querySelector('#black');
let red = document.querySelector('#red');
let blue = document.querySelector('#blue');
let orange = document.querySelector('#orange');

// selecionando as cores
function selectColor(event) {
  // usar variavel select declarada buga tudo bug bug bug
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
orange.addEventListener('click', selectColor);

// aplicando as cores no pixel selecionado getComputedStyle currentStyle
/* Unless you have directly defined the backgroundColor on the element itself
   you have to use getComputedStyle() "stackoverflow" 
   https://stackoverflow.com/questions/10556185/style-backgroundcolor-is-an-empty-string-in-javascript*/
function selectPixel(event) {
  event.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
}

document.querySelector('#pixel-board').addEventListener('click', selectPixel);

// botão clear
let button = document.querySelector('#clear-board');
let allPixels = document.querySelectorAll('.pixel');
function clear() {
  for (let index = 0; index < allPixels.length; index += 1){
    allPixels[index].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clear);