// fetch('https://google.com').then().catch().finally()

const promiseOne = new Promise((resolve,reject)=>{
    // do an async task
    // db calls, cryptography, network

    setTimeout(()=>{
        console.log('Async task completed');
        resolve();
    },1000)
})


   //related to resolve
promiseOne.then(()=>{
    console.log('Promise consumed');
},1000)
// ----------------------------------
new Promise((resolve,reject)=>{
    console.log("Async task 2");
    resolve();
},1000).then(()=>{
    console.log("Async resolved");
})

// ----------------------------------

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: "abc", email:"abc@email.com"});
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})
// --------------------------------------------

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({userName: 'Lekhana', password: 1234});
        }
        else{
            reject("ERROR: something went wrong");
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Task completed');
});

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Promise five executing');
        let error = false;
        if(!error){
            resolve({name:'Lekhana',age:21});
        }
        else{
            reject('UNKNOWN ERROR');
        }
    },1000)
})



promiseFive
.then((user)=>{
    console.log(user);
    return user.age;
})
.then((userAge)=>{
    console.log(userAge);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Task 5 completed');
})



async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

const PromiseDemo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error = false;
       if(!error){
        resolve({Name:'Lekhana'})
       } 
       else{
        reject('REJECTED')
       }
    },1000)
})

// PromiseDemo.then((userName)=>{
//     console.log(userName);
// }).catch((error)=>{
//     console.log(error);
// })

async function consumePromiseDemo(){
    try{
        const response = await PromiseDemo;
        console.log(response);
    }
    catch(error1){
        console.log(error1);
    }
}

consumePromiseDemo();