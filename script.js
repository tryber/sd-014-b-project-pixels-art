const containerPalhetas = document.querySelector('#color-palette');
const boxColor = ['black', 'blue', 'green', 'red'];

for (let i = 0; i < 4; i += 1) {
  const boxPalheta = document.createElement('div');
  //const nroDoQuadro = i + 1;
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

function selectColor() {
  const colorSelected = document.querySelectorAll('.color');
  let verificador = 0;
  for (let index = 0; index < colorSelected.length; index += 1) {
    colorSelected[index].addEventListener('click', function (event) {
      for (let index = 0; index < colorSelected.length; index += 1) {
        const valorClasse = colorSelected[index].className;
        if (valorClasse === 'color selected') {
          verificador = index;
          console.log(verificador);
        }
      }
      let clickedColor = event.target.style.backgroundColor;
      colorSelected[verificador].classList.remove('selected');
      colorSelected[index].classList.add('selected');
      console.log(event.target);

    });
  };
}
selectColor();
/* function paintBox() {
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
  paintBox(); */