// const element=document.getElementById("first");

// function handleClick(){
//     const element=document.getElementById("first");
//     element.textContent="Strike is Coming";
// }

// const element=document.getElementById("first");
// element.onclick=function handleClick(){
//     element.textContent="Becoming developer sooon";
// }
// console.log(element);

// element.onclick=function handleClick(){
//     element.textContent="Becoming an software engineer and digital expert";
// }
// console.log(element);
// const element=document.getElementById("first");
// element.addEventListener('click',()=>{
//     element.textContent="Becoming developer soon";
//     element.style.backgroundColor="pink";
// });
// console.log(element);

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="pink";
// });

// let a ={
//     greet:function(value){
//         console.log("Hello", value);
//     }
// }
// a.greet(10);
// a.greet(20);

// const element=document.getElementById("first");
// element.addEventListener('mouseleave',()=>{
//     element.textContent="Be calm and do daily more hard work than yeasterday with good intensity";
//     console.log("Mouse down");
// })

// Mouse Events are:- click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave

// const element=document.getElementById("parent");
// console.log(element.children);
// her ek div  per event lgana toh loop chala dete hai.

// for(let child of element.children){
//     console.log(child);
//     child.addEventListener('click',(e)=>{
//         child.textContent="I'm clicked";
//         console.log('I am clicked');
//     })
// }

// abhi bhi ek issue hai ki 5 baar hme eventlistener use krna pd rha hai 5 element ke liye

const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    console.log("Grandparent is clicked")
},false);

// const parent = document.getElementById('parent');
// parent.addEventListener('click',()=>{
//     console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//     console.log("child is clicked");
// });




