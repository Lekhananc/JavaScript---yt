// destructuring
// Destructuring is a convenient way of extracting values from arrays or properties from objects into distinct variables so that accessing becomes easier
const course = {
    price: '999',
    courseName: 'js in hindi',
    courseInstructor: 'xyz'
}

// course.courseInstructor
// to reduce repeatability
const {courseInstructor: instructor} = course

// console.log(instructor);

// react code==>
// const nav = ({comapany}) =>{
//     navbar(comapany = "Lekhana")
// }
// -----------------------------------
 
const colors = ['red','blue','green'];
// console.log(colors);
const [first,second,third] = colors;
// console.log(first);
// console.log(second);
// console.log(third);
// -----------------------------------
// {
//     'name': 'Lekhana',
//     'courseName': 'Js in Hindi',
//     'price': '999'
// }
// [
//     {},
//     {},
//     {}
// ]
