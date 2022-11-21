const botao_comprar = document.querySelector(".botao_comprar");


//botão que envia os dados do produto para o local storage
botao_comprar.addEventListener('click', () =>{
    let produto = {
        imagem : "assets/img/pc_gamer3.png",
        nome : "COMPUTADOR MANCER GAMER HELA, INTEL I3-10100F, GEFORCE GTX 1630 4GB",
        valor : "5599",
        quantidade : 1,
    }
    localStorage.setItem("dados_produto", JSON.stringify(produto));
    window.location.assign('carrinho.html');
})