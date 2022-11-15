const mostrar_senha = document.querySelector('.img_mostrar_senha')
mostrar_senha.onclick = e =>{
    let form_senha = document.querySelectorAll('.senha')
    Array.from(form_senha).forEach(e =>{
        if(e.type == 'password'){
            e.type = 'text'
        }
        else{
            e.type = 'password'
        }
    })
}