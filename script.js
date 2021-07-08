window.onload = function (){
    let pixelBoard = document.querySelector('#pixel-board');

    //Cria as linhas dos pixels
    for(let index = 0; index < 5; index += 1) {
        let rowBoard = document.createElement('section');
        rowBoard.setAttribute('class', 'row-pixel');

        pixelBoard.appendChild(rowBoard);

        //Cria e adiciona a cada linha, 5 pixels
        for(let indice = 1; indice <= 5; indice += 1 ) {
            let rowPixel = document.querySelectorAll('.row-pixel')[index];

            let pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');

            rowPixel.appendChild(pixel);
        };
    };

}

