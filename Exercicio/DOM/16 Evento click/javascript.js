//Eventos click

var clica = document.querySelector("#clica");
console.log(clica)

clica.addEventListener("click", function(){
    console.log("Clicou");

    console.log(this)

    this.style.color = "red"
})

//Eventos click duplo

var subtitulo = document.querySelector(".subtitulo");

subtitulo.addEventListener("dblclick", function(){
    console.log("click duplo");

    
})