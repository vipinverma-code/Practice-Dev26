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

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log("Grandparent is clicked")
// },true);

// const parent = document.getElementById('parent');
// parent.addEventListener('click',(e)=>{
//     console.log("Parent is clicked");
// },false)

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     console.log("child is clicked");
// },true);



const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    console.log("Grandparent is clicked")
    console.log(e);
    console.log(e.target);
    e.stopPropagation();

},false);

// const parent = document.getElementById('parent');
// parent.addEventListener('click',(e)=>{
//     console.log("Parent is clicked");
//     console.log(e);
    
//     e.stopPropagation();
// },false)

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     console.log("child is clicked");
//     console.log(e);
//     e.stopPropagation();
// },false);


