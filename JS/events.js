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
const element=document.getElementById("first");
element.addEventListener('click',()=>{
    element.textContent="Becoming developer soon";
});
console.log(element);

element.addEventListener('click',()=>{
    element.style.backgroundColor="pink";
});

let a ={
    greet:function(value){
        console.log("Hello", value);
    }
}
a.greet(10);
a.greet(20);

