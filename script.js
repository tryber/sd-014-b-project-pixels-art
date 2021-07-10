const tabela = document.querySelector('#pixel-board');
function pixelsTable(numeros){
  for (let line = 0; line < numeros; line += 1) {
    const lines = document.createElement('tr');
    tabela.appendChild(lines);
    for (let column = 0; column < numeros; column += 1) {
      const colunas = document.createElement('td');
      lines.appendChild(colunas);
      colunas.className = 'pixel';
      colunas.style.backgroundColor = 'white';
      tabela.border = "1px"
      tabela.cellPadding = "40px";
    }
  }
}
pixelsTable(5);

window.addEventListener('load', () => {
    colors[0].classList.add('selected');
  });

  function colorFill() {
    const pixelsFill = document.querySelector('#pixel-board');
    pixelsFill.addEventListener('click', (event) => {
      const newColor = document.querySelector('.selected').style.backgroundColor;
      event.target.style.backgroundColor = newColor;
    });
  }
  colorFill();

  function colorSelector() {
    const selectedColor = document.querySelector('#color-palette');
    selectedColor.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    });
    }
    colorSelector();
  

const colors = document.querySelectorAll('.color');
colors[0].style.background = 'black';
colors[1].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;
colors[2].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;
colors[3].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;

window.addEventListener('load', () => {
    colors[0].classList.add('selected');
  });
 
  function limpar() {
        const botao = document.getElementById('clear-board')
        botao.addEventListener('click', () => {
            const quadrados = document.querySelectorAll('.pixel')
            for (let index = 0; index < quadrados.length; index += 1){
                quadrados[index].style.backgroundColor = 'white'
            }
        }
        )
    }
limpar();

function clean(){
  tabela.innerHTML = '';
}

function garrafa (){
  const bottao = document.getElementById('generate-board')
  bottao.addEventListener('click', () => {
    let cachorro = document.getElementById('board-size').value;
       document.getElementById('board-size').value = ''
        clean()
      if(cachorro == '') {
        window.alert('Board inválido!')
      }
      if (cachorro < 5) cachorro = 5;
      if (cachorro > 50) cachorro = 50;
      pixelsTable(cachorro);

  })
  

}

garrafa()
