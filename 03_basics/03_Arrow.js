const user = {
    username: "hitesh",
    price: 999,

    welcomMessage: function(){
        console.log(`${this.username} , welcome to website`);                 // ( this ) keyword referce to current context
        console.log(this);
    }
}

// user.welcomMessage()
// user.username = "sam"
// user.welcomMessage()
                                                // yaha per hai wo empty object hai
// console.log(this);                              // Browser mai jo object hai wo window object hai


//+++++++++++++++++++++++++++++++

// function chai(){
//     let username = "pranav"
//     console.log(this.username);
// }

// chai()

//+++++++++++++++++++++++++++++++++++++

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }


const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

//+++++++++++++++++++++++++++++++++++
// basic Arrow function 

// () => {}
//++++++++++++++++++++++++++++++++++++


// 1) const addTwo = (num1, num2) => {             // example of basic arrow function
//     return num1 + num2                       // when you use "return" keyword is called explicit return
// }

// 2) const addTwo = (num1, num2) => num1 + num2        //  implicit return

// 3) const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "pranav"})

console.log(addTwo(3,4));

//++++++++++++++++++++++++++++++++++++++++

// const myArray = [2,5,3,7,8]
// myArray.forEach()


