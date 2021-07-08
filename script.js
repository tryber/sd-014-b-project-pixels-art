window.onload = function () {
  let numberOfBlocks = 4;
  createDivs();

  function createDivs() {
    for (let index = 0; index < numberOfBlocks; index += 1) {
      let divs = document.createElement('div');
      divs.className = 'color';
      divs.setAttribute('id', 'test');
      document.querySelector('#color-palette').appendChild(divs);
    }
  }
}
