// zomato application
const orderDetail={
    orderId: 123123,
    food:["Pizza","Biryani","Coke"],
    cost:600,
    customername: "VipinVerma",
    customer_location : "lko",
}
function placedOrder(orderDetail, Callback){
    console.log(`${orderDetail.cost}Payment is in progress`);
    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        orderDetail.status = true;
        Callback(orderDetail);
    },3000);
}

function preparingOrder(orderDetail, Callback){
    console.log("food preparation is to be started");

    setTimeout(()=>{
        console.log("your order is now prepared");
        Callback(orderDetail);
        // pickupOrder();
        // we don't have to hard code the values makes it reusable 
    },3000)
}


function pickupOrder(Callback){
    console.log("you have to pick the order");

    setTimeout(()=>{
        console.log("I have pick the order")
        Callback();
    },3000)
}

function deliverOrder(){
    console.log("On way to deliver the order");

    setTimeout(()=>{
        console.log("Order delivered succeesfully");
    })
}

placedOrder(orderDetail,
    (orderDetail)=>{
        preparingOrder(orderDetail,()=>{
            pickupOrder(()=>{
                deliverOrder();
            });
        })
    }
)

// Callback isna situation where multiple asynchronous opaerations are nested inside one another through callback, making the code diddicult to read ,maintain , understand.