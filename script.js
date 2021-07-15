
 //clicarParaPintar
 

//BotãoLimpar
let buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', function() {
    let whites = document.getElementsByClassName('.pixel');
    for(let index = 0; index < whites.length; index += 1)
    if (whites[index].style.backgroundcolor === document.querySelector('#black') || 
    whites[index].style.backgroundcolor === document.querySelector('#orange') || 
    whites[index].style.backgroundcolor === document.querySelector('#blue') || 
    whites[index].style.backgroundcolor === document.querySelector('#pink')) {
        whites[index].style.backgroundcolor = 'white';
    }

});