
// { } = scoop

// var c = 300

// let a = 300

// if(true){
//     let a = 10          // {} ke ander code ko block scoop and bhahar wale ko global scoop kehate hai
    // const b = 20         // inspect ke ander wala scoop alag hota hai aur code ke ander wala scoop different hota hai

    // console.log("INNER: ", a);
    
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log(a);
// console.log(b);
// console.log(c);

//++++++++++++++++++++ Nested scoop +++++++++++++++++/

function one(){
    const username = "pranav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}


// one()

//+++++++++++ 

if (true){
    const username = "pranav"
    if(username === "pranav"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

///+++++++++++++++++++++++++++


//++++++++++++++++++++++++++++ interesting +++++++++++

console.log(addone(5));

function addone(num){                   // function type 1
    return num + 1                      // in this function declaration se pehle execution kar sakte ho
        
}

addTwo(5)
const addTwo = function(num){
    return num + 2                        // function type 2
}                                         // it gives becoz it holds variable ise hoisting bhi kehte hai
                                          // in this function declaration se pehle execution nahi kar sakte
