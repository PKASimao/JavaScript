//Alterando css com js

//selecionar o elemento

var titulo = document.querySelector("#titulo");

// add estilo

titulo.style.color = "red"
titulo.style.backgroundColor = "yellow"

// add varios estilos do css

var subtitulo = document.querySelector(".subtitulo");
subtitulo.style.cssText = "color: blue; background-color: pink; size: 18px"