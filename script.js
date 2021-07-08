/* eslint-disable max-lines-per-function */
window.onload = function() {
  const sectionPalette = document.getElementById('color-palette');
  const clearButton = document.getElementById('clear-board');
  
  for (let i = 1; i <= 4; i += 1) {
    let divPalette = document.createElement('div');
    divPalette.className = 'color';
    sectionPalette.appendChild(divPalette);    
  }

  let divsPalette = document.querySelectorAll('div');  
  let colors = ['black','green','blue','red'];
  let divsIds = ['first-palette','second-palette','third-palette','fourth-palette'];

  for (let i = 0; i < divsPalette.length; i +=1) {
    divsPalette[i].style.backgroundColor = colors[i];
    divsPalette[i].id = divsIds[i];
  }

  divsPalette[0].classList.add('selected');
  
  
  let miniFrame = document.querySelectorAll('td');

  for (let i = 0; i < miniFrame.length; i += 1) {
    miniFrame[i].className = 'pixel';    
  }
  

  clearButton.addEventListener('click',function() {
    for (let i = 0; i < miniFrame.length; i += 1) {
      miniFrame[i].style.backgroundColor = 'white';      
    }
  })

  function changeSelectedPalette (event) {
    let selectedElement = document.querySelector('.selected');
    selectedElement.classList.remove('selected');
    event.target.classList.add('selected');
  }

  let firstPalette = document.getElementById('first-palette');
  let secondPalette = document.getElementById('second-palette');
  let thirdPalette = document.getElementById('third-palette');
  let fourthPalette = document.getElementById('fourth-palette');

  firstPalette.addEventListener('click',changeSelectedPalette);
  secondPalette.addEventListener('click',changeSelectedPalette);
  thirdPalette.addEventListener('click',changeSelectedPalette);
  fourthPalette.addEventListener('click',changeSelectedPalette);

  function coloringFrame () {
    let table = document.getElementById('pixel-board');
    table.addEventListener('click',function (event) {
      let selectedElement = document.querySelector('.selected');
      event.target.style.backgroundColor = selectedElement.style.backgroundColor;
    })
  }
  coloringFrame();


}