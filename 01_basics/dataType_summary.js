//  Primitives 

// 7 Types : String, Number, Boolean, Null, Undefined , BigInt, symbol

// javascript is a Dynamic Type 

const score = 100
const scorevalue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 36467537457396835739687373986n


// Reference (Non-Primitive)

// Array , Objects , Functions

// array
const heros = ["Shaktiman" , "naagraj" , "doga"]   

// Object

let myObj = { 
    name : "Pranav",
    age : 21
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof heros);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive) ,  Heap(Non-primitive)

// Example of stack

let myYoutubename = "Hiteshchoudarydotcom"
let anotherName = myYoutubename

anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

// Example of Heap 

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
