/*
Real Agustin Div D
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
    
    //Tambien se puede utilizar (edad>=18) pero no es necesario para este ejercicio, es decir un recurso innecesario o una perdida de tiempo del codigo.
	if(edad>17)
	{
		alert("Es mayor de edad");
	}
	else 
	{
		alert("Es menor de edad");
	}
}