function trocaSelected(evento) {
    let tirarSelected = document.querySelector('.selected')
    tirarSelected.classList.remove('selected')
    evento.target.classList.add('selected')
}

function corSelecionada () {
    let paleta = document.getElementsByClassName('color')
    let colorselec = []

    for (let i = 0; i < paleta.length; i +=1){
        colorselec[i] = paleta[i]
        colorselec[i].addEventListener('click', trocaSelected)
    }
    console.log(paleta)
}
corSelecionada()
