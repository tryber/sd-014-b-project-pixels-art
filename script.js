function createPixels() {
  const getTable = document.querySelector('#pixel-board');
  for (let index = 1; index <= 5; index += 1) {
    const createTr = document.createElement('tr');
    getTable.appendChild(createTr);
    for (let secondIndex = 1; secondIndex <= 5; secondIndex += 1) {
      const createTd = document.createElement('td');
      createTr.appendChild(createTd);
      createTd.className = 'pixel';
    }
  }
}
createPixels();
