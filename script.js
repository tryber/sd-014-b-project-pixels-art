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
const pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', paintPixel);
}

  