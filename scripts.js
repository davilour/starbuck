


let imagem = document.querySelector(".Copao");
    let circulo = document.querySelector(".circulo");

    function TrocaImagem(endereco) {
      imagem.src = endereco;
    }

    function TrocaCor(cor) {
      circulo.style.background = cor;
    }