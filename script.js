
// const color1 = "black";
// const color2 = "red";
// const color3 = "green";
// const color4 = "blue";

// function colorPix(value) {
  //   let currentPix = document.getElementById("tableRow");
  //   currentPix.addEventListener('click', function(pix) {
    //       let coloured = pix.target;
    //       let colouredPix = document.querySelector(coloured);
    //       colouredPix.style.backgroundColor = value;
    //   });
    // }

  function colorShift() {
    let colorItem = document.querySelector(".selected");
    return colorItem.id;
  //   console.log(colorId);
  }

  function colorPix(value) {
    // value = colorShift();
  let currentPix = document.querySelectorAll("#tableRow div");
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

// - - - - - - - - - - //

window.onload = function() {

  let repeatCount = 5;
  let pixBoard = document.getElementById("pixel-board");

  // let colorId = colorShift();

  createTable(repeatCount);

  defineClass();

  colorPix(colorShift());

  function createPix() {
    let pix = document.createElement("div");
    pix.className = "pixel";
    return pix;
  }

  function createLine(count) {
      count = repeatCount;
      let currentDiv = document.createElement("div");
      currentDiv.setAttribute("id", "tableRow");
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

  // function colorShift() {
  //   let colorItem = document.querySelector(".selected");
  //   return colorItem.id;
  // //   console.log(colorId);
  // }

  // function colorPix(value) {
  //     // value = colorShift();
  //   let currentPix = document.querySelectorAll("#tableRow div");
  //   for (index = 0; index < currentPix.length; index += 1) {
  //     currentPix[index].addEventListener('click', function() {
  //       this.style.backgroundColor = value;
  //     });
  //   }
  // }
}