console.log("Hello World Start");
// Code of Use of Promise 
// Showcase the data of the 30 users of github

// const p1= fetch("https://api.github.com/users")
// // console.log(p1);
// // Promise {pending}
// p1.then((response)=>{
//     // console.log(response);
//     // it gives this api response in byte form , so i have to convert it into json form.
//     // console.log(response.json());

//     // ynha per response.json() bhi ek asynchronous task hai so promise pending state me aayega.

// })

// const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);
// })

// console.log("Hello World End");



// const p1=fetch("https://api.github.com/users");
// // console.log(p1);  ynha per promise pending hai 

// p1.then((response)=>{
//     console.log(response);
// })

// const p2=p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);
// });

// Promise Chaining
fetch("https://api.github.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
    // console.log(data);

    const parent=document.getElementById("first");
    const image = document.createElement('img');
    image.src="https://avatars.githubusercontent.com/u/1?v=4";
    parent.append(image);
})