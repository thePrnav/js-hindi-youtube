const accountId = 144553
let accountEmail = "pranav@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2    ; not allowed

accountEmail = "hrsg@gmail.com"
accountPassword = "2121345"
accountCity = "Pune"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])