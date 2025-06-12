title: Octocat's homepage
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feliz Aniversario</title>
</head>
<body background="Feliz Aniversario/pngtree-balloon-frame-with-beautiful-sparkle-png-image_6217808.png">
    <style>
        body {
                background-color: rgb(255, 180, 215);
                text-align: center;
                background-size: cover;
                justify-content: center;
            }
        img {height: 40rem;}
    </style>
    <img class="imagem"
        src="Feliz Aniversario/christmas-gift-design-on-a-transparent-background-round-gift-box-design-with-pink-color-wrap-paper-and-golden-color-ribbon-gift-image-for-birthdays-anniversaries-weddings-or-christmas-events-free-png.webp"
        alt="">
    <footer>
        <p>Feliz Aniversário!!</p>
        <input type="button" class="buton" onclick="TrocarImg()" value="Abrir Presente">
    </footer>
    <script>
        let statPresent = false;
        function TrocarImg() {
            statPresent = !statPresent;
            var imagem = document.getElementsByClassName("imagem")[0];
            var input = document.getElementsByClassName("buton")[0];
            if (statPresent) {
                imagem.src = "Feliz Aniversario/pngtree-happy-birthday-vector-design-png-image_20334723.png";
                input.value = "Fechar presente";
            } 
            else {
                imagem.src = "Feliz Aniversario/christmas-gift-design-on-a-transparent-background-round-gift-box-design-with-pink-color-wrap-paper-and-golden-color-ribbon-gift-image-for-birthdays-anniversaries-weddings-or-christmas-events-free-png.webp";
        input.value = "Abrir presente";
            }
        }
    </script>
</body>

