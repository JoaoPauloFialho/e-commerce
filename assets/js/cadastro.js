//seletores da página cadastro
const formulario = document.querySelector('.formulario_login_cadastro')
const usuario = document.querySelector('.usuario_login_cadastro')
const senha = document.querySelector('.senha')
const repetir_senha = document.querySelector('.repetir_senha')
const botao = document.querySelector('.button_login_cadastro')
const mostrar_senha = document.querySelector('.img_mostrar_senha')

//lista para salvar no local storage, se ela não existir eu instancio uma
const usuarios_cadastrados =  localStorage.length == 0 ? [] : JSON.parse(localStorage.getItem("usuarios_cadastrados"))

//adiciona um evento de submit
formulario.addEventListener('submit', e =>{
    handleSubmit(e);
})

//controla o evento de submit fazendo a checagem do formulário
function handleSubmit(e){
    remove_erros()
    e.preventDefault()
    const campos_validos = valida_campos()
    const senha_valida = valida_senha()

    if(campos_validos && senha_valida){
        remove_erros()
        adiciona_armazenamento_local(usuario.value, senha.value)
        alert('Usuário Cadastrado')

        formulario.submit()
        window.location.assign("login.html")
    }
}

//remove todas as mensagens de erro
function remove_erros(){
    const erros = formulario.querySelectorAll('.mensagem_erro')
    Array.from(erros).forEach(e=>{
        e.remove()
    })
}

//cria uma mensagem de erro
function cria_erro(campo, msg){
    const erro_p = document.createElement('p')
    erro_p.innerHTML = msg
    erro_p.classList.add('mensagem_erro')
    campo.insertAdjacentElement('afterend', erro_p) 
}

//função para validar a senha
function valida_senha(){
    let valido = true;
    if(senha.value.length < 6){
        valido = false;
        cria_erro(senha, 'Senha muito curta');
    }
    if(senha.value !== repetir_senha.value){
        valido = false;
        cria_erro(repetir_senha, 'O campo senha e repetir senha devem ser iguais');
    }
    return valido;
}

//função para validar todos os campos, checando se eles estão vazios
function valida_campos(){
    let valido = true;
    for( let campo of formulario.querySelectorAll('.validar')){
        if(!campo.value){
            cria_erro(campo, 'Preencha o campo');
            valido = false;
        }
    }
    return valido;
}


//adicionando evento de clique no botão olho de mostrar senha
mostrar_senha.onclick = e =>{
    let form_senha = document.querySelectorAll('[inputsenha]')
    Array.from(form_senha).forEach(e =>{
        if(e.type == 'password'){
            e.type = 'text'
        }
        else{
            e.type = 'password'
        }
    })
}

const adiciona_armazenamento_local = (user, password) =>{
    let user_dados = {
        usuario: user,
        senha: password,
    }
    usuarios_cadastrados.push(user_dados)
    localStorage.setItem("usuarios_cadastrados", JSON.stringify(usuarios_cadastrados))
}