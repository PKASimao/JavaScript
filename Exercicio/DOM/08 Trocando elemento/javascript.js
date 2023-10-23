//Criar elemento

var el = document.createElement("h3");

el.classList = "paragrafo3";

var texto = document.createTextNode("Este e o texto do h3");

el.appendChild(texto)
console.log(el)

//Trocando elemento 

// selecional ellemento que queremos trocar

var titulo = document.querySelector("#titulo");
console.log(titulo);

//selecionar o pai 

/* podemos usar 
var body = document.querySelector("body")

mas tem uma forma mais simples*/

var pai = titulo.parentNode;

// trocar os elementos

pai.replaceChild(el, titulo)
 
