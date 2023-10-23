//Eventos Mouseouver

var titulo = document.querySelector("#titulo")

titulo.addEventListener("mouseover", function(){
    this.style.backgroundColor ="yellow"
})

//Eventos Mouseout
titulo.addEventListener("mouseout", function(){

    this.style.backgroundColor ="white"
})

//Afrtar outro elemento com mouseover

var paragrafo = document.querySelector(".subtitulo")

paragrafo.addEventListener("mouseover", function(){
    var legenda = document.querySelector("#legenda")
    legenda.classList.remove("hide")
    
})

paragrafo.addEventListener("mouseout", function(){
    var legenda = document.querySelector("#legenda")
    legenda.classList.add("hide")
    
})