window.onload = function () {
    let paletaDeCores = document.querySelectorAll('.color');

    for (let colors of paletaDeCores) {
        if (paletaDeCores[0] === colors) {
            colors.style.backgroundColor = 'black';
            colors.classList.add('selected');
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
    let color1 = document.querySelector('#blackPixel');
    let color2 = document.querySelector('#bluePixel');
    let color3 = document.querySelector('#purplePixel');
    let color4 = document.querySelector('#pinkPixel');

    color1.addEventListener(click, clickPalette);
    color2.addEventListener(click, clickPalette);
    color3.addEventListener(click, clickPalette);
    color4.addEventListener(click, clickPalette);

    function clickPalette(eventColor) {
        let colorSelected = document.querySelector('.selected');
        colorSelected.classList.remove("selected");
        eventColor.target.classList.add("selected");
        console.log(eventColor.target);
    }
}

