// window.onload = function () {
//   let numberOfBlocks = 4;
//   createDivs();

//   function createDivs() {
//     for (let index = 0; index < numberOfBlocks; index += 1) {
//       let divs = document.createElement('div');
//       divs.className = 'color';
//       divs.setAttribute('id', 'test');
//       document.querySelector('#color-palette').appendChild(divs);
//     }
//   }
// };
let black = document.querySelector('#black');
black.addEventListener('click', function () {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  black.className = 'color selected';
});

let blue = document.querySelector('#blue');
blue.addEventListener('click', function () {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  blue.className = 'color selected';
});

let green = document.querySelector('#green');
green.addEventListener('click', function () {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  green.className = 'color selected';
});

let yellow = document.querySelector('#yellow');
yellow.addEventListener('click', function () {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  yellow.className = 'color selected';
});
