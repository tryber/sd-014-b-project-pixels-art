let black = document.querySelector('.black');
black.classList.add('selected');
const purple = document.querySelector('.purple');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


let selectedElement = document.querySelector('.selected');
function handleChangeSelected (event) {
    const selectedElement = document.querySelector('.selected');
    selectedElement.classList.remove('selected');
    event.target.classList.add('selected');
}
purple.addEventListener('click', handleChangeSelected);
yellow.addEventListener('click', handleChangeSelected);
green.addEventListener('click', handleChangeSelected)
black.addEventListener('click', handleChangeSelected);


    