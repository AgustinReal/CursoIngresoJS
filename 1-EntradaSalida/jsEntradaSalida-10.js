/*
Real Agustin DIV D.
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
    let valorFinal;

	importe=document.getElementById("txtIdImporte").value;
	importe=parseFloat(importe);

	descuento=importe*25/100;

	valorFinal=importe-descuento;

	document.getElementById("txtIdResultado").value=valorFinal.toFixed(2);
}
