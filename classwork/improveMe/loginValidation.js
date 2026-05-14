function loginvalidation(username, password) {

    if (username.toLowerCase() == "cjsemicolon" && password == "CeeJay12") {

        return "Login Successful"

    }else {

        return "Invalid username or password"    
    
    }

}

console.log(loginvalidation("CjSemicolon", "CeeJay12"))
