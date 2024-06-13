// const tinderUser = new Object()
// console.log(tinderUser);    //{}

// const x = new Array();
// console.log(x); //[]

// const fun = function(){}
// fun();
// console.log(fun()); //undefinded
// -------------------------------------
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// ------------------------------------
const regularUser = {
    email: 'abc@email.com',
    fullname: {
        userFullName: {
            firstName: 'Lekhana',
            middleName: 'N',
            lastName: 'C'
        }
    }
}
// console.log(regularUser);

// console.log(regularUser.fullname.userFullName.firstName);
// ------------------------------------
const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {4:'d',5:'e',6:'f'}
const obj4 = {7:'d',8:'e',9:'f'}
// output:
// {
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '1': 'd', '2': 'e', '3': 'f' }
//   }

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);
// -------------------------------------
const users = [
    {
        id: 1,
        email: 'l@gmail.com'
    },
    {
        name: 'Lekhana',
        age: 21
    },
    {
        college: 'MCE',
        gender: 'F'
    }
]

// console.log(users);

for(let i = 0;i<users.length;i++){
    // console.log(users[i]);
}
// -------------------------------------
console.log(tinderUser);
console.log(Object.keys(tinderUser));
// we get array of keys
// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
// we get array of values
// [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser));
// array inside array
// [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
// -------------------------------------
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('abc'));