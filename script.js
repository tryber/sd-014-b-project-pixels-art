function clickColor (select) {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    select.target.classList.add('selected');
    console.log(select.target)
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', clickColor);

