window.onload = function start () {
    document.body.getElementById('black').classList.add('selected');
    document.body.getElementById('color1').style.backgroundColor = 'red';
    // Requisito 6: 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
};
/*
var randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log(Math.floor(Math.random()*16777215).toString(16));

function randomColor () {
    document.getElementById('color1').style.backgroundColor = rgb(225,258,215);
    document.getElementById('color2').style.backgroundColor = randomColor;
    document.getElementById('color3').style.backgroundColor = randomColor;
}*/

function clearBoard() {
    document.body.getElementById('color1').style.backgroundColor = "red";
    document.body.getElementById('color2').style.backgroundColor = "white";
    document.body.getElementById('color3').style.backgroundColor = "white";
};