
function beginColor() {
    let color = document.getElementById('black');
    color.classList.add('selected');
}
//beginColor();



//BotãoLimpar

let btclear = document.querySelector('#clear-board');
btclear.addEventListener('click', clearAll);

function clearAll () {
     document.querySelector('#pixel-board').style.backgroundColor = 'white';
        
}