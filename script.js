function createPixels(){
  for (let index = 0; index <= 24; index +=1){

  let pixels = document.createElement('div');
  pixels.classList.add('pixel')
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
