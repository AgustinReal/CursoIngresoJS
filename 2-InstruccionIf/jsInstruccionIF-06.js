/*
Real Agustin Div D
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	// En el rango de mayores a 18 años
	if(edad>17)
	{
	   alert("Usted es mayor de edad");
	}
	// En el rango de menores a 13 años
	 else if (edad<13) 
	{
	   alert("Usted es niño");
	}
	// En el rango de adolescentes de 13 años a 17 años.
	else  
	{
	   alert("usted es un adolescente");
	}
}