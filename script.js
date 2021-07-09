
// let currentColor = colorSelector();
// function colorSelector() {
//     let colorSelected = document.getElementById("color-palette");
//     colorSelected.addEventListener('click', function(el) {
//     let selectedColor = (el.target.id);
//     return selectedColor;
//     })
// }

// function colorShift() {
//     let colorShifted = document.getElementById("pixel-board");
//     colorShifted.addEventListener('click', function() {
//         if (selectedColor === 'color1') { this.style.backgroundColor = 'black' };
//     })
// }

function oi() {
  console.log('Oi');
}

function defineClass() {
  removeClass();
  let newItem = document.getElementById("color-palette");
  newItem.addEventListener('click', function(itemClick) {
      let clicked = (itemClick.target.id);
      let currentItem = document.getElementById(clicked);
      currentItem.className = "color selected";
  });
}
function removeClass() {
  let item = document.querySelector(".selected");
  item.className = "color";
}

window.onload = function() {

  let repeatCount = 5;
  let pixBoard = document.getElementById("pixel-board");

  createTable(repeatCount);

  function createPix() {
    let pix = document.createElement("div");
    pix.className = "pixel";
    return pix;
  }

  function createLine(count) {
      count = repeatCount;
      let currentDiv = document.createElement("div");
      currentDiv.className = "tableRow";
      for (index = 1; index <= count; index += 1) {
          let lineDiv = createPix();
          currentDiv.appendChild(lineDiv);
        }
        return currentDiv;
    }

    function createTable(lines) {
        lines = repeatCount;
      for  (let index = 1; index <= lines; index += 1) {
        let lineDiv = createLine();
        pixBoard.appendChild(lineDiv);
      }
    }
}