class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){                               // static kya karta hai us property or method ko access hone se rok deta hai
        return `123`
    }
}

const hitesh = new User('hitesh')
// console.log(hitesh.createId());

class teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher('iphone','iphone@gmail.com')

// iphone.logMe();

console.log(iphone.createId());