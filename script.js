window.onload = function () {
    const colors = document.querySelectorAll('.color');
    
    for (let key of colors) {
        const getProp = window.getComputedStyle(key, null).getPropertyValue('background-color');

        if (getProp === 'rgb(0, 0, 0)') {
            key.classList.add('selected');
        }
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
