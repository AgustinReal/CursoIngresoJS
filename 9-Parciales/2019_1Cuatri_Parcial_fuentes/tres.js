/*
Real Agustin Div D
Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
	let ingresePrecio;
	let ingreseDescuento;
	let precioFinal;

	ingresePrecio=prompt("ingrese su precio");
	ingresePrecio=parseFloat(ingresePrecio);

	ingreseDescuento=prompt("ingrese el descuento");
	ingreseDescuento=parseFloat(ingreseDescuento);

	ingreseDescuento=ingresePrecio*ingreseDescuento/100;

	precioFinal=ingresePrecio-ingreseDescuento;

	document.getElementById("elPrecioFinal").value=precioFinal;
}
