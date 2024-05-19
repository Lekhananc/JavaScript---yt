// Premitive dataTypes(call by value)
/*
7 types:
    1: String=>String
    2: Number=>number
    3: Boolean=>boolean
    4: null(empty)=>type => object
    5: undefined=>undefined
    6: Symbol
    7: BigInt
*/
    const score = 100
    const scoreVal = 100.0
    const isLoggedIn = false
    const roomTemp = null
    let userEmail
    const id = Symbol('12345')
    const anotherId = Symbol('12345')

    console.log(id==anotherId);

    const bigNumber = 42354344534346455646546n
    console.log(typeof bigNumber)
// JavaScript is a dynamically typed language
// TypeScript is a statically typed language

// Regerence Type/non-premitive dataTypes(call by reference)
/*
    1: Arrays=>object
    2: Objects=>object
    3: functions=>function object

*/

const heros = ["spiderman","ironman","batman","antman"]
// console.log(heros);
// console.log(typeof heros);

MyObj = {
    name: "lekhana",
    age: 21,
    gender: 'F'
}
// console.log(MyObj);

const myFunc = function(){
    // console.log("Hello World!")
}
myFunc()

// -------------------------------------------------------
// There are two types of memory 
// 1:Stack(premitive types use stack)
// 2:Heap(non-premitive types use heap)

let myYouTubeName = "hiteshchoudharydotcom"

let anotherName = myYouTubeName
anotherName = "ChaiAurCode"

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "lekhanachidanand08@gmail.com",
    upiId: "lekh@ybl"
}

let userTwo = userOne

console.log(userOne.email)
console.log(userTwo.email)

