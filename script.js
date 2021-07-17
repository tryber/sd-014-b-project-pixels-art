let container = document.getElementById('pixel-board');
let containerLines = container.children;
let containerSize = 5;

window.onload = AddColorListeners;

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

let colorPalette = document.getElementById('color-palette');
let colorSize = colorPalette.children.length;
let color = colorPalette.children;

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
    let paramsClass = params.target.classList;

    if (paramsClass.contains(color)) return

    paramsClass.toggle(paramsClass[2]);
    paramsClass.toggle(color);

    console.log(color);
}