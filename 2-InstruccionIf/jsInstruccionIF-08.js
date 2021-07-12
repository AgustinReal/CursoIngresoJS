/*
Real Agustin Div D
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
    let edad;
    let estadoX;

    edad=document.getElementById("txtIdEdad").value;
    edad=parseInt(edad);

    estadoX=document.getElementById("estadoCivil").value;

    // Se indica da la edad y seleciona el estado "soltero" que sea diferente a los demas.
    if (edad>17 && estadoX != "Soltero")
    {
        alert("Es soltero y no es menor.");
    }
}