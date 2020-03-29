//let
//console.log(numValue); // Exception : Cannot access 'numValue' before initialization

let numValue=10; // global variable
console.log(numValue); //10

numValue=13; //Reusable Model
console.log(numValue);

//let numValue = 15;
//console.log(numValue); // Identifier 'numValue' has already been declared

//console.log(numValue1); //numValue1 is not defined
{
//console.log (numValue);
let numValue1 = 11; // local variable
console.log(numValue1); //11

// In local scope we able to define same variable name which is already define in global scope
let numValue = 12; // local scope declaration
console.log (numValue); //12
}

//console.log(numValue1); //numValue1 is not defined
console.log(numValue); //13

//var
console.log(numValue2); // undefined
var numValue2 = 30;
console.log(numValue2);

console.log(numValue3); //undefined

{
console.log(numValue2); //30

var numValue3 = 40;
console.log(numValue3);  //40

}

console.log(numValue3); //40

//const

const pi = 3.14;
console.log(pi); // 3.14

//pi = 3.15;
//console.log(pi); // Assignment to constant variable.
