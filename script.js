//trocas a classe .selected
function trocaSelected(evento) {
    let tirarSelected = document.querySelector('.selected')
    tirarSelected.classList.remove('selected')
    evento.target.classList.add('selected')
}

function corSelecionada () {
    let paleta = document.getElementsByClassName('color')
    let colorSelec = []

    for (let i = 0; i < paleta.length; i +=1){
        colorSelec[i] = paleta[i]
        colorSelec[i].addEventListener('click', trocaSelected)
    }
    console.log(paleta)
}
corSelecionada()


//trocar a cor das 25 caixas - puta ajuda do victor veloso turmar 14b ->

function trocaCor(event) {
    
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#black')) {
            event.target.style.backgroundColor = 'black'
        }
    if (document.querySelector('.selected') === document.querySelector('#red')) {
        event.target.style.backgroundColor = 'red'
        }
    
    if (document.querySelector('.selected') === document.querySelector('#green')) {
        event.target.style.backgroundColor = 'green'
        }
    if (document.querySelector('.selected') === document.querySelector('#blue')) {
        event.target.style.backgroundColor = 'blue'
    
    }
}

for (i = 0; i < 25; i +=1) {
    document.querySelectorAll('.pixel')[i].addEventListener('click', trocaCor)
}
