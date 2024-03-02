//hay un array:
const numbers = [12, 21, 38, 5, 45, 37, 6];
/*Creamos una función llamada average que toma 
un parámetro llamado param. Este parámetro es el array del cual queremos calcular el promedio.*/
function average(param) {
  // y dentro creo la variable que recogera el resultado
let sum = 0;
//creamos el bucle para recorrer el array
  for (i = 0; i < param.length; i++) {
    sum += param[i];
    //aqui obtenemos el contenido de la suma
  }
  // salimos del bucle con la suma y calculamosfuera el promedios
let promedio = sum / param.length;
}
console.log("El promedio es: " + promedio);

