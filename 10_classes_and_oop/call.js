function SetUsername(username){
// complex DB calls
     this.username = username
}

function creatUser(username,email,password){

    SetUsername.call(this, username)        // user ke referance ko hold karne keliy .call use karte hai   // (this,) imp 


    this.email = email
    this.password = password
}

const chai = new creatUser('chai','chai@fb.com','123')
console.log(chai);