
let slider = document.querySelector("#slider");
let botao = document.querySelector("#button");

let size = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#-@";
let novasenha = "";

size.innerHTML = slider.value;

slider.oninput = function(){
    size.innerHTML = this.value;
}

function generationPasswor(){
    
    let pass = "";

    for(let i=0, n = charset.length; i < slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() *n))
        
    }

    containerPassword.classList.remove("hide");
   
    password.innerHTML = pass;
    novasenha = pass;

}

function coppyPassword(){
    alert("Senha gerada com sucesso")
    navigator.clipboard.writeText(novasenha)
}
