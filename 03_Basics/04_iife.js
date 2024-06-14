// Immediately Invoked Finction Expressions(IIFE)
// *prevent global pollution
// *immediate execution

(function one(){
    // named iife
    console.log('db.connected');
})();

// use semi colen to write 2 iffi

// first () - function defination
// second () - function execution

((name) => {
    //simple unnamed iffi
    console.log(`db.connected2 ${name}`);
})('Lekhana')

// -------------------------------------------------------