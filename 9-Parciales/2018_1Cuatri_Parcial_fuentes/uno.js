/*
Real Agustin Div D
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;
	let mensaje;

	ancho=prompt("ingrese el ancho del rectangulo");
	ancho=parseInt(ancho);

	largo=prompt("ingrese el largo del rectangulo");
	largo=parseInt(largo);

	ancho=ancho*2;
	largo=largo*2;
	perimetro=largo+ancho;

	mensaje="El perimetro del rectangulo es : "+perimetro;
	alert(mensaje);
}
