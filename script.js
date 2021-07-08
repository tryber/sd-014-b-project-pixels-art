function trocaSelected(evento) {
    let tirarSelected = document.querySelector(".selected")
    tirarSelected.classList.remove("selected")
    evento.target.classList.add("selected")
}