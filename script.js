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

// Requisito 4

const table = document.querySelector('#pixel-board'); // seleciona a table pelo id
function pixelTable() {
  const rowsAndColumns = 5; // define o número de linhas e colunas 
  for (let i = 0; i < rowsAndColumns; i += 1) {
    const pixelsRow = document.createElement('tr'); // cria elemento de linha no pai
    table.appendChild(pixelsRow); // adiciona as linhas ao pai (pixel-board)
    for (let j = 0; j < rowsAndColumns; j += 1) {  // loop cria elementos ate o valor definido
      const pixel = document.createElement('td'); // cria elemento de coluna 
      pixel.classList.add('pixel');
      pixelsRow.appendChild(pixel);
    }
  }
}
pixelTable();

// Requisito 6
const selectClass1 = document.getElementsByClassName('color')[0];
selectClass1.classList.add('selected'); 

// Requisito 7  referencia https://stackoverflow.com/questions/50883690/remove-class-from-one-element-while-adding-that-class-to-another-element-using

const colorsArray = document.querySelectorAll('.color'); // selector all cria uma array com todos elementos com a classe "color"
for (let i = 0; i < colorsArray.length; i += 1) {
  colorsArray[i].addEventListener('click', addClassColors); // cria um evento de click para todos os elementos do array [colors]
  function addClassColors(event) { // cria uma funçao para adicionar classe a elemento clicado (no array);
    clearClass(); // invoca a função de remoção para proxima seleção;
    event.target.classList.add('selected'); // seleciona o target (elemento clicado e adciona a classe "selected")
  } // a classe "colors" são as cores primárias(paleta)
}

function clearClass() { // função de remoção (usada dentro do loop inicial de seleção para remover pos outro item selecionado)
  for (let i = 0; i < colorsArray.length; i += 1) { // faz o loop dentro dos elementos com a classe color
    colorsArray[i].classList.remove('selected');
  }
}

// Requisito 8
const pixelArray = document.querySelectorAll('.pixel'); // pixel sao os elementos do board de pixels a ser criado

for (let i = 0; i < pixelArray.length; i += 1) { // passa por todos elementos do araray contendo os valores pixel
  pixelArray[i].addEventListener("click", addColorPixel);
  function addColorPixel(event) { // função de adcionar cor aos pixels (o evento target é o pixel clicado (com a class selected))
    const backColor = document.querySelector('.selected').style.backgroundColor; // armazena a variavel da cor de fundo do elemento que foi criado
    event.target.style.backgroundColor = backColor; // o evento target (o que foi cliclado receb a cor do selected)
  }
}