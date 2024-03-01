/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que
existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
const duplicates = [
'sushi',
'pizza',
'burger',
'potatoe',
'pasta',
'ice-cream',
'pizza',
'chicken',
'onion rings',
'pasta',
'soda'
];
function removeDuplicates(param) {
// insert code
}
Array.forEach es otra forma de iterar sobre el arreglo y como tal también permite remover duplicados pero de una forma más imperativa.*/
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
    ];
    const unicos = [];
    for(i = 0; i < duplicates.length; i++) {
           const elemento = numeros[i];
           if (unicos.includes(numeros[i])) {
        unicos.push(elemento);
      }
    }
    
    console.log(unicos); // [1, 2, 3, 4, 5]
    
