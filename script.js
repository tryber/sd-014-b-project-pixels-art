window.onload = function () {
    let paletaDeCores = document.querySelectorAll('.color');

    for (let colors of paletaDeCores) {
        if (paletaDeCores[0] === colors) {
            colors.style.backgroundColor = 'black';
        }
        else if (paletaDeCores[1] === colors) {
            colors.style.backgroundColor = 'blue';
        }
        else if (paletaDeCores[2] === colors) {
            colors.style.backgroundColor = 'purple';
        }
        else if (paletaDeCores[3] === colors) {
            colors.style.backgroundColor = 'pink';
        }
    }
}
