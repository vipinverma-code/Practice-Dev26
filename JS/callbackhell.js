// zomato application

function placedOrder(Callback){
    console.log("Payment is in progress");
    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        Callback();
    },3000)
}

function preparingOrder(Callback){
    console.log("Your food prepartion started");
    setTimeout(()=>{
        console.log("Your food is prepared");
        Callback();
    },3000)
}

function pickupOrder(Callback){
    console.log("Delivery boy is on way to pick up the order");
    setTimeout(()=>{
        console.log(" I have picked the order")
        Callback();
    },3000);
}

function deliverOrder(){
    console.log("I am on my way to deliver order");

    setTimeout(()=>{
        console.log("Order delivered successfully");
    },3000)
}

placedOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
})


