
function userAge(age) {

    if (age >= 0 && age <= 12) {
    
        return("Child")

    }else if (age > 12 && age <= 19) {
    
        return("Teen")

    }else {

        return("Adult")

     }

    return userAge
}

console.log(userAge(13))
