function mostrar()
{
  /* Real Agustin , Div D
  Enunciado:
  Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
  "EXCELENTE" para notas igual a 9 o 10,
  "APROBÓ" para notas mayores a 4,
  "Vamos, la proxima se puede" para notas menores a 4
  */

  let numeroAleatorio;

  numeroAleatorio=Math.round(Math.random()*10);

  if(numeroAleatorio<5)

  {
     alert( "Su nota es : " +numeroAleatorio+ " Vamos, la proxima se puede ");
  }
  else if(numeroAleatorio>8)
  {
     alert("Su nota es : " +numeroAleatorio+ " EXCELENTE " );
  }
  else
  {
     alert("Su nota es : " +numeroAleatorio+ " APROBÓ ");
  }
  }