const black = document.getElementById('black');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');


function changeClassColor(event) {
  const mainColor = document.querySelector('.selected');
  const selectedColor = event.target;
  mainColor.classList.remove('selected');
  selectedColor.classList.add('selected');
}

black.addEventListener('click', changeClassColor);
blue.addEventListener('click', changeClassColor);
yellow.addEventListener('click', changeClassColor);
red.addEventListener('click', changeClassColor);

const pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index += 1){
  pixel[index].addEventListener('click', function(event){
    let color = document.querySelector('.selected');
    event.target.style.backgroundColor = color.id
  })
} 

const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', function(){
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1){
    pixel[index].style.backgroundColor = 'white'
  }
})
