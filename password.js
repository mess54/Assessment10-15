const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

reader.question("Please enter your password")
function CheckPassword(inputtxt){
var passWord = `TykoZeus1!%`
if(inputtxt.value.match(passWord)){
    console.log("Correct password")
} else{
    console.log("Incorrect password, please try again")
}} reader.close()