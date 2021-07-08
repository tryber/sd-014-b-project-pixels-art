window.onload = function () {
  let c = document.querySelectorAll('.color');

  //define as cores da paleta de cores percorrendo ela como um array.
  for (let idx of c) {
    if (c[0] === idx) {
      idx.style.backgroundColor = 'black';
      idx.classList.add('selected');
    }
    if (c[1] === idx) {
      idx.style.backgroundColor = 'grey';
    }
    if (c[2] === idx) {
      idx.style.backgroundColor = 'orange';
    }
    if (c[3] === idx) {
      idx.style.backgroundColor = 'pink';
    }

    addEventListener('click', function (event) {
      //percorre removendo todos. Adiciona ao seu selecionado
      for (let idx = 0; idx < c.length; idx += 1) {
        c[idx].classList.remove('selected');
        event.target.classList.add('selected');
        for (let idx = 1; idx <= 25; idx += 1) {
          pixel.classList.add('pixel');
        }
      }
    });
  }
};

//função de pintar
let pboard = document.querySelector('#pixel-board');
pboard.addEventListener('click', function (event) {
  let selectedd = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedd;
});

//função de apagar, altera todos os backgrounds pra white, percorrendo pixel a pixel
const clear = () => {
  const totalDeleteLesgoTrybers = document.querySelector('#clear-board');
  totalDeleteLesgoTrybers.addEventListener('click', () => {
    const pxl = document.querySelectorAll('.pixel');
    for (let j = 0; j < pxl.length; j += 1) {
      pxl[j].style.backgroundColor = 'white';
    }
  });
};

clear();
