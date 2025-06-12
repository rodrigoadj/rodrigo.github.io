let statPresent = false;

function TrocarImg() {
    statPresent = !statPresent;
    var imagem = document.getElementsByClassName("imagem")[0];
    var input = document.getElementsByClassName("buton")[0];
    if (statPresent) {
        imagem.src = "pngtree-happy-birthday-vector-design-png-image_20334723.png";
        input.value = "Fechar presente";
    } else {
        imagem.src = "christmas-gift-design-on-a-transparent-background-round-gift-box-design-with-pink-color-wrap-paper-and-golden-color-ribbon-gift-image-for-birthdays-anniversaries-weddings-or-christmas-events-free-png.webp";
        input.value = "Abrir presente";
    }

}