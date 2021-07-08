window.onload = function() {
  const blackColor = document.getElementById('colorOne') 
  blackColor.classList.add('selected')
}

const base = 5;
const pixBoard = document.getElementById('pixel-board');

function createPixBoard() {
  for (let index = 1; index <= base; index += 1) {
    const line = document.createElement('div');
    pixBoard.appendChild(line);
  for (let secondIndex = 0; secondIndex < base; secondIndex += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    line.appendChild(pixel);
        }
    }
}
createPixBoard()

function selectedClass() {
    
}
