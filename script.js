let element = document.getElementById('color-palette');

function clickColor (click) {
  let color = document.querySelector('.selected');
//  console.log(color);
  color.classList.remove('selected');
  click.target.classList.add('selected');
  console.log(click.target);
  console.log(click.type);
}

element.addEventListener('click', clickColor);
