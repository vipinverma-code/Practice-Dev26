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

// async function github(){
//     const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);
// }
// github();
// console.log("Build disciline it takes only 6 months or 1 year to change everything");


// so always use await inside async function otherwise your program will be freeze. beacuse js don't wait for anyone.

// we have to design a webpage in which we have to show 30 users detail such as image , username, visit social profile.

async function github(){
  try {
 const response = await fetch("https://api.github.com/users");
 if(!response.ok){
   throw new Error("data is not present in the server");
 }
 const data = await response.json();
// console.log(data);
  for(let user of data){

    const parent = document.getElementById("first");

    const element=document.createElement("div");
    element.classList.add("user");

    const image=document.createElement("img");
    image.src= user.avatar_url;

    const userName= document.createElement('h2');
    userName.textContent= user.login;

    const anchor= document.createElement('a');
    anchor.href = user.html_url;
    anchor.textContent = "Visit Profile"

    element.append(image,userName,anchor);
    parent.append(element);
  }
}
catch(error){
  console.log(error.message);
 }

}

github();



