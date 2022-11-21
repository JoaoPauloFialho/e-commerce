const div_produto = document.querySelector(".produto");
const dados_produto = JSON.parse(localStorage.getItem("dados_produto"));

//as regiões do cep vão de 0-9 -> 0-1 são paulo, 2 RJ e ES, etc, para pegar o valor do frete é só acessar
//os índices de acordo com o primeiro dígito do CEP
let regioes_cep = [30, 40, 50, 10, 25, 12, 80, 70, 60];

//se o carrinho possuir itens a divisão será preenchida
if(dados_produto){
    div_produto.innerHTML = `<span imagem></span>
    <div class="descricao">
        <p class="nome_produto_carrinho"><span nome></span></p>
    </div>
    <div class="quantidade">
        <p class="icone_plus_minus_carrinho"><i class="fa-solid fa-minus" subtrai style="cursor: pointer;"></i>
        <p class="icone_plus_minus_carrinho" ><input quantidade style="width: 1rem; color: white;"></span></p><i class="fa-solid fa-plus icone_plus_minus_carrinho" soma style="cursor: pointer;"></i>
        </p>
    </div>
    <p class="nome_produto_carrinho">R$<input preco style="width: 4rem; color: white;"></p>
    <i class="fa-solid fa-trash nome_produto_carrinho" exclui style="cursor: pointer;"></i>
    </div>`;
} else{
    div_produto.innerHTML = `<p style="font-size: 3rem; color: white;">CARRINHO VAZIO</p>`;
}


const nome_produto = document.querySelector("[nome]");
const qnt_produto = document.querySelector("[quantidade]");
const preco_produto = document.querySelector("[preco]");
const imagem = document.querySelector("[imagem]");
const soma = document.querySelector("[soma]");
const subtrai = document.querySelector("[subtrai]");
const preco_subtotal = document.querySelector("[preco_subtotal]");
const preco_frete = document.querySelector("[frete]");
const preco_total = document.querySelector("[preco_total]");
const remove_produto = document.querySelector("[exclui]");
const form_cep = document.querySelector(".input_frete");
const button_form_cep = document.querySelector("[botaocalculafrete]");
const frete = document.querySelector("[frete]");

if (dados_produto) {
    imagem.innerHTML = `<img class="imagem_produto" src="${dados_produto.imagem}">`;
    nome_produto.innerHTML = `${dados_produto.nome}`;
    qnt_produto.value = dados_produto.quantidade;
    preco_produto.value = dados_produto.valor;
    preco_subtotal.value = dados_produto.valor;
    preco_total.value = dados_produto.valor;
}

soma.addEventListener('click', () => {
    if (qnt_produto.value < 100) {
        qnt_produto.value++;
        preco_produto.value *= 2;
        preco_subtotal.value *= 2;
        calcula_total(preco_produto);
    }
})

subtrai.addEventListener('click', () => {
    if (qnt_produto.value > 1) {
        qnt_produto.value--;
        preco_produto.value /= 2;
        preco_subtotal.value /= 2;
        calcula_total(preco_produto);
    }
})

remove_produto.addEventListener('click', () => {
    div_produto.innerHTML = `<p style="font-size: 3rem; color: white;">CARRINHO VAZIO</p>`
    preco_produto.value = 0;
    preco_subtotal.value = 0;
    calcula_total(preco_produto);
    localStorage.removeItem("dados_produto");
})

function calcula_total(preco, frete = 0) {
    console.log(typeof preco.value);
    preco_total.value = preco.value + frete;
}

button_form_cep.addEventListener('click', e => {
    regiao =  parseInt(form_cep.value.toString().charAt(0))-1;
    preco_total.value = parseInt(preco_produto.value) + regioes_cep[regiao];
    frete.innerHTML = `<p class="subtotal">Frete</p>
    <p class="subtotal">R$${regioes_cep[regiao]}</p>`;
});






