function myName(){
    console.log("L");
    console.log("E");
    console.log("K");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("A"); 
}

// myName();

function addTwoNo(a, b){
    result = a+b;
    console.log("Lekhana");
    return result;
}
// let a = 5;
// let b = 4;
// addTwoNo(2,3);
// console.log(addTwoNo(10,8));

// -------------------------------------
function loginUserMessage(username){
    return `${username} just logged in`;
}
loginUserMessage('Lekhana');
// console.log(loginUserMessage('Lekhana'));
// console.log(loginUserMessage('Lekhana'));   if no value is passed inside the method it'll show undefined


function loginUserMessage(username){
    if(username == undefined){
        return
    }
    return `${username} just logged in`;
}
// ------------------------------------
// if(undefined) ==> falsy value --> does not inter into the block
// replacement
// if(!username){
    //     console.log('Please enter the user name');
    //     return
    // }
    // return `${username} just logged in`;
    
    // ---------------------------------
    // default values
function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter the user name");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage());

// ------------------------------------
// ... -> rest operator, ...-> spread operator
// function calcCartPrice(...num){
//     return num;
// }

// console.log(calcCartPrice(200,300,700,900,234));
// -------------------------------------

function calcCartPrice(val1,val2,...num){
    return num;
    }
    
// console.log(calcCartPrice(200,300,700,900,234));
// 200->val1, 200->val2, num->700,900,234
// ------------------------------------
const user = {
    userName: "Lekhana",
    age: 21
}
const user1 = {
    userName: "Manoj",
    age: 19
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.userName}, age is ${anyObj.age}`);
}

// handleObject(user);
// handleObject(user1);

// ---------------------------------
handleObject({
    userName: "sam",
    age: 20
})
// ----------------------------------
const myArr = [200,400,100,800];

function returnArray(getArray){
    for(i = 0;i<getArray.length;i++){
        console.log(getArray[i]);
    }
}
// returnArray(myArr);
// -----------------------------------
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArr));
// -------------------------------------

// console.log(returnSecondValue([2,4,5,9]))