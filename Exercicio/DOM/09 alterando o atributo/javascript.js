//Alterar atributo

var titulo = document.querySelector("#titulo");

titulo.setAttribute("class", "testado-atributo")
console.log(titulo)

//Desabilitando o botao

var botao = document.querySelector("#botao")
botao.setAttribute("disabled","disabled")

//alterando o atributo da div

var div = document.querySelector("#container");
div.setAttribute("id","divisao")

//remover atributo

var lista = document.querySelector("#lista")
lista.removeAttribute("id")

