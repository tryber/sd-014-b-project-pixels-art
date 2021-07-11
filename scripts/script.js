function criarTabela() {
  const table = document.getElementById('pixel-board');

  for (let i = 0; i < 5; i += 1) {
    const tr = document.createElement('tr');
    table.appendChild(tr);

    for (let j = 0; j < 5; j += 1) {
      const td = document.createElement('td');
      td.setAttribute('class', 'pixel');
      tr.appendChild(td);
    }
  }
}

function obterCores() {
  const paletaDeCores = document.getElementById('color-palette');
  return paletaDeCores.children;
}

function removerClasse() {
  const cores = obterCores();

  for (let i = 0; i < cores.length; i += 1) {
    const cor = cores[i];
    cor.classList.remove('selected');
  }
}

function selecionarCor(elemento) {
  removerClasse();
  elemento.classList.add('selected');
}

function adicionarClickNasCores() {
  const cores = obterCores();

  for (let i = 0; i < cores.length; i += 1) {
    const cor = cores[i];

    cor.addEventListener('click', () => {
      selecionarCor(cor);
    });
  }
}

function obterPixels() {
  const pixelBoard = document.getElementById('pixel-board');
  const linhas = pixelBoard.children;
  const pixels = [];

  for (let i = 0; i < linhas.length; i += 1) {
    const linha = linhas[i];
    const colunas = linha.children;

    for (let j = 0; j < colunas.length; j += 1) {
      const coluna = colunas[j];
      pixels.push(coluna);
    }
  }

  return pixels;
}

function obterCorSelecionada() {
  const cores = obterCores();
  let corSelecionada;

  for (let i = 0; i < cores.length; i += 1) {
    const cor = cores[i];

    if (cor.classList.contains('selected')) {
      corSelecionada = window.getComputedStyle(cor, null)
        .getPropertyValue('background-color');
    }
  }

  return corSelecionada;
}

function adicionarClickNosPixels() {
  const pixels = obterPixels();

  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];

    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = obterCorSelecionada();
    });
  }
}

function resertarPixels() {
  const pixels = obterPixels();

  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.style.backgroundColor = '#ffffff';
  }
}

criarTabela();
adicionarClickNasCores();
adicionarClickNosPixels();
document.getElementById('clear-board').addEventListener('click', resertarPixels);
