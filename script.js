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

function selectColor(evento) {
    const colors = document.querySelectorAll('.color');
    const colorClicked = evento.target;
    
    for (let key of colors) {
        let color = key;

        let searchSelectedColor = color.classList.contains('selected');
        
        if (searchSelectedColor === true) {
            color.classList.remove('selected');
        }
    }

    colorClicked.classList.add('selected');
}
