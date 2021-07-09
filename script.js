const blackColor = document.querySelector('.black');
const redColor = document.querySelector('.red');
const greenColor = document.querySelector('.green');
const blueColor = document.querySelector('.blue');

blackColor.addEventListener('click', escolheCor);
redColor.addEventListener('click', escolheCor);
greenColor.addEventListener('click', escolheCor);
blueColor.addEventListener('click', escolheCor);

function escolheCor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

let tabela = document.querySelectorAll('#pixel-board');
let tagPixel = document.getElementsByClassName('pixel');
function pintaCor() {
  for (let i = 0; i < tagPixel.length; i++) {
    let cor = tagPixel[i];
    console.log(cor);
    console.log(tagPixel);
    cor.addEventListener('click', function () {
      let selected = document.querySelector('.selected');
      cor.style.backgroundColor = selected.style.backgroundColor;
    });
  }
}
pintaCor();
