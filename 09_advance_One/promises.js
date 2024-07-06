// Promise 1

const promiseOne = new Promise(function(resolve,reject){
          // Do an async tasks
          // DB calls , cryptography , networks

          setTimeout(function(){
            console.log('async task is complete');
            resolve()
          },1000)
})

promiseOne.then(function(){              // then() is directly connected to resolve
    console.log('promise is consumed');
})       

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Promise 2

new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Promise 3                              (data consumption)

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: 'Chai', email: 'chai@example.com'})
    })
},1000)

promiseThree.then(function(user){
    console.log(user);
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Promise 4         (.then().catch()   : methode)

const promiseFour = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true                                       // also check when error = false     (study purpose)
        if(!error){
            resolve({username: 'hitesh', password: '123'})
        }else{
        reject('ERROR: something went wrong')
        }
     }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Promise 5                      promise is a evetion-complition object

// async-await method                           disadvantage :- direactly errors ko handle nhi kar sakte

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = true
       if(!error){
        resolve({username: 'javascript', password: '123'})
    }else{
    reject('ERROR: js went wrong')
    }
 }, 1000)
})

//  try-catch format

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
    console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()                                // the data is in form of string , convert karene keliye json() use kiya hai
//         console.log(data);
//     } catch (error) {
//         console.log('error: ', error);
//     }
// }

// getAllUsers()

// +++++++++++++++++++++++++++++ OR  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// another appoarch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data) => {
   console.log(data);
})
.catch((error) => console.log(error))