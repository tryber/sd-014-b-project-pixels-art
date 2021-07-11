function addSelected (event){
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
};
document.getElementsByClassName('color')[0].addEventListener("click", addSelected);
document.getElementsByClassName('color')[1].addEventListener("click", addSelected);
document.getElementsByClassName('color')[2].addEventListener("click", addSelected);
document.getElementsByClassName('color')[3].addEventListener("click", addSelected);
