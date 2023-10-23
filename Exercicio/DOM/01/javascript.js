
var titulo = "Pedro Simao";
var paragrafo = "este e meu nome";
var lista = ["wi", "mae", "pai"];

var body = document.getElementsByTagName("body");

var tituloH1 = document.createElement("h1");
var h1 = document.getElementsByTagName("h1");
var texto = document.createTextNode(titulo);

var paragrafoP = document.createElement("p");
var p = document.getElementsByTagName("p");
var texto2 = document.createTextNode(paragrafo);

var listaUl = document.createElement("ul");





body[0].appendChild(tituloH1);
h1[0].appendChild(texto);

body[0].appendChild(paragrafoP);
p[0].appendChild(texto2);

body[0].appendChild(listaUl);

var ul = document.getElementsByTagName("ul");


for(var i = 0; i < lista.length; i++){

    var listaLi = document.createElement("li");
    
    var texto3 = document.createTextNode(lista[i]);

   
    listaLi.appendChild(texto3);
    ul[0].appendChild(listaLi);
   
}



