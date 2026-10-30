// fetch("https://api.github.com/users")
// .then((response)=>{
//     console.log(response);
//     if(!response.ok){
//         throw new Error("Data is not present in the server");
//     }
//     return response.json()
// }).then((data)=>{
//     const parent=document.getElementById("first");
//     // for displaying the image of 30 users
//     for(let i=0; i<=data.length; i++){
//     const image= document.createElement('img');
//     // image.src="https://avatars.githubusercontent.com/u/1?v=4";
//     image.src = data[i].avatar_url;
//     image.style.height="100px";
//     image.style.width="100px";
//     parent.append(image);
// }})
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// })


// const j1= {
//     name: "Vipin Verma",
//     age: 30,
//     address: "lmp",
//     c: "undefined",
// }

// convert this object into json format

// const  jsonFormat= JSON.stringify(j1);
// console.log(jsonFormat);
// now learn the conversion of json into JS Object format

// const user=`{
//     "name":"Vipin Verma",
//     "age":"22",
//     "profession":"developer and digital expert",
//     "address":"lmp"
// }`

// // convert this json format data into js object 
// const user2=JSON.parse(user);
// console.log(user2);

// const m1=fetch('https://fakestoreapi.com/products/1');
// const m2=m1.then((response)=>{
//     return response.json();
// })

// m2.then((data)=>{
//     console.log(data);
// })


// Now  I am learning about how to create Promise

// const prom= new Promise((resolve,reject)=>{
//     reject("Hello , You are a developer be soon! ");
// })
// prom.then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })


// Now we are going to learn about how promise can handle the callback hell problem

// zomato application
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
placedOrder(orderDetail)
.then((orderDetail)=>{
    preparingOrder(orderDetail)
}).then((orderDetail)=>{
    pickupOrder(orderDetail)
}).then((orderDetail)=>{
    deliverOrder(orderDetail)
})
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log(error.message);
})
.finally(()=>{
    console.log(" I am doing cleanup");
})






