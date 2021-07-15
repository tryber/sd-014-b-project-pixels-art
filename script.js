window.onload = function() {
//cor inicial
function beginColor() {
    let color = document.getElementById('color-palette').firstElementChild;
    color.style.backgroundColor = 'black';
    color.classList.add('selected');
}




//BotãoLimpar

const btclear = document.getElementById('clear-board');
btclear.addEventListener('click', clearAll);

function clearAll () {
  document.querySelector('#pixel-board').style.backgroundColor = 'white';
        
    }
}