/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// Se crea 2 variables (edad y nombre), para el usuario.
	let nombre, edad ;

    // En este paso guardamos en la V (nombre) el valor indicado, en este caso el nombre ingresado por el usuario.
	nombre = document.getElementById("txtIdNombre").value;

    // En este paso guardamos en la V (edad) el valor indicado, en este caso la edad ingresado por el usuario.
	edad = document.getElementById("txtIdEdad").value;

    // Para finalizar se imprime en pantalla el msj y sus respectivos valores.
	alert("Su nombre es " + nombre + " y su edad es " + edad + " años.");
}

