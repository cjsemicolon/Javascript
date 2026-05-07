 const order = { status: "delivered" };
 //Return:  "Processing" → if pending, "Shipped" → if shipped,  "Delivered" → if delivered

if (order.status == "pending") {
        console.log("Processing")
    }else if (order.status == "shipped") {
            console.log("Shipped")
        }else if (order.status == "delivered") {
                console.log("Delivered")
            }
