const accountId = 144553
let accountEmail = "lekhanachidanand08@gmail.com"
var accountPassword = "12345"

/*
prefer not to use 'var'
because of issue in block scope and functional scope
*/

accountCity = "Hassan"
let accountState

// accountId = 2 //not allowed
accountEmail = "lekh@nc@gmail.com"
accountPassword = "45345"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])