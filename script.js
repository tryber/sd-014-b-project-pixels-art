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
