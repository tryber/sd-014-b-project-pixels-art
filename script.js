const colorsPalette = document.getElementsByClassName('color');
const colors = ['black','red','green', 'blue'];

window.onload = function(){
    colorsPalette[0].classList.add('selected');
}

setColorsInPalette();

function setColorsInPalette(){
    for (let i = 0; i < colorsPalette.length; i += 1){
        let color = colorsPalette[i];
        color.style.backgroundColor = colors[i];
        color.addEventListener('click', setSelectedColor);
    }
}

function setSelectedColor(event){
    let seletectedColor = document.querySelector('.selected');
    seletectedColor.classList.remove('selected');
    let newSelectedColor = event.target;
    newSelectedColor.classList.add('selected');
}

