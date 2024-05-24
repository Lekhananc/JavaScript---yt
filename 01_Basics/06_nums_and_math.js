const balance = 40098003
console.log(balance)
console.log(typeof balance);

// another way of creating variable with fixed type
// here object is created
const sum = new Number(450)
console.log(sum);
console.log(typeof sum);

const yes = new Boolean(true)
console.log(yes);
console.log(typeof yes);

console.log(balance.toString().length);
console.log('string functions');
console.log((balance.toString()).substring(0,2));

// to fixed is mainly used in e-commerse application whenever the precision becomes to big we use toFixed(some value) to display it with fixed decimal places
console.log(balance.toFixed(2));

const otherNumber = 23.45346
console.log(otherNumber.toPrecision(4));

const num2 = 100000000;
console.log(num2.toLocaleString('en-IN'));

// ----------------------------------Maths-----------------------------------------
console.log(Math);
console.log(Math.abs(-45));// gives absolute value
console.log(Math.round(5.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.sqrt(9));
console.log(Math.pow(9,2));
console.log(Math.min(9,2,5,7,1,8,2));
console.log(Math.max(9,2,5,7,1,8,2));
console.log(Math.floor(Math.random()*10)+1);
// trick 
const min = 10;
const max = 20;
Math.random
console.log(Math.floor(Math.random())*(max-min+1)+min);