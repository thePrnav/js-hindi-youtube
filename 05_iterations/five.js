// forEach loop  :-   it is a higher order function 

const coding = ['js','ruby','java','py','cpp']

// coding.forEach( function (val) {       // method 1
//     console.log(val);                 // function
// } )

// note:- in place of val , item koi bhi naam chalega

// coding.forEach( (item) => {       // method 2
//     console.log(item);            // Arrow function      
// } )



// function printMe(item){             // method 3
//     console.log(item);              // printMe function
// }
// coding.forEach(printMe)



//__________________ interview purpose


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);

} )
