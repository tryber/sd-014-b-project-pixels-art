const colorsPalette = document.getElementsByClassName('color');
const colors = ['black', 'red', 'green', 'blue'];

setColorsInPalette();

let selectedColor = document.querySelector('.selected');

function setColorsInPalette() {
    for (let i = 0; i < colorsPalette.length; i += 1){
        let color = colorsPalette[i];
        color.style.backgroundColor = colors[i];
        color.addEventListener('click', setSelectedColor);
    }
    colorsPalette[0].classList.add('selected');
}

function setSelectedColor(event) {
    selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    let newSelectedColor = event.target;
    newSelectedColor.classList.add('selected');
    selectedColor = document.querySelector('.selected');
}

function addEventListenerToPixel() {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1){
        let pixel = pixels[i];
        pixel.addEventListener('click', fillColorInPixel);
    }
}
addEventListenerToPixel();

function fillColorInPixel(event){
    let color = selectedColor.style.backgroundColor;
    let pixel = event.target;
    pixel.style.backgroundColor = color;

}

