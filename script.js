const black = document.getElementById('black');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');



function changeClassColor (event) {
    const mainColor = document.querySelector('.selected');
    const selectedColor = event.target
    if (selectedColor !== mainColor) {
        mainColor.classList.remove('selected');
        selectedColor.classList.add('selected');
     }
}

black.addEventListener('click', changeClassColor);
blue.addEventListener('click', changeClassColor);
yellow.addEventListener('click', changeClassColor);
red.addEventListener('click', changeClassColor);
