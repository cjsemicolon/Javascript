const prompt = require("prompt-sync")()
const day = prompt("enter a day of the week: ")

switch (day) {

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
    console.log("weekday")
    break

    case "saturday":
    case "sunday":
    console.log("weekend")
    break

    default:
    console.log("invalid day")


}
