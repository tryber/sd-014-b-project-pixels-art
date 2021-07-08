let base = 5;
let pixBoard = document.getElementById('pixel-board');


function createPixBoard() {
    for (let index = 1; index <= base; index += 1) {
        let line = document.createElement('div');
        pixBoard.appendChild(line);
        for (let secondIndex = 0; secondIndex < base; secondIndex += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            line.appendChild(pixel);
        }
    }
}
createPixBoard()




