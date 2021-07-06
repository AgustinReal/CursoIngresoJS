/*
Real Agustin DIV D.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
    
    let numero2;

    let suma;

    numero1= document.getElementById("txtIdNumeroUno").value;

    numero2= document.getElementById("txtIdNumeroDos").value;

    numero1= parseInt(numero1);

    numero2= parseInt(numero2);

    suma = numero1+numero2;

    alert("El resultado es " + suma );

}

/*La forma simplificada de la transformacion es:

numero1= parseInt(document.getElementById("txtIdNumeroUno").value);

numero2= parseInt(document.getElementById("txtIdNumeroDos").value);

*/