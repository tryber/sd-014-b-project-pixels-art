let colorPalette = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
let clearButton = document.querySelector('#clear-board');

for (let colors of colorPalette) {
    colors.addEventListener('click', function (event) {
        for (let color of colorPalette) {
            color.classList.remove('selected');
        }
        event.target.classList.add('selected')
    })
}
let selected = document.querySelector('.selected');
for (let pixel of pixels) {
    pixel.addEventListener('click', function (event) {
        let selectedColor = document.querySelector('.selected').classList[1];
        event.target.classList.remove(event.target.classList[1]);
        event.target.classList.add(selectedColor);
    })
}

clearButton.addEventListener('click', function () {
    for (let pixel of pixels) {
        pixel.classList.remove(pixel.classList[1]);
        pixel.classList.add('white')
    }
})
