//seletores login
const formulario = document.querySelector('.formulario_login_cadastro')
const usuario = document.querySelector('.usuario_login_cadastro')
const senha = document.querySelector('.senha')
const botao = document.querySelector('.button_login_cadastro')
const mostrar_senha = document.querySelector('.img_mostrar_senha')
const dados_usuario = JSON.parse(localStorage.getItem('usuario_dados'))

if(dados_usuario === null){
    let usuario_dados = {
        validado : false,
        usuario : 'DESLOGADO',
    }
    localStorage.setItem('usuario_dados', JSON.stringify(usuario_dados))
}

//lista local storage
const usuarios = JSON.parse(localStorage.getItem("usuarios_cadastrados"))

formulario.addEventListener('submit', e => {
    handleSubmit(e)
})

//função que controla o handle submit e autentica o usuário no sistema
function handleSubmit(e) {
    remove_erros();
    e.preventDefault();
    const validado = valida_login();

    if (validado) {
        alert('Usuário Logado');
        formulario.submit();
        let usuario_dados = {
            validado : true,
            usuario : usuario.value
        }
        localStorage.setItem('usuario_dados', JSON.stringify(usuario_dados))
        window.location.assign('index.html');

    }
}


function valida_login() {
    if(usuarios){
        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].usuario == usuario.value && usuarios[i].senha == senha.value){
                return true;
            }
        }
    }
    cria_erro(usuario, 'Usuário ou senha inválido')
    return false;
}

//remove todas as mensagens de erro
function remove_erros() {
    const erros = formulario.querySelectorAll('.mensagem_erro');
    Array.from(erros).forEach(e => {
        e.remove();
    })
}

//cria uma mensagem de erro
function cria_erro(campo, msg) {
    const erro_p = document.createElement('p');
    erro_p.innerHTML = msg;
    erro_p.classList.add('mensagem_erro');
    campo.insertAdjacentElement('beforebegin', erro_p);
}