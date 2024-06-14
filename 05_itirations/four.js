const obj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}

for(const key in obj){
    console.log(key,':-',obj[key]);
}

const programming = ['C','C++','Python','Java']

for(const i in programming){
    console.log(i);
    console.log(programming[i]);
}

// -------------------------------------------------------

// for in loop is ised to traverse through or itirate through objects
// for in loop can be used to itirate through array but it is not recommended
// for of loop is used to itirate through arrays,string,map,sets etc