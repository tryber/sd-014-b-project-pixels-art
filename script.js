const colorsPalette = document.getElementsByClassName('color');
console.log(colorsPalette);
const colors = ['black','red','green', 'blue'];

setColorsInPalette();

function setColorsInPalette(){
    for (let i = 0; i < colorsPalette.length; i += 1){
        let color = colorsPalette[i];
        color.style.backgroundColor = colors[i];
    }
}

