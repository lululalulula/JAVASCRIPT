/*Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo
contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
// insert code
}*/
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
 // se crea unasa funcion con el parametro (param), que es el array que queremos recorrer
function averageWord(param) {
  // creo variables para la suma de números y la suma de longitudes de cadenas
  let sumNumbers = 0;
  let sumLengths = 0;
 /*Bucle forEach para recorrer cada elemento del array (param). En cada iteración, verificamos 
 si el elemento es un número o una cadena de texto. Si es un número,
  lo sumamos a sumNumbers; si es una cadena, sumamos su longitud a sumLengths*/
  param.forEach(elemento => {
    //función flecha=> define lo que sucederá con cada elemento del array
    if (elemento === 'number') {
      sumNumbers += elemento; // Sumar el valor numérico
    } else if (elemento === 'string') {
      sumLengths += elemento.length; // Sumar la longitud de la cadena
    }
     });
}