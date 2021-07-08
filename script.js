window.onload = function start() {
  document.getElementById('black').classList.add('selected');
  let aux = false;

  let firstColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Sugestão ESLint: prefer-template
  let secondColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let thirdColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  document.getElementById('color1').style.backgroundColor = firstColor;
  document.getElementById('color2').style.backgroundColor = secondColor;
  document.getElementById('color3').style.backgroundColor = thirdColor;
};

// Requisito 6: 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
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
