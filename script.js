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


