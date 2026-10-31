const orderDetail= {
orderId: 123123,
food:["Pizza","biryani","coke"],
cost:620,
customer_name: "Rohit",
customer_location: "Dwarka",
restaurant_location: "Delhi"
}

 function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    console.log("Payment is in progress");
    return  new Promise((resolve, reject)=>{
          setTimeout(()=>{
        console.log("Payment is recieved and order get placed ");
        orderDetail.status = true;
        resolve(orderDetail);
    },3000)
    })
}

// now next funtion for preparing food
function preparingOrder(){
    console.log("Your food preparation started");
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.status= true;
        resolve(orderDetail);
        
    },3000);

    })
  
}

function pickupOrder(){
    console.log("Delivery boy is on way to pickup order ");
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
    },3000);

    })
  
}
function deliverOrder(){
    console.log("I am on my way to deliver order");
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
    
        orderDetail.delivery = true;
        resolve(orderDetail)
    },3000)
    })
}


// now calling the function 

async function ordering(){
    try {
    const response1 = await placedOrder(orderDetail);
    const response2 = await preparingOrder(response1);
    const response3 = await pickupOrder(response2);
    const response4 = await deliverOrder(response3);
    console.log(response4) ;
} catch(error){
    console.log(error.message);
}
}


async function userDetail(params){
    // const comment = await fetch("userComment");
    // const photos = await fetch("userPhoto");
    // const chat = await fetch("chat");

    const [comment,photos,chat] = Promise.all([fetch("userComment"), fetch("photo"), fetch("chat")]);

}

userDetail();