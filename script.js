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

function paintColor(event){
  for (index = 0; index < 24; index += 1){

  if (document.getElementsByClassName('selected')[index] === document.querySelector('#black')){
   event.target.style.backgroundColor = 'black'
  }
  if (document.getElementsByClassName('selected')[index] === document.querySelector('#red')){
    event.target.style.backgroundColor = 'red'
   }
   if (document.getElementsByClassName('selected')[index] === document.querySelector('#blue')){
    event.target.style.backgroundColor = 'blue'
   }
   if (document.getElementsByClassName('selected')[index] === document.querySelector('#yellow')){
    event.target.style.backgroundColor = 'yellow'
   }
  }
}



for (index = 0; index < 25; index += 1){

  document.querySelectorAll('.pixel')[index].addEventListener('click', paintColor)
}

