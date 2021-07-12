/* Real Agustin Div D
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	let lado;
	let perimetro;

	lado=prompt("ingrese un lado del triangulo");
	lado=parseInt(lado);

	perimetro=lado*3;

	alert("El perimetro del triangulo equilatero es : " +perimetro);
}
