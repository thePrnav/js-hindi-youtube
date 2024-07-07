// let myName = 'hitesh'
// let mychannel = 'chai'

// console.log(myName.trueLength);   this method is good                 or   // console.log(myName.trim().length)      this not good


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammar',
    spiderman: 'sling',

    getSpidermanPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects.`);
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// inheritance                 means kisi aur ki properties ko kaise access kar sakte ho

const User = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable: false
}

const TAsupport = {
    makeAssignment : 'js Assignment',
    fullTime: true,
    __proto__: TeachingSupport            // outdated approach

}

Teacher.__proto__ = User                  // outdated apporach

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let anotherUserName = 'Chaiaurcode       '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
'hitesh'.trueLength()
'icetea  '.trueLength()