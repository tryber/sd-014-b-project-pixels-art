function createPixels(number = 5 * 5){
    for(let index = 0; index < number; index += 1){
     const pixelBoard = document.querySelector('#pixel-board');
     const quadrado = document.createElement('div');
     quadrado.classList = 'pixel';
     pixelBoard.appendChild(quadrado);
   }
 }

 createPixels();


//function colorRandom (){
  //let b = Math.random() * 255;
  //let c = Math.random() * 255;
  //let d = Math.random() * 255;
  //document.querySelector('.dois').style.backgroundColor = rgb(b, c, d);
  //document.querySelector('.tres').style.backgroundColor = rgb(c, b, d);
  //document.querySelector('.quatro').style.backgroundColor = rgb(c, d, b);
//};

//colorRandom();


function colorOneBlack (){
  let colorOne = document.querySelector('.um');
  colorOne.classList.add('selected');
  colorOne.style.background = 'black';
}

colorOneBlack();




//const color1 = document.querySelector('.um');
//const color2 = document.querySelector('.dois');
//const color3 = document.querySelector('.tres');
//const color4 = document.querySelector('.quatro');



