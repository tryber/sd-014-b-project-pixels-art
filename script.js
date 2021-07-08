function criaPixels(x,y){
    let div = document.querySelector('#pixel-board');
    
    for (let index = 0; index < y; index ++){
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let index = 0; index < x; index ++){
            let li = document.createElement('li');
            ul = document.querySelector('div').lastChild;
            ul.appendChild(li);
            li = ul.lastChild;
            li.className = 'pixel';
        }
    } 
};

function selectColor(color){
color = document.querySelector('.' + color);
color.classList.add('selected');
};

function removeColor(color){
    color = document.querySelector('.' + color);
    color.className.remove = 'selected';
    };

criaPixels(5,5);
selectColor('preto');