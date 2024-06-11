// <,>,<=,>=,==(checks if the values are equal),===(strictly equal--> checks both value and datatype),!=,!==()
// if
// let age = 32;
// const isUserLoggedin = false;
// const temp = 60;

// if(temp<50){
//     console.log(`temperature is less than 50`);
// }
// else{
//     console.log(`temperature is greater than 50`);
// }
// console.log('executed');
// ---------------------------------
// const score = 20;

// if(score>100){
//     const power = 'fly';
//     console.log(`User Power: ${power}`);
// }
// else{
//     console.log('You do not have enough points');
// }
// -----------------------------------
// const balance = 1000;
// if(balance>500) console.log('You are rich'),
// console.log('waw');
// ==> not a good practice
// -------------------------------------
// const noPages = 1000;
// if(noPages<500){
//     console.log('less than 500');
// }
// else if(noPages<750){
//     console.log('less than 750');
// }
// else if(noPages<900){
//     console.log('less than 900');
// }
// else{
//     console.log('less than 1200');
// }
// ------------------------------------
const userLoggedIn = true;
const debitCard = true;
const balance = 1000;
const loggedInFromgoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn==true && debitCard==true && balance>=1000){
    console.log('Allowed to shop');
}

if(loggedInFromgoogle||loggedInFromEmail){
    console.log('User logged In');
}