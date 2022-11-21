const botaoMenu = document.querySelector(".botao_categorias");
const menu = document.querySelector(".menu_lateral");
const dados_usuario = JSON.parse(localStorage.getItem('usuario_dados'));
const div_login_cadastro = document.querySelector(".login_cadastro");


//função para descobrir a posição de um elemento
const pos = e => e.getBoundingClientRect();

//checando a validação do usuário, se ele não estiver validado vai aparecer as opções de login e cadastro
//se ele estiver validado vai aparecer as configurações do menu, além das opções de sair, etc.
if (dados_usuario) {
    if (!dados_usuario.validado) {
        let span = document.createElement('span')
        span.classList.add('login_cadastro_secao');
        span.innerHTML = `<a class="login" href="login.html"><i class="fa-solid fa-user user_icone"></i> Login</a>
    <p id="login_barra">|</p><a class="login" href="cadastro.html">Cadastro</a>`;
        div_login_cadastro.appendChild(span);

    } else {
        let span_perfil_usuario = document.createElement('span');
        span_perfil_usuario.classList.add("perfil");
        span_perfil_usuario.innerHTML = `<div class="perfil_usuario"><i class="fa-solid fa-user user_icone">
                                            </i> Olá ${dados_usuario.usuario}<i class="fa-solid fa-caret-down triangulo_perfil"></i>
                                        </div>
                                        <div class="menu_perfil">
                                            <ul class="lista_menu_perfil">
                                                <li>Sua conta</li>
                                                <li>Configurações</li>
                                                <li><a class="logout">Sair</a></li>
                                            </ul>
                                        </div>`

        div_login_cadastro.appendChild(span_perfil_usuario);
    }
} else {
    let usuario_dados = {
        validado: false
    }
    localStorage.setItem('usuario_dados', JSON.stringify(usuario_dados))
}

//controla o menu lateral colapsável
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_lateral-ativo');
})

//controla o menu colapsável do perfil quando existe um usuário autenticado
const perfil_usuario = document.querySelector(".perfil_usuario");
const menu_perfil = document.querySelector(".menu_perfil");
const setinha_perfil = document.querySelector(".triangulo_perfil");
const botao_sair = document.querySelector(".logout");

perfil_usuario.addEventListener('click', () => {
    setinha_perfil.classList.toggle('triangulo_perfil-ativo');
    menu_perfil.classList.toggle('menu_perfil-ativo');
    perfil_usuario.classList.toggle('perfil_usuario-ativo');
})

botao_sair.addEventListener('click', () =>{
    let usuario_dados = {
        validado : false,
        usuario : 'DESLOGADO',
    }
    localStorage.setItem('usuario_dados', JSON.stringify(usuario_dados));
    window.location.reload();
})



