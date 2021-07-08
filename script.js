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
// Fim do Requisito 3


