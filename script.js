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
