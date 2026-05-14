const prompt = require("prompt-sync")()
const score = +prompt("Enter a score: ")

function scoreGrading(score) {

    if (score > 70){

        return "A"
    
    }else if(score > 59 &&  score <= 69){

        return "B"
    
    }else if(score > 50 && score <= 59){

        return "C"
    
    }else if (score > 50 && score <= 59){

        return "D"
    
    }else{

        return "F"    

    }

}

console.log(scoreGrading(score))

