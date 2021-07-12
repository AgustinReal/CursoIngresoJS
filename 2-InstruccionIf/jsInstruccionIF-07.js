/*
Real Agustin Did D
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.
*/
function mostrar()
{
    let edad; 
    let estadoX ;

    edad=document.getElementById("txtIdEdad").value;
    edad=parseInt(edad);

    estadoX=document.getElementById("estadoCivil").value;

    // Se indica da la edad y seleciona el estado "soltero" que sea diferente a los demas.
    if (edad<18 && estadoX != "Soltero")
    {
        alert("Es muy pequeño para NO ser soltero.");
    }
}