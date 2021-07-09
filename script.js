const colorPalette = document.querySelector('#color-palette ul');

/**
 * essa função pega a lista das cores que estao na paleta e em seguida
 * pecorre esta lista procurando a cor selecionada, quando a encontra
 * remove sua classe 'selected'
 */
function removeSelectedColor() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].classList.contains('selected')) {
      lis[i].classList.remove('selected');
    }
  }
}

/**
 * quando a paleta de cores receber um evento de click
 * será removida a cor que esta selecionada e o elemento
 * que recebeu o click receberá a classe 'selected'
 */
colorPalette.addEventListener('click', (element) => {
  removeSelectedColor();
  element.target.classList.add('selected');
});

console.log(colorPalette);
