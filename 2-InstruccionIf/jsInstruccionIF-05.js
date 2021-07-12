/*
Real Agustin Div D
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	//Solo aparece en pantalla en el rango de edad (menor a 13) o (mayor a 18).
	if((edad<13)||(edad>18))
	{
	    alert("Usted no es un adolescente");
	}
}