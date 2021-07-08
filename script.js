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
  const corUm = document.querySelector('#cor2');
  corUm.style.backgroundColor = corAleatoria();
  const corDois = document.querySelector('#cor3');
  corDois.style.backgroundColor = corAleatoria();
  const cortres = document.querySelector('#cor4');
  cortres.style.backgroundColor = corAleatoria();
}
window.onload = carregamentoCompleto;
