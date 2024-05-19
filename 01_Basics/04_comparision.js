// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2<=1);
// console.log(2<1);

// console.log("2">1);
// console.log(2>"1");
// console.log("d" > "abc");
// console.log(false<="1");
// -------------these kind of conversion is not a good practice-----------------
// console.log(null>0);
// console.log(null==0);

// equality(==) and comparision(>,<,>=,<=) works differently
// comparision converts null to a number treating it as 0
// That is why null>=0(true) and null>0(false)

// console.log(null>=0);
// console.log(null<0);
// console.log(null<=0);

// console.log(undefined>0);
// console.log(undefined>=0);
// console.log(undefined<0);
// console.log(undefined<=0);
// console.log(undefined==0);
// console.log(undefined!=0);

// let x = null
// let y = x + 1
// console.log(y)

// ===(strict check)

let x = "3"
let y = 3
// console.log(x===y)
// console.log(x==y)