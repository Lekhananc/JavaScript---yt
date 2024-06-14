const coding = ['js','java','python','cpp']

// call back function does not have name
coding.forEach( (el,i,arr) =>{
    console.log(i,':-',el,'--',arr);
} )

// Syntax
// array.forEach(function(element, index, array) {
//     // code to execute for each element
//   });

// --------------------------------------------------------

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);
// coding.forEach(only referace to be given);

// -------------------------------------------------------

const progLang = [
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
    }
]

progLang.forEach( (item) => {
    console.log(item.languageName);
    console.log('-----------------');
    console.log(item.languageFileName);
})

//for each loop is used to only itirate through arrays