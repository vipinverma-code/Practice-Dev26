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



// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })


// how to get the data or fetch the data from the api  with the help of async await method

// const response = fetch("https://api.github.com/users");
// const data = response.json();
// response.json is not a function
// console.log(data);
async function github(){
    const response = await fetch("https://api.github.com/users");
const data = await response.json();
console.log(data);
}
github();

console.log("Build disciline it takes only 6 months or 1 year to change everything");

