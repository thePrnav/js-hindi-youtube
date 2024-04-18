
// { } = scoop

// var c = 300

let a = 300

if(true){
    let a = 10          // {} ke ander code ko block scoop and bhahar wale ko global scoop kehate hai
    const b = 20         // inspect ke ander wala scoop alag hota hai aur code ke ander wala scoop different hota hai

    console.log("INNER: ", a);
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}


console.log(a);
// console.log(b);
// console.log(c);