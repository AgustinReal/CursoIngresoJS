/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let num1, num2, num3, suma;

	num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	
   suma = num1+num2+num3;

   alert("La suma es " + suma);


}
function Promedio () 
{
	let num1, num2, num3, suma, promedio;

	num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	
   suma = num1+num2+num3;

   promedio = suma/3;

   alert("El promedio es " + promedio);
	
}
function PrecioFinal () 
{
	let num1, num2, num3, suma, valorFinal , IVA;

	num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	
   suma = num1+num2+num3;

   IVA = suma*0.25;

   valorFinal = suma-IVA;

   alert("El precio final con el descuento es " + valorFinal)

}