// singleton  = (constructor se banega toh always singleton)
// Object.create = (constructor method through)

// object literals


// define symbol
const mySym = Symbol("key1")

const JsUser = {
    name: "Pranav",
    "full name" : "Pranav Salunkhe",
    [mySym]: "mykey1",  // Symbol define
    age: 18,
    location: "Jaipur",
    email: "pranav@googl.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);  // acessing values by using dot
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // run symbol by use square brackets

JsUser.email = "prnav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "prnav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
