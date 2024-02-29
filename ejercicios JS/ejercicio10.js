/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los
números de la matriz. Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(param) {
// insert code
}*/
const numbers = [1, 2, 3, 5, 45, 37, 58];
//se crea array []//
function sumAll(numbers) 
//se crea funcion de ese array//
{
    let suma = 0;
    //se crea variable que va recogiendo la suma//
    for (let i = 0; i < numbers.length; i++)
    /* Se inicia un bucle "for" que empieza con i=0. El bucle se repetirá 
mientras i sea menor que la longitud del array "numeros"*/
    {
        suma += numbers;
        /*    // En cada iteración del bucle, 
        se agrega el valor del elemento actual del array "numeros" a la variable "suma".*/
    }
    return suma;
    /*// Al salir del bucle, la función devuelve el valor acumulado en la variable "suma", 
    que es la suma de todos los elementos en el array "numeros"*/
}
