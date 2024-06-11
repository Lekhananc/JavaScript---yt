const myArr = [0,1,2,3,4,5];
// arrays can be mixed
// resizable
// cannot access using arbitary variable
// 0 indexed
// whenever copy operation is performed shallow copy is created
// console.log(myArr);
// console.log(myArr[0]);

const breakfast = ['idli','dosa','poha']

const myArr2 = new Array(1,2,3,4,4);
// console.log(myArr2);
// ----------------------------------------------------
// Array methods
    // myArr.push(9);
    // myArr.push(8);
    // console.log(myArr);

    // myArr.pop();
    // console.log(myArr);
    // ---------------------------------------------------
    // myArr.unshift(9);   //Adds an element to the start of the array
    // console.log(myArr);
    // myArr2.unshift(9);
    // myArr2.shift();
    // myArr2.shift();
    // console.log(myArr2);
    // ---------------------------------------------------

    // console.log(myArr.includes(2));  //true
    // console.log(myArr.includes(9));  //false
    // console.log(myArr.indexOf(5));   //5
    // console.log(myArr.indexOf(9));   //-1(not present)
    // ----------------------------------------------------
    // const newArr = myArr.join();
    // console.log(myArr);
    // console.log(newArr);    //type is changed to string

    // --------------slice---------------splice------------

    console.log('A',myArr);
    const myn1 = myArr.slice(1,3); //It does not manupulate the original array and includes stop value
    console.log(myn1);
    console.log(myArr);

    console.log('B',myArr);
    const myn2 = myArr.splice(1,3); //It manupulate the original array and dpes not includes stop value
    console.log(myn2);
    console.log(myArr);