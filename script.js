let paleta = document.getElementsByClassName('color');

function paletteSelection() {
  let cor = '';
  for(let i = 0; i < paleta.length; i += 1){
    cor = paleta[i]
    alert(cor.innerText)
  }
  
}