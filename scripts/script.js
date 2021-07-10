window.onload = function criarDeTabela() {
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
};

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

function adicionarClick() {
  const cores = obterCores();

  for (let i = 0; i < cores.length; i += 1) {
    const cor = cores[i];

    cor.addEventListener('click', () => {
      selecionarCor(cor);
    });
  }
}

adicionarClick();
