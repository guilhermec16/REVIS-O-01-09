const abrir = document.getElementById("contratar");
const fechar = document.getElementById("fecharModal")
const modal = document.getElementById("modal")
const btnenviar = document.getElementById('btn-enviar')

abrir.addEventListener("click", function() {
    modal.style.display = "flex"
});

fechar.addEventListener("click", function() {
    modal.style.display = "none"
});

btnenviar.addEventListener('click', (e) => {
    e.preventDefault()
    if (condition) {
        
        alert("Enviando com sucesso")
        modal.style.display = "none"
    }

    else {
        alert("Falha")
        modal.style.display = "flex"
    }

})