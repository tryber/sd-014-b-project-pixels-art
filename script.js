let title = document.querySelector('#title')
title.innerHTML = "Paleta de Cores"

function setColor () {
    let colorPalett = document.querySelectorAll('.color');
    colorPalett[0].style.backgroundColor = "Blue"
    colorPalett[1].style.backgroundColor = "Black"
    colorPalett[2].style.backgroundColor = "Yellow"
    colorPalett[3].style.backgroundColor = "Red"
}
setColor();