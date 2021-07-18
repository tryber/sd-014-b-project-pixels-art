let clearButton = document.getElementById("clear-board");
let sizeButton = document.getElementById('generate-board');

let container = document.getElementById('pixel-board');
let containerLines = container.children;
let containerSize = 5;

let colorPalette = document.getElementById('color-palette');
let colorSize = colorPalette.children.length;
let color = colorPalette.children;

window.onload = Render;
clearButton.addEventListener('click', ClearAll);
sizeButton.addEventListener('click', UpdateBoard);

function GenerateBoard(params)
{
    for (let i = 0; i < containerSize; i++)
    {
        let line = document.createElement('div');
        container.appendChild(line);
    }
    
    for (let i = 0; i < containerSize; i++)
    {
        for (let index = 0; index < containerSize; index++) 
        {
            let pixel = document.createElement('span');
            pixel.className = 'pixel border white';
            containerLines[i].appendChild(pixel);
            pixel.addEventListener('click', ChangeColor);
        }
    }
}

function UpdateBoard(params) 
{
    containerSize = document.getElementById('board-size').value;

    if (containerSize < 5 || containerSize > 50)
    {
        containerSize = (containerSize < 5)?5:50;
    }

    //todo
    // #11 - don't know exactly what it whants and what is means
    // thus i can't proceed

    // if (containerSize != Number)
    // {
    //     window.alert('board invalido!');
    //     return;
    // }

    DeleteBoard();
}

function DeleteBoard(params) 
{
    let size = document.getElementById('pixel-board').children.length;

    if (size <= 0 || size == containerSize) return;
    for (let i = 0; i < size; i++)
    {
        container.removeChild(container.firstChild);
    }
    GenerateBoard();
}

function AddColorListeners() 
{
    for (let i = 0; i < colorSize; i++)
    {
        color[i].addEventListener('click', ChangeSelect);
    }    
}

function ChangeSelect(param)
{
    param.target.classList.forEach(element => 
    {
        if (element == 'selected') return;        
    });

    param.target.classList.add('selected')

    for (let i = 0; i < colorSize; i++)
    {
        if (param.target == color[i]) continue;

        color[i].classList.remove('selected')
    }
}

function ChangeColor(params) 
{
    let color = document.querySelector('.selected').id;
    let paramsClassList = params.target.classList;
    ChangeColorClass(paramsClassList, color);
}

function ClearAll(params) 
{
    let pixels = document.getElementsByClassName('pixel');
    let pixelsLenght = pixels.length;
    
    for (let i = 0; i < pixelsLenght; i++)
    {
        ChangeColorClass(pixels[i].classList, 'white');
    }
}

function ChangeColorClass(targetList, newColor) 
{
    if (targetList.contains(newColor)) return;

    targetList.toggle(targetList[2]);
    targetList.toggle(newColor);
}

function Render(params) 
{
    AddColorListeners();
    GenerateBoard();    
}