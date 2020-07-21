
//Selector individual
// var segundoParrafo = document.getElementById('segundo');
//var segundoParrafo = document.querySelector('.texto');

//selector multiple:
//var parrafos = document.getElementsByClassName('texto');
// var parrafos = document.getElementsByTagName('p');
// var titulo = document.getElementsByTagName('h1');
// var seleccion = document.querySelectorAll('.texto');

//Crear nuevo elemento o nodo

//<p></p>
var parrafo = document.createElement('p');
//Hola soy un texto
var textoNuevo = document.createTextNode('Hola soy un texto nuevo');
//<p>Hola soy un texto</p>
parrafo.appendChild(textoNuevo);
//<p class="texto">Hola soy un texto</p>
parrafo.setAttribute('class', 'texto');

//contenedor del DOM
var contenedor = document.getElementsByClassName('contenedor')[0];

contenedor.appendChild(parrafo);
