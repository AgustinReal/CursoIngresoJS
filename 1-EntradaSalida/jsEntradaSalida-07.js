/*
Real Agustin DIV D.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
 let num1;

 let num2;

 let suma;

num1 = document.getElementById("txtIdNumeroUno").value;

num1 = parseInt(num1);

num2 = document.getElementById("txtIdNumeroDos").value;

num2 = parseInt(num2);

suma = num1 + num2;

alert("El resultado de la operacion = " + suma);


}

function restar()
{
 let num1;

 let num2;

 let resta;

num1 = document.getElementById("txtIdNumeroUno").value;

num1 = parseInt(num1);

num2 = document.getElementById("txtIdNumeroDos").value;

num2 = parseInt(num2);

 resta = num1 - num2;

 alert("El resultado de la operacion = " + resta);
	
}

function multiplicar()
{ 
 let num1;

 let num2;

 let multiplicacion;

num1 = document.getElementById("txtIdNumeroUno").value;

num1 = parseInt(num1);

num2 = document.getElementById("txtIdNumeroDos").value;

num2 = parseInt(num2);

 multiplicacion = num1*num2;

 alert("El resultado de la operacion = " + multiplicacion);
	
}

function dividir()
{
 let num1;

 let num2;

 let division;

num1 = document.getElementById("txtIdNumeroUno").value;

num1 = parseInt(num1);

num2 = document.getElementById("txtIdNumeroDos").value;

num2 = parseInt(num2);

 division = num1/num2;

 alert("El resultado de la operacion = " + division);
}

