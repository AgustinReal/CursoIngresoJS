/*
Real Agustin DIV D.

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  // En estas variables aclaramos que "El sueldo"= (Salario), "Los extras"= (Aumento 10%) y "El salarioFinal" = (Valor final).
  let salario;
  let extras;
  let salarioFinal;


  salario=document.getElementById("txtIdSueldo").value;
  salario=parseFloat(salario);

  // En esta operacion sacamos el 10%.
  extras=salario*10/100;

  // Se le suma al Importe final. 
  salarioFinal=salario+extras;

  // El resultado  de variable "salarioFinal" se le asigna a Id("txtIdResultado") para que aparezca en  la caja "Resultado".
  document.getElementById("txtIdResultado").value = salarioFinal.toFixed(2);
	
}
