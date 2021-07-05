function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad>=18)
	{
      alert("Usted es mayor de edad");
	}
	// En el rango de menores a 13 años
	 else if (edad<=12) 
	{
	 alert("Usted es niño");
	}
	else  
	{
	 alert("usted es un adolescente");
	}


}