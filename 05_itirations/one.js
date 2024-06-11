//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        // console.log('5 is best');
    }
    // console.log(element);
}

// ------------------------------------------------

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and Inner  loop value: ${i}`);
        // console.log(i+'*'+j+'='+i*j);
    }
    
}

// -------------------------------------------------

let myArr = ['idli','dhose','fruits','vegies']

for (let i = 0; i < myArr.length; i++) {
    // console.log(myArr[i]);
    
}

// --------------------------------------------------
for (let i = 0; i < 10; i++) {
    if(i==5){
        break;
    }
    console.log(i);
    
}
for (let i = 0; i < 10; i++) {
    if(i==5){
        continue;
    }
    console.log(i);
    
}

