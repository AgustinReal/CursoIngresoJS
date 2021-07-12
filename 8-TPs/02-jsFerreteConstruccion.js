/*
Real Agustin Did D
2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let alambre;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);

    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);

    //En este paso se muestra lado*lado.
    largo=largo*2;
    
    //En este paso se muestra ancho*ancho.
    ancho=ancho*2;

    //En esto se implementa los hilos al rectangulo.
    alambre=(ancho+largo)*3;

    alert("El rectangulo con los 3 hilos es : "+alambre);
}
function Circulo () 
{
    let radio;
    let alambre;
    let calculoRadio;

    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);

    //Utilizamos la formula del perimetro del circulo y lo aplicamos al radio imgresado.
    calculoRadio=2*3.14*radio;

    //En este paso multiplicamos (x3) los hilos de alambre al radio calculado anteriormente.
    alambre=calculoRadio*3;

    alert("El circulo de alambre es : " +alambre.toFixed(2));
  }
function Materiales () 
{
    let ancho;
    let largo;
    let cemento;
    let cal;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);

    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);

    cemento=largo*2;

    cal=ancho*3;

    alert("Los Materiales que se necesitas para contrapiso son " +cemento+" de cemento y "+cal+" de cal.");
}