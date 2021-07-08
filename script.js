window.onload = function () { 
    let colorsPallete = document.querySelectorAll('.color');

    for (let element of colorsPallete) {
        if (colorsPallete[0] === element) {
            element.style.backgroundColor = 'black';
            element.classList.add('selected')
        } else if (colorsPallete[1] === element) {
            element.style.backgroundColor = 'red';
        } else if (colorsPallete[2] === element) {
            element.style.backgroundColor = 'blue';
        } else if (colorsPallete[3] === element) {
            element.style.backgroundColor = 'green';
        }

        element.addEventListener('click', function (event) { //adiciona a classe 'selected' ao elemento clicado, e retira de outro que esteja com a classe
            for (let i = 0; i < colorsPallete.length; i += 1) {
            colorsPallete[i].classList.remove('selected')
            event.target.classList.add('selected')
            }
        })
    }

    let pixelBoard = document.querySelector('#pixel-board');
    
    for (let i = 1; i <= 25; i += 1) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixelBoard.appendChild(pixel);

    }
}

