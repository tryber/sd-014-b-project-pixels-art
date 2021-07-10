 /* Método utilizado para cumprir o requisito 7 teve como fonte o gabarito dos exercícios do bloco 5.3
https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-7-solutions */

// REQUISITO 7
const black = document.getElementById('preto');
const purple = document.getElementById('roxo');
const blue = document.getElementById('azul');
const pink = document.getElementById('rosa');


function paintBrush(paint) {
    const previousColor = document.querySelector('.selected');
    previousColor.classList.remove('selected');
    paint.target.classList.add('selected');            
} 

black.addEventListener('click', paintBrush);
purple.addEventListener('click', paintBrush);
blue.addEventListener('click', paintBrush);
pink.addEventListener('click', paintBrush);  

// REQUISITO 8

/* Estrutura da função utilizada como fonte foi desenvolvida e compartilhada no Slack pelo aluno Lucas Pine */
function painting (event){
    let selectedColor = document.querySelector('.selected')
    let colorProperty = window.getComputedStyle(selectedColor).getPropertyValue("background-color")
    event.target.style.backgroundColor = colorProperty
  }
  
  document.querySelector('#pixel-board').addEventListener('click', painting)

// REQUISITO 9 
const clearButton = document.getElementById('clear-board');
const allPixels = document.getElementsByClassName('pixel');

function clearBoard() {
    for (let index = 0; index < allPixels.length; index += 1) {
        allPixels[index].style.backgroundColor = 'white';
    }
}

clearButton.addEventListener('click', clearBoard);
  