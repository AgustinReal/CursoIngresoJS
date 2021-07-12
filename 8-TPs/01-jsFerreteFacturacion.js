/*
Real Agustin Div D.
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let suma;

	numeroUno=document.getElementById("txtIdPrecioUno").value;
	numeroUno=parseInt(numeroUno);
    
    numeroDos=document.getElementById("txtIdPrecioDos").value;
    numeroDos=parseInt(numeroDos);

    numeroTres=document.getElementById("txtIdPrecioTres").value;
    numeroTres=parseInt(numeroTres);
	
    suma=numeroUno+numeroDos+numeroTres;

    alert("La suma es " +suma);
}
function Promedio () 
{
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let suma;
	let promedio;

	numeroUno=document.getElementById("txtIdPrecioUno").value;
	numeroUno=parseFloat(numeroUno);

	numeroDos=document.getElementById("txtIdPrecioDos").value;
	numeroDos=parseFloat(numeroDos);

	numeroTres=document.getElementById("txtIdPrecioTres").value;
	numeroTres=parseFloat(numeroTres);

	suma=numeroUno+numeroDos+numeroTres;

	promedio=suma/3;

	alert("El promedio de los numeros ingresados es : "+promedio.toFixed(2));
}
function PrecioFinal () 
{
    let numeroUno;
    let numeroDos;
    let numeroTres;
    let suma;
    let iva;
    let precioFinal

    numeroUno=document.getElementById("txtIdPrecioUno").value;
    numeroUno=parseFloat(numeroUno);

    numeroDos=document.getElementById("txtIdPrecioDos").value;
    numeroDos=parseFloat(numeroDos);

    numeroTres=document.getElementById("txtIdPrecioTres").value;
	numeroTres=parseFloat(numeroTres);

	suma=numeroUno+numeroDos+numeroTres;

	iva=suma*21/100;

	precioFinal=suma+iva;

	alert("El precio final mas el iva agregado es : "+precioFinal.toFixed(2));
}
