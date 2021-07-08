window.onload =function (){
  
  let black = document.getElementById('black');
  let blue = document.getElementById('blue');
  let red = document.getElementById('red');
  let green = document.getElementById('green');

  function paintBrush(event) {
    let preColor = document.querySelectorAll('.selected');
preColor.classList.remove('selected');
event.target.classList.add('selected');
input.value = '';
  }
}
