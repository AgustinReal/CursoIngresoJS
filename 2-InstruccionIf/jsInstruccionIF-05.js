function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

 // Solo aparece en pantalla en el rango de edad (menor a 13) o (mayor a 18)
	if((edad<=13) || (edad>=17))
	{
		alert("Usted  no es un adolescente");
	}
}