let container = document.getElementById('pixel-board');
let containerLines = container.children;
let containerSize = 5;

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
        pixel.className = 'pixel';
        containerLines[i].appendChild(pixel);
    }
}