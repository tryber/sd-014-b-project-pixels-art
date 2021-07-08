let colorPalette = document.querySelectorAll('.color');
for (let colors of colorPalette) {
    colors.addEventListener('click', function (event) {
        for (let color of colorPalette) {
            color.classList.remove('selected');
        }
        event.target.classList.add('selected')
    })
}
