/*
Real Agustin DDiv D
Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
    let nombreIngresadoUno;
    let nombreIngresadoDos;
    let pesoIngresadoUno;
    let pesoIngresadoDos;
    let pesoSumados;
    let promedioPeso;

    // En este paso le pedimos al"señor" que ingrese nombre y peso.
    nombreIngresadoUno=prompt("ingrese su nombre señor");
    pesoIngresadoUno=prompt("ingrese su peso señor");
    pesoIngresadoUno=parseFloat(pesoIngresadoUno);

    // En este paso le pedimos a la"señora" que ingrese nombre y peso.
    nombreIngresadoDos=prompt("ingrese su nombre señora");
    pesoIngresadoDos=prompt("ingrese su peso señora");
    pesoIngresadoDos=parseFloat(pesoIngresadoDos);

    pesoSumados=pesoIngresadoUno+pesoIngresadoDos;

    promedioPeso=pesoSumados/2;

    alert("ustedes se llaman " +nombreIngresadoUno+ " y " +nombreIngresadoDos+ " y el pesa " +pesoIngresadoUno+ " y ella " +pesoIngresadoDos+ " kilos " + " , que sumados son " +pesoSumados+ " kilos y el promedio de peso es : " +promedioPeso.toFixed(2));

}
