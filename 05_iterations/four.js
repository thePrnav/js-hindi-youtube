// for in loop

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject){
   // console.log(`${key} shortcut is for ${myObject[key]}.`);      // console.log(myObject[key]);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++


const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
    // console.log(programming[key]);     // console.log(key);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Map is not iteratable  that why code will be not run. Map is iteratable but it is not style.

const map = new Map()
map.set('IN', "India")                               // Maps ke under unique
map.set('USA', "united states of america")           // values hoti hai order maintain rahegi
map.set('Fr', "france")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
    
}