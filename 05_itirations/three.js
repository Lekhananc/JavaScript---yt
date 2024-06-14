// for of
// array specific loop
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(arr);
}
// -------------------------------------------------------
const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet == ' '){
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

// --------------------------------------------------------
// MAPS

const map = new Map()
map.set('IN','India')
map.set('US','USA')
map.set('UK','United Kingdom')
console.log(map);

console.log(map.get('IN'));
console.log(map.get('US'));

// map.delete('UK');
// console.log(map);

// map.clear()
// console.log(map);

for(const key of map){
    console.log(key);
}

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObj = {
    game1: 'pubg',
    game2: 'uncharted',
    game3: 'freefire'
}

for(const [key,value] of myObj){    //myObj -> not itiratable
    // console.log(key,':-',value); //error
}