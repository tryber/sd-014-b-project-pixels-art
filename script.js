let select = document.querySelector('#color-palette').children

let corUm = select[0].addEventListener('click', preto)

let corDois = select[1].addEventListener('click', vermelho)

let corTres = select[2].addEventListener('click', amarelo)

let corQuatro = select[3].addEventListener('click', verde)

function preto() {
    select[0].classList.add ('selected')
    select[1].classList.remove ('selected')
    select[2].classList.remove ('selected')
    select[3].classList.remove ('selected')
}
function vermelho() {
    select[0].classList.remove ('selected')
    select[1].classList.add ('selected')
    select[2].classList.remove ('selected')
    select[3].classList.remove ('selected')
}
function amarelo() {
    select[0].classList.remove ('selected')
    select[1].classList.remove ('selected')
    select[2].classList.add ('selected')
    select[3].classList.remove ('selected')
}
function verde() {
    select[0].classList.remove ('selected')
    select[1].classList.remove ('selected')
    select[2].classList.remove ('selected')
    select[3].classList.add ('selected')
}



