window.onload = function () {
let colors = document.getElementsByClassName('color');

for (let i = 0; i < colors.length; i += 1){
  if (i === 0){
    colors[0].style.backgroundColor = '#B07156';
  }
  if (i === 1){
    colors[1].style.backgroundColor = '#AB4E68';
  }
  if (i === 2){
    colors[2].style.backgroundColor = '#533745';
  }
  if (i === 3){
    colors[3].style.backgroundColor = '#9D9171';
  }
  
}
}