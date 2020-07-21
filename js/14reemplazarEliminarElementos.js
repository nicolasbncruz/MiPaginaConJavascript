//arreglo de parrafos existentes
var parrafos = document.getElementsByClassName('texto');

//Padre de los parrafos
var padreParrafos = parrafos[0].parentNode;

//Creando nuevo parrafo:
var parrafoNuevo = document.createElement('p');
var textoNuevo = document.createTextNode('Hola soy un parrafo nuevo');
parrafoNuevo.appendChild(textoNuevo);
parrafoNuevo.setAttribute('class','texto');

//llamando al contenedor
var contenedor = document.getElementsByClassName('contenedor')[0];

//-------------------------------

//reemplazar reemplazar (cual va a ingresar, que elemento va a ser reemplazado)
// padreParrafos.replaceChild(parrafoNuevo, parrafos[0]);

padreParrafos.removeChild(parrafos[0])
