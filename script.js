window.onload = function () {
    const colors = document.querySelectorAll('.color');
    
    //Percorre as divs com as cores
    for (let key of colors) {
        let color = key;
        //Recupera o valor da propriedade background-color
        const getProp = window.getComputedStyle(key, null).getPropertyValue('background-color');

        if (getProp === 'rgb(0, 0, 0)') {
            color.classList.add('selected');
        }

        //Adiciona o evento de click em todas as box de cores
        color.addEventListener('click', selectColor);
    };
}

function generatePixels() {
    let pixelBoard = document.querySelector('#pixel-board');

    //Cria as linhas dos pixels  
    for(let index = 0; index < 5; index += 1) {
        const rowBoard = document.createElement('section');
        rowBoard.setAttribute('class', 'row-pixel');

        pixelBoard.appendChild(rowBoard);
        //Cria e adiciona a cada linha, 5 pixels        
        for (let indice = 1; indice <= 5; indice += 1) { 
            const rowPixel = document.querySelectorAll('.row-pixel')[index];

            const pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');

            rowPixel.appendChild(pixel);
        };
    };
}
generatePixels();

function selectColor(event) {
    const colors = document.querySelectorAll('.color');
    const colorClicked = event.target;
    
    for (let key of colors) {
        let color = key;

        let searchSelectedColor = color.classList.contains('selected');
        
        if (searchSelectedColor === true) {
            color.classList.remove('selected');
        }
    }

    colorClicked.classList.add('selected');
}

function addEventClickPixels() {
    const listPixels = document.querySelectorAll('.pixel');
    for (let key of listPixels) {
        let pixel = key;

        pixel.addEventListener('click', fillPixel);
    };
}
addEventClickPixels();

function fillPixel(event) {
    const colors = document.querySelectorAll('.color');
    let pixel = event.target;

    //Percorre o array de cores
    for (let key of colors) {
        let color = key;
        
        //Verifica se a cor esta selecionada
        let searchSelectedColor = color.classList.contains('selected');

        if (searchSelectedColor === true) {
            //Captura a cor do elemento
            const getColor = window.getComputedStyle(key, null).getPropertyValue('background-color');
            
            pixel.style.backgroundColor = getColor;
        };
    };
}

let btnClearBoard = document.querySelector('#clear-board');
btnClearBoard.addEventListener('click', clearBoard);

function clearBoard() {
    const listPixels = document.querySelectorAll('.pixel');

    for (let key of listPixels) {
        let pixel = key;
        
        pixel.style.backgroundColor = "#fff";
    }
}