/*
Real Agustin DIV D.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;

   let divisor;

   let resto;

   dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);

   divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

// En esta operacion utilizamos "%" para sacar resto de una division.
   resto = dividendo%divisor;

	alert("El resultado del resto es " + resto);
}
