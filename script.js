let blackcolor = document.getElementsByClassName('color')[0] // elemento da cor preto
let bluecolor = document.getElementsByClassName('color')[1] // elemento da cor azul
let yellowcolor = document.getElementsByClassName('color')[2] // cor amarela
let redcolor = document.getElementsByClassName('color') [3] // cor vermelha

function pintapinto(event){
    let select = document.querySelector('.selected')
    select.classList.remove('selected')
    event.target.classList.add('selected')
}
blackcolor.addEventListener('click', pintapinto)
bluecolor.addEventListener('click', pintapinto)
yellowcolor.addEventListener('click', pintapinto)
redcolor.addEventListener('click', pintapinto)





