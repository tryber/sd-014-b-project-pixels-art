window.onload = function () {
  let c = document.querySelectorAll('.color');

  for (let i of c) {
    if (c[0] === i) {
      i.style.backgroundColor = 'black';
      i.classList.add('selected');
    } else if (c[1] === i) {
      i.style.backgroundColor = 'grey';
    } else if (c[2] === i) {
      i.style.backgroundColor = 'orange';
    } else if (c[3] === i) {
      i.style.backgroundColor = 'pink';
    }
    addEventListener('click', function (event) {
      //percorre removendo todos os selecionados e selciona o seu
      {
        classList.remove('selected');
        event.target.classList.add('selected');
        for (let i = 1; i <= 25; i += 1) {
          pixel.classList.add('pixel');
        }
      }
    });
  }
};

let pboard = document.querySelector('#pixel-board');
pboard.addEventListener('click', function (event) {
  let selectedd = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedd;
});

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
