window.onload = () => {
  function createPixel(value) {
    const pixelBoard = document.querySelector('#pixel-board');
    for (let i = 0; i < value; i += 1) {
      const boardItem = document.createElement('div');
      boardItem.className = 'pixel';
      pixelBoard.appendChild(boardItem);
    }
  }
  createPixel(5 ** 2);

  const selectBlack = document.querySelector('.black');
  selectBlack.classList.add('selected');
};
