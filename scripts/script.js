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
