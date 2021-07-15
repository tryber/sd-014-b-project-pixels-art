//BotãoLimpar

const btclear = document.getElementById('clear-board');
btclear.addEventListener('click', clearAll);

function clearAll () {

    let clean = document.querySelectorAll('.pixel');
    for (let index = 0; index < clean.length; index =+ 1) {
        clean[index].style.background = 'white';
    }

}