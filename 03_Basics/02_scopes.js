// var c = 300;
let a = 300
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;  
    // console.log("Inner"); 
}

// console.log(a);
// console.log(b);
// console.log(c);
// var can be accessed globally nut let is block specific
// ------------------------------------

function one(){
    const userName = "Lekhana"
    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);    //erroe
    console.log("Hello");
    two();
}
one();
// -----------------------------------
console.log("----------------------");

if(true){
    const userName = "Lekhana";
    if(userName=="Lekhana"){
        const website = " youtube"
        console.log(userName+website);
    }
    // console.log(website);    //error
}
// console.log(userName);   //error

// ++++++++++++interesting++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1;
}
// --------
// console.log(addtwo(7));  //error

const addtwo = function(num){
    return num+2;
}

console.log(addtwo(7));

// mini hoising
