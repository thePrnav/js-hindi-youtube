// after ES6

// class user{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptedPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user('chai','chai@email.com','123')
// console.log(chai.changeUsername());
// console.log(chai.encryptedPassword());

// behind the scene

function user(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    user.prototype.encryptedPassword = function(){
        return `${this.password}abc`
    }
    user.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}abc`
    }

    const tea = new user('tea','tea@email.com','123')
console.log(tea.changeUsername());
console.log(tea.encryptedPassword());

