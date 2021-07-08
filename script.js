function createPixels(){
  for (let index = 0; index <= 24; index +=1){

  let pixels = document.createElement('div');
  pixels.classList.add('pixel')
  pixels.classList.add(index)
  document.querySelector('#pixel-board').appendChild(pixels)
  if (index == 4){
    let quebra = document.createElement('div')
    document.querySelector('#pixel-board').appendChild(quebra)
  }
  if (index == 9){
    let quebra = document.createElement('div')
    document.querySelector('#pixel-board').appendChild(quebra)
  }
  if (index == 14){
    let quebra = document.createElement('div')
    document.querySelector('#pixel-board').appendChild(quebra)
  }
  if (index == 19){
    let quebra = document.createElement('div')
    document.querySelector('#pixel-board').appendChild(quebra)
  }
}
}
createPixels()

function addSelected (event){
  document.querySelector('.selected').classList.remove('selected')
  event.target.classList.add('selected')
}


  document.querySelector('#black').addEventListener('click', addSelected)
  document.querySelector('#red').addEventListener('click', addSelected)
  document.querySelector('#blue').addEventListener('click', addSelected)
  document.querySelector('#yellow').addEventListener('click', addSelected)




