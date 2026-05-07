 const account = { balance: 500, isBlocked: false};
//If blocked → "Account blocked"
// Else if balance < 100 → "Low balance"
// Else → "OK"

if (account.isBlocked == true) {
        console.log("Account Blocked")
    }else if (account.balance < 100) {
            console.log("Low Balance")
        }else{
                console.log("OK")
            }
