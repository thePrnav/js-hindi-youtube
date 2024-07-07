// Object literal 
const user = {
    userName: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from database');
        // console.log(`userName:${this.userName}`);
        console.log(this);
    }
}

console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// constructor function                     // NOTE: constructor function hume harbar ek new(naya) instance deta hai

// const promiseOne = new Promise()
// const date = new Date()                        //  new keyword is a constructor function , uske wajase empty object create hota hai usko instance kehte hai

function User(username,loginCount,isLoggedIn){
    this.username = username;                        //     left hand side value is variable and right hand side value is (pass karke de rahe ho)
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    
    return this                               // in this (return this) na bhi lekhe toh implicitly define hota hi hai
}

const userOne = new User('hitesh',12,true)
const userTwo = new User('chai',11,false)
console.log(userOne.constructor);
// console.log(userTwo);

// steps :-
// 1) new keyword uske wajase empty object create hota hai usko instance kehte hai
// 2) constructure keyword call hota hai new keyword ke karan , jitni bhi arguments unko pack karke apko deta hai
// 3) jitne bhi arguments likhe hai unko this keyword ke ander inject karta hai
// 4) apko function ke ander mil jate hai 


// search instanceof in javascript