//seletores login
const formulario = document.querySelector('.formulario_login_cadastro')
const usuario = document.querySelector('.usuario_login_cadastro')
const senha = document.querySelector('.senha')
const botao = document.querySelector('.button_login_cadastro')
const mostrar_senha = document.querySelector('.img_mostrar_senha')

//lista local storage
const usuarios_cadastrados = JSON.parse(localStorage.getItem("usuarios_cadastrados"))

formulario.addEventListener('submit', e =>{
    e.preventDefault()
    console.log(usuarios_cadastrados)
})
