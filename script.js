window.onload = function() {
    let rowAndColumns = 5;

    //Cria linhas('div') de acordo com a variável disposta acima
    function createRow() {
        let position = document.getElementById('pixel-board');
        let newRow = document.createElement('div');

        newRow.className = 'row';
        position.appendChild(newRow);
    }
    for (let i = 0; i < rowAndColumns; i += 1) { 
        createRow()
        }
    
    //Cria o pixel e o atribui à linha, quantidade de acordo com o parâmetro recebido
    function createPixel(integer) {
        let howMany = integer;
        let position = document.querySelectorAll('.row');
        for (let i = 0; i < howMany; i += 1) {
            for (let index = 0; index < position.length; index += 1) {
                let newPixel = document.createElement('div');
                newPixel.className = 'pixel';
                newPixel.style.backgroundColor = 'white';
                position[index].appendChild(newPixel);
            }
        }
    }
    createPixel(rowAndColumns);
}
