function clickColor (select) {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    select.target.classList.add('selected');
    console.log(select.target)
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', clickColor);

function paintPixel(clickEvent) {
    const colorSelected = document.querySelector('.selected').getAttribute('style');
    clickEvent.target.style = colorSelected;
}
const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', paintPixel);
}
// Referências: https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute e https://developer.mozilla.org/en-US/docs/Web/API/Event/target

function clearBoard() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
}
}