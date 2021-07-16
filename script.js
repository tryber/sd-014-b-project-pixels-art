const tablePixels = document.getElementById('pixel-board');
const selectColorBlack = document.querySelector('#blackColor');
const selectColorRed = document.querySelector('#redColor');
const selectColorBlue = document.querySelector('#blueColor');
const selectColorGreen = document.querySelector('#greenColor');
const pixelsFrame = document.querySelector('#pixel-board');
const initialColor = document.querySelector('.color');
clsButton = document.querySelector('#clear-board'); 

initialColor.classList.add('selected');

selectColorBlack.addEventListener("click", colorPicker);
selectColorRed.addEventListener("click", colorPicker);
selectColorBlue.addEventListener("click", colorPicker);
selectColorGreen.addEventListener("click", colorPicker);
pixelsFrame.addEventListener("click", receiveColor);


for (let index = 0; index < 25; index +=1){
  let pixelsTable = document.createElement('div');
  pixelsTable.className='pixel';
  tablePixels.appendChild(pixelsTable);
}

function colorPicker(evento){
  for (index = 0; index < 5 ; index +=1){
    let currentColor = document.querySelectorAll('.color');
    if (currentColor[index] === document.querySelector('.selected') ){
      currentColor = currentColor[index].classList.remove('selected');
    }
  }
  evento.target.classList.add('selected');      
}

function receiveColor(evento){
  let selectedColor = document.querySelector('.selected');
  let selectorOfColor = window.getComputedStyle(selectedColor).getPropertyValue ('background-color'); 
  evento.target.style.backgroundColor = selectorOfColor;
}

clsButton.addEventListener('click',clean);
function clean(){
  window.location.reload()
}
