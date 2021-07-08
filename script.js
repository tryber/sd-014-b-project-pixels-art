// seleciona a cor
const colorOptions = document.querySelectorAll('.color');
function selectColor(event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
}

for (let index = 0; index < colorOptions.length; index += 1) {
    colorOptions[index].addEventListener('click', selectColor);
}
