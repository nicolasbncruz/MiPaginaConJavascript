// var primerParrafo = document.getElementsByClassName('texto')[0];

//Modificar clase de un elemento
//primerParrafo.className = 'texto fondo-rojo';

//Modificar Id de un elemento || Si no tiene se agrega un Id !!!
// primerParrafo.id = 'primerParrafo';


//--------------------------------------------------------------------
//(1).- CREAMOS EL ELEMENTO E INSTANCIAMOS EL CONTENEDOR:
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
//-----------------------------------------------
//(AGREGAMOS EL NUEVO ELEMENTO)
//obtenemos primer elemento
var primerParrafo = document.getElementsByClassName('texto')[0];
//arreglo de parrafos
var parrafos = document.getElementsByClassName('texto');
//obtenemos Elemento padre
var padreParrafos = primerParrafo.parentNode;
var padreParrafos2 = parrafos[0].parentNode;
//agregar nuevo elemento antes del elemento seleccionado (nuevoParrafo, parrafoReferencia)
//padreParrafos.insertBefore(parrafo, primerParrafo);
padreParrafos2.insertBefore(parrafo, parrafos[1]);
