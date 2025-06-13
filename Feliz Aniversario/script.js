let statPresent = false;

function TrocarImg() {
    statPresent = !statPresent;
    var imagem = document.getElementsByClassName("imagem")[0];
    var input = document.getElementsByClassName("buton")[0];
    if (statPresent) {
        imagem.src = "https://a-static.mlcdn.com.br/470x352/adesivo-decorativo-de-parede-frase-vai-ficar-tudo-bem-gaudesivos/lojaolist/olsy2z65t6ahetvb/0773b506244ba1706b9ee7f976af3f84.jpeg";
        input.value = "Fechar Carta";
    } else {
        imagem.src = "https://cdn-icons-png.flaticon.com/512/2331/2331211.png";
        input.value = "Abrir Carta";
    }

}