// Objects can be declaired as
// 1. literal
// 2. constructor

// singletone - when we create an object as constructor then that object becomes singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: 'Lekhana',
    "full-name": 'lekhana N C',
    age: 21,
    [mySym]: 'mykey1',
    location: 'Bengaluru',
    email: 'lekhana@gmail.com',
    isLogged: true,
    lastLoggedIn: ["Monday","Saturday"]
}
// ----------------------------------------------------

// to access the value
console.log(jsUser.name);
console.log(jsUser['email']);
console.log(jsUser['isLogged']);
console.log(jsUser["full-name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);
// ----------------------------------------------------
// to change the value
jsUser.email = 'lekh@1234';
console.log(jsUser.email);
// -----------------------------------------------------
// to prevent changes
// Object.freeze(jsUser);
jsUser.email = '1234@ef';
console.log(jsUser['email']);
// -----------------------------------------------------
// adding function to our object
jsUser.greetings = function(){
    console.log('Hello jsUser');
}
// to give referance to same object
jsUser.greetings = function(){
    console.log(`Hello jsUser`);
}
jsUser.greetingsTwo = function(){
    console.log(`Hello jsUser ${this.name}`);
}
console.log(jsUser);
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());