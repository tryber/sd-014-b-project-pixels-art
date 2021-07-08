// Requisito 2: Adiciona a classe color à paleta de cores
function addColorClass (){
  let paletaDeCores = document.querySelector('#color-palette').children;
  for (i=0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].className = 'color'
  }
}

addColorClass();

// Requisito 3: Seta as cores da paleta
function paletteColors (){
  let paletteDivs = document.querySelectorAll('.color');
    for (i = 0; i < paletteDivs.length; i += 1){
      // console.log(paletteDivs);
      switch (i) {
        case 0:
          paletteDivs[i].style.backgroundColor = 'black'
          break;
        case 1:
          paletteDivs[i].style.backgroundColor = 'green'
          break;
        case 2:
          paletteDivs[i].style.backgroundColor = 'purple'
          break;
        case 3:
          paletteDivs[i].style.backgroundColor = 'orange'
        default:
          break;
      }
  }
}

paletteColors();

// Requisito 4: Cria um quadrado de pixels 5x5
// section #pixels
// adicionar uma linha com 5 divs
// adicionar essa linha 5 vezes
// alterar espaçamento e estilo com CSS
// function pixelsTabel (){
//   let sectionPixels = document.querySelector('#pixel-board');
//   let pixelDiv = document.createElement('div');
//   let pixelsLine = [];

//   for (i = 0; i < 5; i +=1) {
//     pixelsLine.push(sectionPixels.appendChild(pixelDiv));
//     pixelsLine[i].className = 'pixel';
//     console.log(pixelsLine)
//   }  

// }

// pixelsTabel();

// Requisito 6: 
document.querySelectorAll('.color')[0].className = 'color selected'

// Requisito 7: Criar função que coloque a classe selected na cor que é clicada.
// Criar uma variavel pra receber qual cor está selecionada (let previousColor)
// Criar variável pra receber qual cor foi clicada (let selectedColor)
// Toda vez que tem um click, altera a classe de previousColor pra 'color'
// Setar a classe de selectedColor pra 'color selected'

function addListenerColor (){

  let colors = document.querySelectorAll('.color');

  for (i = 0; i < colors.length; i += 1){
    colors[i].addEventListener('click', changeClass);
    // console.log(colors)
  }

  function changeClass (event){
    let previousColor = document.querySelector('.selected');
    // console.log(previousColor);
    previousColor.className = 'color'
    event.target.className = 'color selected'
  }
}

addListenerColor();

// Requisito 8: 

function addListenerPixel (){

}