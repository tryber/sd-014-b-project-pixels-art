window.onload = function () { 
    let colorsPallete = document.querySelectorAll('.color');

    for (element of colorsPallete) {
        if (colorsPallete[0] == element) {
            element.style.backgroundColor = 'black';
        } else if (colorsPallete[1] == element) {
            element.style.backgroundColor = 'red';
        } else if (colorsPallete[2] == element) {
            element.style.backgroundColor = 'blue';
        } else if (colorsPallete[3] == element) {
            element.style.backgroundColor = 'green';
        }
    }
}

