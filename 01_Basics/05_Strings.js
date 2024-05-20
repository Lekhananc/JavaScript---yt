const name = "Lekhana"
const repoCount = 20

// Bad practice of writng the code
// console.log(name+repoCount+" Value");

// Best practice is to use backticks. Backticks allow string interpolation. String Interpolation is where the concept of placeholders come into picture.
console.log(`Hello my name is ${name} and my Repo Count is ${repoCount}`);

// another way of declaring the string(objects is used)
const gameName = new String("Lekhana")
// string is an object
// they exist in key value pair
// you can access the elements of the string
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-6, 5)
console.log(anotherString);

const newString1 = "    lekhana     "
console.log(newString1);
console.log(newString1.trim());

const newString2 = "lekh"
console.log(newString2.replace("le","an"));