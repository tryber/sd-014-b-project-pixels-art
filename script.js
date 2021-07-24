const colorBlack = document.querySelector('#black');
const colorGreen = document.querySelector('#green');
const colorPurple = document.querySelector('#purple');
const colorGrey = document.querySelector('#grey');
const boxPixels = document.querySelector('#pixel-board');

//selected (7)//
function clickPixel (event) {
  const classSelect = document.querySelector('.selected');
  classSelect.classList.remove('selected');
  event.target.classList.add('selected');
}
//preenchendo pixel-board (8)//
colorBlack.addEventListener('click', clickPixel);
colorGreen.addEventListener('click', clickPixel);
colorPurple.addEventListener('click', clickPixel);
colorGrey.addEventListener('click', clickPixel);

function colorPixel(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = selectedColor.id;
}

boxPixels.addEventListener('click', colorPixel);

//botão Limpar (9)//
function apagarTudo() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    //ao ser clicado deixa a tela branca//
  }
}

function adicionarApagarEvento() {
  document.getElementById('clear-board').addEventListener('click', apagarTudo);
}

adicionarApagarEvento();

//questões 10//  
const gerarButton= document.querySelector('#generate-board');
function createBoard() {
  const media = document.querySelector('#board-size').value;

    if (media === '') {
    window.alert('Board inválido!');
    return false;
}
 if (media <= 5){
  media = 5;
  } else if (media >= 50){
    media = 50;
 }
   return true;

};

gerarButton.addEventListener ('click' , createBoard);


// questão 12// referências: https://www.youtube.com/watch?v=mys7LGIlEf8&ab_channel=TECHNOLOGYFAQ
  function generatorColor() {
    const newColor = document.getElementsByClassName('color');
    for (let index = 1; index < newColor.length; index += 1) {
      const index1 = Math.floor(Math.random() * (255));
      const index2 = Math.floor(Math.random() * (255));
      const index3 = Math.floor(Math.random() * (255));
      newColor[index].style.backgroundColor = `rgb(${index1}, ${index2},${index3})`; 
//aula da semana, uso do ${//
    }
  }
  
  generatorColor();