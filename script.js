// elemento buscado pelo DOM e armazenado em const para ser utilizado nas funções para manipulação dos dados.
const colorOne = document.querySelector('#black');
const colorTwo = document.querySelector('#pink');
const colorTree = document.querySelector('#green');
const colorFour = document.querySelector('#purple');
const whiteBox = document.querySelector('#pixel-board');
const botao = document.querySelector('#clear-board');
const arrayPixel = document.getElementsByClassName('pixel');

// Selecionando uma cor adicionando a ela uma classe.
function selectColor(event) {
  const corSelecionada = document.querySelector('.selected');// buscando pelo DOM o elemento qu está com a classe .selected
  corSelecionada.classList.remove('selected');// removendo essa classe do elemento
  event.target.classList.add('selected');// criando o evendo para adicionar a classe no novo elemento
}
// colocando as "escultas" nos elemendos, para que quando ocorra o click dispare a função

colorOne.addEventListener('click', selectColor);
colorTwo.addEventListener('click', selectColor);
colorTree.addEventListener('click', selectColor);
colorFour.addEventListener('click', selectColor);
// adicionando a mesma backgroudColor que está no elemento que tem a .selected
function colorir(event) {
  const corSelecionada = document.querySelector('.selected').id; // peguei o ID do elemento que está com a .selected, pq é no ID que está o backgroudColor que preciso
  const mudaCor = event.target;
  mudaCor.style.backgroundColor = corSelecionada;
}
whiteBox.addEventListener('click', colorir);

// criando uma função para que quando eu clique no botão limpar todo backgroudColor dos elementos <section id="pixel-board">  <div class="pixel"></div> receberão cor branca
function clear() {    
  whiteBox.style.backgroundColor = 'white'; // alterando o style com background recebendo a cor branca
  for (let i = 0; i < arrayPixel.length; i += 1) {
    arrayPixel[i].style.backgroundColor = 'white';// percorrendo o array com as classes pixel, que representa cada quadradinho e colocando o style background color branco.
  }
}
botao.addEventListener('click', clear);
