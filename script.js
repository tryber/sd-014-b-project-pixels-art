window.onload = function () {
  document.getElementById('black').classList.add('selected');
};

const palletColors = document.querySelectorAll('.color');

function selectColor(event) {
  for (let index = 0; index < palletColors.length; index += 1) {
    palletColors[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

for (let index = 0; index < palletColors.length; index += 1) {
  palletColors[index].addEventListener('click', selectColor, false);
}
