const containerPalhetas = document.querySelector('#color-palette');
const boxColor = ['black', 'blue', 'green', 'red'];

for (let i = 0; i < 4; i += 1) {
  const boxPalheta = document.createElement('div');
  const nroDoQuadro = i + 1;
  if (i === 0) {
    boxPalheta.className = 'color selected';
  } else {
    boxPalheta.className = 'color';
  }
  boxPalheta.style.backgroundColor = boxColor[i];
  //boxPalheta.innerText = nroDoQuadro;
  containerPalhetas.appendChild(boxPalheta);
}

// Quadro branco
const containerWhiteBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 5; i += 1) {
  const lineBox = document.createElement('div');
/*   lineBox.className = 'pixel';
  lineBox.innerText = i + 1; */
  containerWhiteBoard.appendChild(lineBox);
  for (let ii = 0; ii < 5; ii += 1) {
    const lineBox2 = document.createElement('div');
    lineBox2.className = 'pixel';
    //lineBox2.innerText = ii + 1;
    lineBox2.style.color = 'white';
    containerWhiteBoard.appendChild(lineBox2);
  }
}

console.log(boxColor);
function selectColor () {
  let colorSelected = document.querySelector('.color');
  colorSelected.addEventListener('click', function () {
    for (let i = 0; i < boxColor.length; i += 1){
      let posicao = colorSelected[i];
      console.log(posicao);
    }
    
  /*   if (color === 'black') {
      local.className = 'color selected';
      color = 'color select';
    } else {
      local.className = 'color';
      color = 'black';
    } */
  });
};
selectColor();

function paintBox() {
  let colorSelected = document.getElementsByClassName('color selected');
  let palheta = document.querySelector('.color');
  let box = document.querySelector('#pixel-board');
  let cor = palheta.style.backgroundColor;
  box.addEventListener('click', function(event) {
    let corAtual = event.target.style.color;
    if (task.length > 0 && corAtual !== cor){
      let color = task[0].style.backgroundColor
      event.target.style.color = color;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
  };
  paintBox();