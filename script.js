// Requisito 1
const header = document.createElement('h1');
header.innerText = 'Paleta de Cores';
header.id = 'title';
document.getElementById('mainContent').appendChild(header);

// Requisitos 2 e 3
const color1 = document.getElementsByClassName("color")[0].style.border = " 1px solid black"; // Até rePadding é o exercício 2 
const black = document.querySelector("#black").style.backgroundColor = "black";
const blackPadding = document.querySelector("#black").style.padding = "60px 60px";

const color2 = document.getElementsByClassName("color")[1].style.border = " 1px solid black";
const green = document.querySelector("#green").style.backgroundColor = "green";
const greenPadding = document.querySelector("#green").style.padding = "60px 60px"

const color3 = document.getElementsByClassName("color")[2].style.border = " 1px solid black";
const yellow = document.querySelector("#yellow").style.backgroundColor = "yellow";
const yellowPadding = document.querySelector("#yellow").style.padding = "60px 60px";  

const color4 = document.getElementsByClassName("color")[3].style.border = " 1px solid black";
const blue = document.querySelector("#blue").style.backgroundColor = "blue";
const bluePadding = document.querySelector("#blue").style.padding = "60px 60px";

