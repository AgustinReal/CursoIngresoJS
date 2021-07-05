function mostrar()
{
 let edad, estadoX ;

 edad = parseInt(document.getElementById("txtIdEdad").value);
 
 estadoX = document.getElementById("estadoCivil").value;

// Se indica da la edad y seleciona el estado "soltero" que sea diferente a los demas.
 if (edad<=17 && estadoX != "Soltero")
 {
  
 alert("Es muy pequeño para NO ser soltero.");
   
 }

}