function  createPixel ( value )  {
  const  pixelBoard= document.querySelector ( '# pixel-board' ) ;
  for  ( i  =  0 ; i <valor. i += 1) 
  {
    let boardItem= document.createElement ( 'div' ) ;
    boardItem.className  =  'pixel' ;
    pixelBoard.appendChild ( boardItem ) ;
  }
}
createPixel ( 5  **  2 ) ;

function  corPaleta ( )  {
  document.querySelector ( '#black' ).estilo . backgroundColor = 'preto' ;
  document.querySelector ( '#blue' ).estilo . backgroundColor = 'azul' ;
  document.querySelector ( '#gray' ).estilo . backgroundColor = 'cinza' ;
  document.querySelector ( '#red' ).estilo . backgroundColor = 'vermelho' ;
}
corPaleta ( ) ;

let  blackColor = document.querySelector ( '.black' ) ;
let  blueColor = document.querySelector ( '.blue' ) ;
let  grayColor = document.querySelector ( '.gray' ) ;
let  redColor = document.querySelector ( ' .red ' ) ;

function  pintaPixel ( event )  {
  let  selected = document.querySelector ( '.selected' ) ;
  selected.classList.remove ( 'selected' ) ;
  event.alvo.classList.adicionar ( 'selected' ) ;
}
blackColor.addEventListener ( 'clique' ,  pintaPixel ) ;
blueColor.addEventListener ( 'clique' ,  pintaPixel ) ;
grayColor.addEventListener ( 'clique' ,  pintaPixel ) ;
redColor.addEventListener ( 'clique' ,  pintaPixel ) ;