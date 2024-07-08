class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was add by ${this.username}`);
    }
}

const chai = new teacher('chai','chai@email.com','123')
chai.logMe()

const masalaChai = new User('MasalaChai')
masalaChai.logMe()

// console.log(chai === masalaChai);
// console.log(chai === teacher);

console.log(chai instanceof teacher);
console.log(chai instanceof User);


