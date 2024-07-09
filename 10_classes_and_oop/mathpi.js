//++++++++++++++  getOwnPropertyDescriptor +++++++++++++++++++++++++++++++++


const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvaliable: true,

    orderChai: function(){
        console.log('chai nhi bni');                          //  code fatna 
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

//+++++++++++++++++++  defineProperty  ++++++++++++++++++++++++++++++++++++++++++++++

Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));


// ++++++++++++  forof loop  +++++++++++++++++++++++++++++++++++++

for (let [key,value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
          console.log(`${key} : ${value}`);
    }
     
}

