// forEach loop is used to itirate through an array but it does not return anything

// In JavaScript, the filter method is used to iterate over an array and filter out elements based on a condition specified by a callback function

const coding = ['js','java','python','cpp']

// call back function does not have name
coding.forEach( (el,i,arr) =>{
    console.log(i,':-',el,'--',arr);
} )

// Syntax
// array.forEach(function(element, index, array) {
//     // code to execute for each element
//   });

// --------------------------------------------------------

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);
// coding.forEach(only referace to be given);

// -------------------------------------------------------

const progLang = [
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
    }
]

progLang.forEach( (item) => {
    console.log(item.languageName);
    console.log('-----------------');
    console.log(item.languageFileName);
})

//for each loop is used to only itirate through arrays
console.log('+++++++++++++++++++++++++++++++++');
const values = coding.forEach((item) => {
    // console.log(item);
    return item;
})

// console.log(values);
// for each does not return anything

// ------------------------------------------------------
const myNums = [1,2,3,4,5,6,7,8,9,10]
// filter is also call back
// const newNums = myNums.filter((num)=>num>4);

// console.log(newNums);

const a = myNums.filter((nums)=>nums%2==0);
console.log(a);

const b = myNums.filter((nums)=>nums%2!==0);
console.log(b);

const c = myNums.filter((nums)=>nums==5);
console.log(c);

const newNo = myNums.filter((num)=>{

})
console.log(newNo);

// if we open scope in filter or any arrow function we have to compulsuryly use return\

// ------------------------------------------------------

console.log('--------------------------------');

const newNums = []

myNums.forEach((nums)=>{
    if(nums>4){
        newNums.push(nums);
    }
})

console.log(newNums);