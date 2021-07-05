function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

  // Solo aparece en pantalla en el rango de edad entre (13 y 17).
	if((edad>=13) && (edad<=17))
	{
		alert("Usted es un adolescente");
	}

}