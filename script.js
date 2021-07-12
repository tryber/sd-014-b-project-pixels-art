
//Função de seleção das cores usando eventos de clique

const colorBlack = document.querySelector('#black');
const colorRed = document.querySelector('#red');
const colorYellow = document.querySelector('#yellow');
const colorBlue = document.querySelector('#blue');

let selectedColor = document.querySelector('.selected');

function colorSelector(event) {
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
    selectedColor = document.querySelector('.selected');
}

colorBlack.addEventListener('click', colorSelector);
colorRed.addEventListener('click', colorSelector);
colorYellow.addEventListener('click', colorSelector);
colorBlue.addEventListener('click', colorSelector);

//Função do botão de limpeza do quadro
const clearButton = document.querySelector('#clear-board');

function boardCleaning() {
    document.querySelectorAll('.pixel').forEach(pixel => {
        pixel.style.backgroundColor = 'white'
    })
}

clearButton.addEventListener('click', boardCleaning);

//Função que permite pintar o quadro pixel a pixel

function pixelPainting(event) {

    event.target.style.backgroundColor = selectedColor.id;
}

document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', pixelPainting);
})
