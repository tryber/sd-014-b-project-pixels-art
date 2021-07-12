
let colorPallete = document.getElementById("#color-pallete"); //captura a table das paletas de cores
const allColors = document.querySelectorAll(".color"); // captura as cores da paleta


function selectBlack() {
  const colorBlack = document.querySelector('.selected');
  colorBlack.style.backgroundColor = 'black';
}
selectBlack();