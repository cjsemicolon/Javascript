const prompt = require("prompt-sync")()
const number = +prompt("Enter a number: ")

if(number % 2 != 0){
console.log(number, "is an odd number")
}
