/*
Real Agustin Div D
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
  let numeroAleatorio;

  numeroAleatorio=Math.round(Math.random()*10);

  // Muestra en pantalla el numero.
  alert( numeroAleatorio);
}