/*function sum(numberOne , numberTwo) {
    // insert code
    if (numberOne<numberTwo){
        return(numberTwo);
    }  else { return(numberOne)}
   
}const x = sum (5, 6);
console.log (x)*/

function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return numberOne;
    } else {
      return numberTwo;
    }
  }
  
  console.log(sum(4, 20));
  console.log(sum(40, 20));
  console.log(sum(4, 120));
  console.log(sum(340, 220));
  