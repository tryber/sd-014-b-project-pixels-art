
 
window.onload = initColorBlack;

const optTable = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
console.log("---");
console.log(optTable);
console.log("--");





console.log("Projeto paleta de cores");
function initColorBlack (){ 
    const firstColor = document.querySelector('.color');
    const secondColor = document.querySelector('#color2');
    const thirdColor = document.querySelector('#color3');
    const forthColor = document.querySelector('#color4');
    firstColor.style.backgroundColor = "black"
    secondColor.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    thirdColor.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    forthColor.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    firstColor.className += " " + "selected";
    console.log(firstColor);
    
}


function selectColor (e){ 
let optcolor = document.querySelector('.selected')
// e.target.className = "selected";
e.target.style.backgroundColor = optcolor.style.backgroundColor;

}

function newClass(event) {
    let rmv = document.querySelector('.selected')
    rmv.classList.remove('selected')
    event.target.classList.add("selected")
    console.log("Adicionando uma nova classe ao elemento selecionado")

}




optTable.addEventListener('click', newClass)
pixelBoard.addEventListener('click', selectColor)
