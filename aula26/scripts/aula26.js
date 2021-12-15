// var elementos = document.querySelectorAll("*.titulo"); // apenas elementos + classe
//var elementos = document.querySelectorAll("div > *"); // apenas elementos dentro de uma div
// var elementos = document.querySelectorAll("div.quadro > *"); // apenas elementos dentro de uma div + classe
var elementos = document.querySelectorAll("p, h1"); // elementos variados

for(var i = 0; i < elementos.length; i++){

    elementos[i].style.color="#0a0";

}
