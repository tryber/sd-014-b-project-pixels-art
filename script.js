const colorPalette = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const clearButton = document.querySelector('#clear-board');

for (const colors of colorPalette) {
  colors.addEventListener('click', function (event) {
    for (let color of colorPalette) {
      color.classList.remove('selected');
    }
  event.target.classList.add('selected')
    })
}

for (const pixel of pixels) {
  pixel.addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected').classList[1];
    event.target.classList.remove(event.target.classList[1]);
    event.target.classList.add(selectedColor);
  })
}

clearButton.addEventListener('click', function () {
  for (let pixel of pixels) {
    pixel.classList.remove(pixel.classList[1]);
    pixel.classList.add('white')
}
});

const sizeButton = document.querySelector('#generate-board');

sizeButton.addEventListener('click', function () {
  let sizeNumber = document.querySelector('#board-size').value
  let size = sizeNumber+ 'px';
  if (sizeNumber === "") {
      alert('Board inválido!');
  }else{
    for (const pixel of pixels) {
      pixel.style.width = size;
      pixel.style.height = size;
      pixel.classList.remove(pixel.classList[1]);
      pixel.classList.add('white');
  }
  }
})
