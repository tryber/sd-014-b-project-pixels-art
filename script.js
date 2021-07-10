

  function colorShift() {
    let colorItem = document.querySelector(".selected");
    return colorItem.id;
  //   console.log(colorId);
  }

  function colorPix(value) {
    // value = colorShift();
  let currentPix = document.querySelectorAll(".pixel");
  for (index = 0; index < currentPix.length; index += 1) {
    currentPix[index].addEventListener('click', function() {
      this.style.backgroundColor = value;
    });
  }
}

function defineClass() {
  let newItem = document.getElementById("color-palette");
  newItem.addEventListener('click', function(itemClick) {
    removeClass();
    let clicked = (itemClick.target.id);
    let currentItem = document.getElementById(clicked);
    currentItem.className = "color selected";
    colorPix(colorShift());
  });
}
function removeClass() {
  let item = document.querySelector(".selected");
  item.className = "color";
}

function clearButton() {
  let button = document.getElementById("clear-board");
  button.addEventListener('click', function() {
    let clearPix = document.querySelectorAll(".pixel");
    for (index = 0; index < clearPix.length; index += 1) {
      clearPix[index].style.backgroundColor = "white";
    }
  })
}

function createPix() {
  let pix = document.createElement("div");
  pix.className = "pixel";
  return pix;
}

function createLine(count) {
    count = inputValue();
    let currentDiv = document.createElement("div");
    currentDiv.setAttribute("id", "tableRow");
    for (index = 1; index <= count; index += 1) {
        let lineDiv = createPix();
        currentDiv.appendChild(lineDiv);
      }
      return currentDiv;
  }

  function createTable(lines) {
    let pixBoard = document.getElementById("pixel-board");
      lines = inputValue();
    for  (let index = 1; index <= lines; index += 1) {
      let lineDiv = createLine();
      pixBoard.appendChild(lineDiv);
    }
  }

function inputValue() {
  let inputBoard = document.getElementById("board-size");
  let currentInput = inputBoard.value;
  if (currentInput < 5) return 5;
  if (currentInput > 50) return 50;
    return currentInput;
}

function removeTable() {
  let currentBoard = document.getElementById("pixel-board");
  let currentTable = document.querySelectorAll("#tableRow");
  for (index = 0; index < currentTable.length; index += 1) {
    currentBoard.removeChild(currentTable[index]);
  }
}

function createNewTable() {
  let inputButton = document.getElementById("generate-board");
  inputButton.addEventListener('click', function() {
    let currentInput = inputValue();

    if (currentInput === "") return alert("Board inválido!");
    // } else if (currentInput < 5) { 
    //   removeTable();
    //   createTable(5);
    //   colorPix(colorShift());
    // } else if (currentInput > 50) { 
    //   removeTable();
    //   createTable(50);
    //   colorPix(colorShift());
    // } else {
      removeTable();
      createTable(currentInput);
      colorPix(colorShift());
    // }
  });
}

// - - - - - - - - - - //

window.onload = function() {

  // let repeatCount = document.getElementById("board-size").value;


  createNewTable();

  createTable(inputValue());

  clearButton();

  defineClass();

  colorPix(colorShift());

}