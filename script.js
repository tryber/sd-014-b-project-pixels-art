const containerPalhetas = document.querySelector('#color-palette');
const boxColor = ['black', 'blue', 'green', 'red'];

for (let i = 0; i < 4; i += 1) {
  const boxPalheta = document.createElement('div');
  const nroDoQuadro = i + 1;
  boxPalheta.className = 'color';
  boxPalheta.style.backgroundColor = boxColor[i];
  boxPalheta.innerText = nroDoQuadro;
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
