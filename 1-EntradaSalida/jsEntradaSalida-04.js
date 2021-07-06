/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Creamos una V de tipo cadena para el usuario.
	let nombre;
    
    // En este paso le indicamos al usuario que indique el nombre y se guarda en la V (nombre).
	nombre = prompt("Ingrese su nombre");

    // Terminando, esto se pasa de  la variable a la pagina.
	document.getElementById("txtIdNombre").value = nombre;
}

