function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");
}

// sayMyName()  // sayMyName:- is referance ; ():- execution

// function addTwoNumbers(num1, num2 ){         // when you create defination of the function. in this bracket (num1,num2) jo bhi values aap loge use khehte hai parameters. chahe numbers ya strings subko parameters hi khete hai. 
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2 ){   

    // let result = num1 + num2
    // return result                  // return ke niche kuch bhi code likha ho toh wo code run nahi hoga 

    return num1 + num2
}

const result = addTwoNumbers(3,5)    // (1 , 2):- in this values are called arguments. jab aap function ko call karte hai, tab jo values aap pass karte hai use "Arguments" kahte hai.

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pranav"))

// console.log(loginUserMessage(""))      // print (just logged in)

// console.log(loginUserMessage("pranav"))        // print (undefined just logged in)

// function calculateCartPrice(val1,val2,...num1){
              //       OR
function calculateCartPrice(...num1){           // rest operator or spread operator
    return num1

}

// console.log(calculateCartPrice(200,400,500,600));

const user = {
    username: "Pranav",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)

handleObject({
    username: "sam",                  // passing objects
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100,600]));