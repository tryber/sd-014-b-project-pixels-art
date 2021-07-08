let colors = document.getElementsByClassName('color')

for(let color of colors){
  color.addEventListener('click', selectColor)
}

function selectColor(selectedColor){
  for(let color of colors){
    if (color.className.includes('selected')){
      color.className = color.className.replace(' selected', '')
    }
  }
  selectedColor.target.className += " selected"
}


let pixels = document.querySelectorAll('.pixel')
for (let pixel of pixels) {
  pixel.addEventListener('click', paintPixel)
}
function paintPixel(pixel){
  let selectedColor = document.querySelector('.selected')
  style = window.getComputedStyle(selectedColor) // referencia: https://stackoverflow.com/questions/25238153/how-to-get-background-color-property-value-in-javascript/25238247
  // a linha acima basicamente atribui a variavel style todo o css referente ao elemento passado como parametro, no caso selectedColor
  pixel.target.style.backgroundColor = style.backgroundColor // atribuindo a cor selecionada à cor de fundo do pixel clicado
}