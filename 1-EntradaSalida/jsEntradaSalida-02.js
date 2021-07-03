/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// Se usa "let" para una variable, en este caso (cadena) para definir el nombre.
	let nombre;

    // Se iguala (nombre = prompt) para guardar el nombre ingresado por el usuario.
	nombre = prompt("ingrese su nombre");

    // Lee en pantalla el nombre ingresado por el usuario.
	alert(nombre);
}

