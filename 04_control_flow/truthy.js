// const userEmail = [];
// if(userEmail){
//     console.log('User Email present');
// }
// else{
//     console.log('User Email not Present');
// }

// Falsy values

// false, 0, -0, BigInt 0n, '', null, undefined, NaN

// Truthy values

// "0", 'false', " ", [], {}, function(){}
// (anything inside string is truthy)

// if(userEmail.length === 0){
//     console.log('Array is Empty');
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log('Object is empty');
// }
// -----------------------------------------------------
// false == 0 --> true
// false == '' -->true
// 0 == '' --> true
// ------------------------------------------------------
// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5??10

// console.log(val1);
// val1 = null??10

// val1 = undefined??15

// val1 = null??10??15
// console.log(val1);
// -------------------------------------------------------
// Terinary Operator

// (condition)?true:false ==> shorthand for if-else
let age = 20;
age>18?console.log('Eligible'):console.log('Not Elegible');