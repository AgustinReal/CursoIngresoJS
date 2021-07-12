/*
Real Agustin Div D
Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;
	

	precio=prompt("ingrese el precio")
	precio=parseFloat(precio);

	descuento=prompt("ingrese el descuento")
	descuento=parseFloat(descuento);

	descuento=precio*descuento/100;
	precioFinal=precio-descuento;

	document.getElementById("elPrecioFinal").value=precioFinal;
}
