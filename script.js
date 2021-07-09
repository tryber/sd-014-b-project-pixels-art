// Math.round() serve para arredondar valores para o inteiro mais próximo, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round

function corAleatoria() {
  let valorR = Math.random() * (255 - 1) + 1;
  valorR = Math.round(valorR);
  let valorG = Math.random() * (255 - 1) + 1;
  valorG = Math.round(valorG);
  let valorB = Math.random() * (255 - 1) + 1;
  valorB = Math.round(valorB);

  const valorRGB = `rgb(${valorR}, ${valorG}, ${valorB})`;
  return valorRGB;
}

function carregamentoCompleto() {
  const corUm = document.querySelector('#cor1');
  corUm.style.backgroundColor = 'black';
  corUm.classList.add('selected');
  const corDois = document.querySelector('#cor2');
  corDois.style.backgroundColor = corAleatoria();
  const corTres = document.querySelector('#cor3');
  corTres.style.backgroundColor = corAleatoria();
  const corQuatro = document.querySelector('#cor4');
  corQuatro.style.backgroundColor = corAleatoria();
}
window.onload = carregamentoCompleto;

function colorSelector1() {
  document.querySelector('#cor1').classList.add('selected');
  document.querySelector('#cor2').classList.remove('selected');
  document.querySelector('#cor3').classList.remove('selected');
  document.querySelector('#cor4').classList.remove('selected');
}

function colorSelector2() {
  document.querySelector('#cor1').classList.remove('selected');
  document.querySelector('#cor2').classList.add('selected');
  document.querySelector('#cor3').classList.remove('selected');
  document.querySelector('#cor4').classList.remove('selected');
}

function colorSelector3() {
  document.querySelector('#cor1').classList.remove('selected');
  document.querySelector('#cor2').classList.remove('selected');
  document.querySelector('#cor3').classList.add('selected');
  document.querySelector('#cor4').classList.remove('selected');
}

function colorSelector4() {
  document.querySelector('#cor1').classList.remove('selected');
  document.querySelector('#cor2').classList.remove('selected');
  document.querySelector('#cor3').classList.remove('selected');
  document.querySelector('#cor4').classList.add('selected');
}
