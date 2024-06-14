const user = {
    username: "Lekhana",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}

// When a method is called as a property of an object, this refers to the object itself.

// console.log(user);   wrong way
// user.welcomeMessage();
// console.log(user.welcomeMessage()); wrong way

// user.username = "sam";
// user.welcomeMessage();
// --------------------------------------------------------
// console.log(this);  //{}

// function in non strict mode gives global object and in strict mode gives undefined
// --------------------------------------------------------
function one(){
    console.log(this);  //gives a global object
}
// one();

// When a standalone function is called, this refers to the global object (window in browsers) or undefined in strict mode.
// --------------------------------------------------------

function two(){
    let username = "Lekhana";
    console.log(this.username);
}
two();   //undefined
// -------------------------------------------------------
const three = function(){
    let username = "Lekhana";
    console.log(this.username);
    console.log('three');
    console.log(this);  //global object
}
// three();

// ARROW FUNCTIONS

const chai = () => {
    let username = "Lekhana";
    console.log(this.username);
    console.log(this);  //{}
}
// chai();

// Arrow function do not have their own this context. They ingerit this from surrounding context in which they are defined
// here the arrow function is defined in global scope so it nherits this from global context
// ------------------------------------------------------

const addTwo = (num1,num2)=>{
    return num1+num2;   //explicite return
}
console.log(addTwo(3,4));

// {}-->return 

const addTwoNo = (num1,num2) => num1+num2;//implicit return

console.log(addTwoNo(3,4));

// -------------------------------------------------------
