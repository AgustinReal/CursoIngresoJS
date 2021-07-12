/*
Real Agustin Div D
Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	// Solo aparece en pantalla en el rango de edad entre (13 y 17).
	if((edad>12)&&(edad<18))
	{
		alert("Usted es un adolescente");
	}
}