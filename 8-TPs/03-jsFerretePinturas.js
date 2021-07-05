/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let  centigrados , temp;

temp = parseInt(document.getElementById("txtIdTemperatura").value);

// Formula de pasar de grados "fahrenhit" a "celsius".
centigrados = (temp - 32)/1.8;

alert( temp  + " fahrenheit son " + centigrados + " centigrados ");


}

function CentigradosFahrenheit () 
{
	let  fahrenheit , temp;

temp = parseInt(document.getElementById("txtIdTemperatura").value);

// Formula de pasar de grados "celsius" a "fahrenhit".
fahrenheit = (temp*1.8)+32;

alert( temp  + " fahrenheit son " + fahrenheit + " fahrenheit ");

}
