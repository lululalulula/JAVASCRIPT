/*Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en
caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
// insert code
}*/
//creamos array//
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
//declaramos una funcion//
function findLongestWord() {
    //variable vacia//
let palabraMasLarga = ""; 
//creamos bucle con for//
for (const palabra of avengers)
//dentro del bucle creamos const palabra {
    if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
    }
}

return palabraMasLarga;


const palabraMasLarga = findLongestWord(avengers);
console.log("La palabra más larga es: "(palabraMasLarga));
