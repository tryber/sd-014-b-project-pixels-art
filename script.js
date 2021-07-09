window.onload = document.getElementById('black').classList.add('selected');

function clickRed () {
  document.querySelector('#black').classList.remove('selected');
  document.querySelector('#blue').classList.remove('selected');
  document.querySelector('#green').classList.remove('selected');
  document.querySelector('#red').classList.add('selected');
}

function clickBlack () {
  document.querySelector('#red').classList.remove('selected');
  document.querySelector('#blue').classList.remove('selected');
  document.querySelector('#green').classList.remove('selected');
  document.querySelector('#black').classList.add('selected');
}

function clickBlue () {
  document.querySelector('#black').classList.remove('selected');
  document.querySelector('#red').classList.remove('selected');
  document.querySelector('#green').classList.remove('selected');
  document.querySelector('#blue').classList.add('selected');
}

function clickGreen () {
  document.querySelector('#black').classList.remove('selected');
  document.querySelector('#blue').classList.remove('selected');
  document.querySelector('#red').classList.remove('selected');
  document.querySelector('#green').classList.add('selected');
}