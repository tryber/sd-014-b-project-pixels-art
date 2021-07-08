    window.onload = function () {
    
    const black = document.getElementById('preto');
    const purple = document.getElementById('roxo');
    const blue = document.getElementById('azul');
    const pink = document.getElementById('rosa');
    
    function paintBrush(event) {
        const previousColor = document.querySelector('.selected');
        previousColor.classList.remove('selected');
        event.target.classList.add('selected');        
    } 
    
    black.addEventListener('click', paintBrush);
    purple.addEventListener('click', paintBrush);
    blue.addEventListener('click', paintBrush);
    pink.addEventListener('click', paintBrush);   

}