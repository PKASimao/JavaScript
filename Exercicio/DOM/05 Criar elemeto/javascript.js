//Criar elemento

var paragrafo = document.createElement("p")

var texto = document.createTextNode("Ola tudo Bem")

paragrafo.appendChild(texto)

// Inserindo no boddy

var body = document.querySelector("body")
console.log(body)

body.appendChild(paragrafo)

//inserindo da div

var container = document.getElementById("container");
var el = document.createElement("span");

el.appendChild(document.createTextNode("Este e o span"));

container.appendChild(el);


