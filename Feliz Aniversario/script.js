let statPresent = false;

function TrocarImg() {
    statPresent = !statPresent;
    var imagem = document.getElementsByClassName("imagem")[0];
    var input = document.getElementsByClassName("buton")[0];
    if (statPresent) {
        imagem.src = "Feliz Aniversario/pngtree-happy-birthday-vector-design-png-image_20334723.png";
        input.value = "Fechar presente";
    } else {
        imagem.src = "Feliz Aniversario/presente.png";
        input.value = "Abrir presente";
    }

}