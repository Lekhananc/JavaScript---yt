const marvel_heros = ['thor','iron-man','spider-man']
const dc_heros = ['super-man','bat-man','flash']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// let new_heros = marvel_heros.concat(dc_heros);
// console.log(new_heros);

// const breakfast = ['idli','vada','sambar']
// const allNewHeros = [...marvel_heros,...dc_heros,...breakfast];
// console.log(allNewHeros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(anotherArr);
const myUsableAnotherArr = anotherArr.flat(Infinity);
//anotherArr.flat(depth);
console.log(myUsableAnotherArr);

console.log(Array.isArray("Lekhana"));//true or false --> checks if array or not
console.log(Array.from("Lekhana")); //To convert to Array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));//give array from a set of variables