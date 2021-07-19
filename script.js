//  gerando cores aleatorias, as cores em formato #vao de 1 ao 9 e de A ao F, então ele gera uma variavel q possui 6 numeros ou letras aleatorias entre estes
const symbols = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i += 1) {
  color += symbols[Math.floor(Math.random() * 16)];
}

const symbols2 = '0123456789ABCDEF';
let color2 = '#';
for (let i = 0; i < 6; i += 1) {
  color2 += symbols2[Math.floor(Math.random() * 16)];
}

const symbols3 = '0123456789ABCDEF';
let color3 = '#';
for (let i = 0; i < 6; i += 1) {
  color3 += symbols3[Math.floor(Math.random() * 16)];
}

//  criando a paleta de cores
const todasCores = document.getElementsByClassName('color');
const corPreto = document.getElementsByClassName('color')[0];
corPreto.style.backgroundColor = 'black';
const corVermelho = document.getElementsByClassName('color')[1];
corVermelho.style.backgroundColor = color;
const corVerde = document.getElementsByClassName('color')[2];
corVerde.style.backgroundColor = color2;
const corAzul = document.getElementsByClassName('color')[3];
corAzul.style.backgroundColor = color3;
const pegarPixels = document.getElementsByClassName('pixel');

//  atribuindo iniciamente classe selected ao preto e trocando backgrondcolor de todos com classe pixel
corPreto.classList.add('selected');
for (let i = 0; i < pegarPixels.length; i += 1) {
  pegarPixels[i].style.backgroundColor = 'white';
}

//  trocando classe selected pra quando uma cor for clicada
for (let i = 0; i < todasCores.length; i += 1) {
  todasCores[i].addEventListener('click', function (event) {
    for (let i2 = 0; i2 < todasCores.length; i2 += 1) {
      todasCores[i2].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

//  trocando a cor dos pixels referente a classe selected
for (let i = 0; i < pegarPixels.length; i += 1) {
  pegarPixels[i].addEventListener('click', function (event) {
    for (let i2 = 0; i2 < pegarPixels.length; i2 += 1) {
      const colorir = document.querySelector('.selected');
      if (pegarPixels[i2].style.backgroundColor !== colorir.style.backgroundColor) {
        event.target.style.backgroundColor = colorir.style.backgroundColor;
      }
    }
  });
}

//  fazendo o botao limpar todos os quadrados
const pegarBotao = document.getElementById('clear-board');

pegarBotao.addEventListener('click', function (event) {
  for (let i = 0; i < pegarPixels.length; i += 1) {
    pegarPixels[i].style.backgroundColor = 'white';
  }
});
