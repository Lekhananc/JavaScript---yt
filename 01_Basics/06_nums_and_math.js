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
console.log(otherNumber.toPrecision(3));
