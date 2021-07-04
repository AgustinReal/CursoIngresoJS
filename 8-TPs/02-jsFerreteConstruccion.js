/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 let alambre, cantAlambre, largo , ancho;

 largo = parseInt(document.getElementById("txtIdLargo").value);

 ancho = parseInt(document.getElementById("txtIdAncho").value);

// En este paso sacamos el perimetro del rectangulo.
alambre = (largo*2) + (ancho*2);

// Cuando consegimos tener el perimetro, sacamos la cantAlambre en  los 3 hilos.
cantAlambre = alambre*3;

alert("Resultado final " + cantAlambre);

}
function Circulo () 
{
	let radio, alambre, cantAlambre ;

	radio = parseInt(document.getElementById("txtIdRadio").value);


	alambre= radio*2*(3.14);

	cantAlambre = alambre*3;

	alert("Resultado final " + cantAlambre);

}
function Materiales () 
{
	let ancho ,largo ,cemento ,cal ,CantMetros;


largo = parseInt(document.getElementById("txtIdLargo").value);

ancho = parseInt(document.getElementById("txtIdAncho").value);


CantMetros = largo*ancho;

cal = CantMetros*3;

cemento = CantMetros*2;

alert("Los metros cuadrados para el contrapiso son " + CantMetros + " , la cantidad de bolsas de cal son " + cal + " y la cantidad de bolsas de cemento son " + cemento);

}