const colorPalette = document.querySelector('#color-palette ul');
const tablePixels = document.querySelector('#pixel-board');
const buttonClear = document.querySelector('#clear-board');
const numberRowsTable = 5;
const numberColumnTable = 5;

function createTablePixels(numberRows, numberColumn) {
  for (let i = 0; i < numberRows; i += 1) {
    const tr = document.createElement('tr');
    for (let j = 0; j < numberColumn; j += 1) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      tr.appendChild(td);
    }
    tablePixels.appendChild(tr);
  }
}

createTablePixels(numberRowsTable, numberColumnTable);

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

function colorRGB(color) {
  switch (color) {
  case 'black':
    return 'rgb(0, 0, 0)';
  case 'red':
    return 'rgb(254, 0, 0)';
  case 'blue':
    return 'rgb(16, 97, 255)';
  case 'green':
    return 'rgb(33, 182, 77)';
  default:
    return null;
  }
}

/**
 * essa funçao pega a lista das de cores na paleta e a pecorre
 * buscando a cor selecionada, apos encontrar a cor selecionada
 * pega o nome da cor atraves do id e passa esse nome como parametro
 * para função 'colorRGB' e a mesma retorna a cor respectiva
 * em rgb. Por fim a funçao retorna a cor selecionanda em rbg
 */
function selectedColor() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].classList.contains('selected')) {
      let color = (lis[i].id);
      color = colorRGB(color);
      return color;
    }
  }
}

/**
 * quando a tabela de pixels receber o evento de click
 * pega o pixel (quadrado) que recebeu o click e atribui
 * a ele a cor de fundo atual selecionada na paleta de cores
 */
tablePixels.addEventListener('click', (element) => {
  const pixel = element.target;
  pixel.style.backgroundColor = selectedColor();
});

buttonClear.addEventListener('click', () => {
  removeSelectedColor();
  const colorBlack = colorPalette.children[0];
  colorBlack.classList.add('selected');

  tablePixels.innerHTML = '';
  createTablePixels(numberRowsTable, numberColumnTable);
});
