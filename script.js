const clearButton = document.getElementById('clear-board');
const sizeButton = document.getElementById('generate-board');

const container = document.getElementById('pixel-board');
const containerLines = container.children;
let containerSize = 5;

const colorPalette = document.getElementById('color-palette');
const colorSize = colorPalette.children.length;
const colors = colorPalette.children;

function ChangeColorClass(targetList, newColor)
{
  if (targetList.contains(newColor)) return;

  targetList.remove(targetList[2]);
  targetList.add(newColor);
}

function ChangeColor(params)
{
  const color = document.querySelector('.selected').id;
  const paramsClassList = params.target.classList;
  ChangeColorClass(paramsClassList, color);
}

function GenerateBoard()
{
  for (let i = 0; i < containerSize; i += 1)
  {
    const line = document.createElement('div');
    container.appendChild(line);
    for (let index = 0; index < containerSize; index += 1)
    {
      const pixel = document.createElement('span');
      pixel.className = 'pixel border white';
      containerLines[i].appendChild(pixel);
      pixel.addEventListener('click', ChangeColor);
    }
  }
}

function DeleteBoard()
{
  const size = document.getElementById('pixel-board').children.length;

  if (size <= 0 || size === containerSize) return;
  for (let i = 0; i < size; i += 1)
  {
    container.removeChild(container.firstChild);
  }
  GenerateBoard();
}

function UpdateBoard()
{
  containerSize = document.getElementById('board-size').value;
  if (containerSize === '') return window.alert('Board inválido!');
  if (containerSize < 0) return;
  if (containerSize < 5 || containerSize > 50)
  {
    (containerSize < 5) ? containerSize = 5 : containerSize = 50;
  }
  DeleteBoard();
}

function ChangeSelect(params)
{
  const target = params.target;
  if (target.classList.contains('selected')) return;

  document.querySelector('.selected').classList.remove('selected');
  target.classList.add('selected');
}

function AddColorListeners()
{
  for (let i = 0; i < colorSize; i += 1)
  {
    colors[i].addEventListener('click', ChangeSelect);
  }
}

function ClearAll()
{
  const pixels = document.getElementsByClassName('pixel');
  const pixelsLenght = pixels.length;

  for (let i = 0; i < pixelsLenght; i += 1)
  {
    ChangeColorClass(pixels[i].classList, 'white');
  }
}

function RandomizeColors()
{
  //TODO
}

function Render()
{
  AddColorListeners();
  GenerateBoard();
  RandomizeColors();
}

window.onload = Render;
clearButton.addEventListener('click', ClearAll);
sizeButton.addEventListener('click', UpdateBoard);
