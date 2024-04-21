// Immediately Invoked Function Expressions (IIFE)

// 2 IIFE ek saath aise likhte hai

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                              // at the end semi colon is most imp
                                   // code ka end karne keliye semi colon lagaya hai

//  global scoop ke variables or declaration uske pollution ko hutane keliye iife ka use kiya hai


( (name) => {                   // parameters aise pass karte hai
    // Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);

} ) ("pranav")