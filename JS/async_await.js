// async function always return a promise
// function greet(){
//     return "Vipin Bro";
    
// }
// const response = greet();
// console.log(response);
// now we make async function 

// async function greet(){
//     return "Vipin Verma";
//     // return new Promise((resolve,reject)=>{
//     //     reject("Vipin Verma");
//     // })
// }
// const response= greet();
// // console.log(response);    
// response.then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//     console.log(error.message);
// })



fetch("https://api.github.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})