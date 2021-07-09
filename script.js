document.querySelector('.color').style.backgroundColor = 'black';

function boardSize() {
  console.log("teste");
};

function clearBoard() {
  console.log("teste");
};
/*
let colors = [];
do {
  let generatedColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (generatedColor !== 16777215 && generatedColor !== 0){}


} while (test === true);
const firstColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;*/

let colors = [];
let num;

function generateRandom() {
  for (let index = 0; index < 3; index += 1) {
  num = Math.floor(Math.random() * 16777215); // Gera número aleatório de base decimal, para passar a hexadecimal
  return (num === 0 || num === 16777215) ? generateRandom() : colors.push(num);}
}

var test = generateRandom(1, 6)

const firstColor = num.toString(16); // Converte de base decimal para hexadecimal

console.log(generateRandom());

// Baseado no post "JavaScript generate random number except some values", fonte:
// https://stackoverflow.com/questions/27406377/javascript-generate-random-number-except-some-values






/*
function setPalette(colorsRandom) {
  document.querySelector('#color1').style.backgroundColor = colorsRandom[0];
  document.querySelector('#color2').style.backgroundColor = colorsRandom[1];
  document.querySelector('#color3').style.backgroundColor = colorsRandom[2];
}

/*
window.onload = function start() {
  //document.getElementById('black').classList.add('selected');
  
  let colors = randomColors();
  let colorsOK = verifyColors(colors);
  setPalette(colorsOK);
};
/*
function randomColors() {
  const colorsPalette = [];
  const firstColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Sugestão ESLint: prefer-template
  colorsPalette.push(firstColor);
  do {
    let secondColor = `#${Math.floor(Math.random() * 16777215).toString(16);}`;

  colorsPalette.push(secondColor);
  const thirdColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorsPalette.push(thirdColor);
  // 16777215 --> Conversão decimal <-> hexadecimal
  return (colorsPalette);
}

function setPalette(colorsRandom) {
  document.getElementById('color1').style.backgroundColor = colorsRandom[0];
  document.getElementById('color2').style.backgroundColor = colorsRandom[1];
  document.getElementById('color3').style.backgroundColor = colorsRandom[2];
}*/
/*
function verifyColors(colors) {
  let test = true;
  let verifyWhite = false;
  let countColorRepeat = 0;
  do {
    let check = randomColors();
    if (check[0] === check[1] || check[0] === check[2] || check[1] === check[2]) {
        test = true;window.onload = function start() {
  document.getElementById('black').classList.add('selected');
  document.querySelector(color).style.backgroundColor = 'black';
  let colors = randomColors();
  let colorsOK = verifyColors(colors);
  setPalette(colorsOK);
};
        }
    }
    while (test === true);
    return colors;
  }*/

// Requisito 6: Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
// let colorZero = 'black';
// 16777215 <--> FFFFFF ; decimal <--> hexadecimal
// Função toString, fonte: https://www.w3schools.com/jsref/jsref_tostring_number.asp
// Conversão decimal <-> hexadecimal, fonte: https://www.rapidtables.com/convert/number/decimal-to-hex.html


/*
function randomColor () {
    document.getElementById('color1').style.backgroundColor = rgb(225,258,215);
    document.getElementById('color2').style.backgroundColor = randomColor;
    document.getElementById('color3').style.backgroundColor = randomColor;

function clearBoard() {
    document.getElementById('color1').style.backgroundColor = "red";
    document.getElementById('color2').style.backgroundColor = "green";
    document.getElementById('color3').style.backgroundColor = "yellow";
};

clearBoard(); */

// getElementById --> retorna um elemento com a id
// getElementsByClassName --> retorna lista de elementos, não retorna apenas um elemento
// getElementsByTagName -->  retorna lista de elementos, não retorna apenas um elemento
// querySelector --> 

