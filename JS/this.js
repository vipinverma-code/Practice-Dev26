// this , call ,apply , bind method
// this: class and Object method inside 

// strict mode vs non strict mode

// In non-strict mode 


// var a = 10;
// b=20;
// console.log(a,b);

// function greet(name,name){
//     console.log(name,name);
// }
// greet();


// In strict Mode 

// "use strict"

// var a = 10;
// var b=20;
// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }
// greet("Rohit","Virat");

// Here this window is a global object for the browser
// console.log(window);
// Here this global is a global object for node.js environment.
// console.log(global);
// console.log(globalThis);

// console.log(this);

// here this == user object
// const user = {
//     name: "Vipin Verma",
//     age:22,
//     greet: function(){
//         console.log(this);
//         console.log(`hi ${this.name}`);
//     }
// }
// user.greet();

// const user2 = {
//     name:"aman"
// }

// user2.greet = user.greet;
// user2.greet();

// do not hardcode the value 


// function greet(){
//     console.log(`hi ${this.name}`);
// }
// greet();

// function incrementAge(user,value){
//     this.age+=value;
//     this.name=this.name;
//     console.log(this.age);
//     console.log(this.name);
// }

// const user ={
//     name: "Vipin",
//     age:22,

// }

// const user2={
//     name:"Mohit",
//     age:10
// }

// greet.call(user);
// greet.call(user2);

// incrementAge.call(user,5,"Ayush");
// incrementAge.call(user2,10,"Swastik");



// Use of apply () method , it is similar to the call () method which calls a function immediately and allows to set te value of this , but it takesb the function arguments as an array.

// incrementAge.apply(user,[25,"Shobhit"]);


// function greet(){
//     console.log(`hi ${this.name}`);
// }

// function incrementAge(value,name){
//     this.age+=value;
//     this.name=name;
//     console.log(this.age);
//     console.log(this.name);
// }
// const user = {
//     name:"Rohit",
//     age:30,
// }

// const user2={
//     name:"Mohit",
//     age:10,
// }

// greet.call(user);
// greet.call(user2);

// maine call ki help se function ko reusable bna diya baar baar function create krna nhi pd rha hai , jisse memeory save ho rhi hai.

// incrementAge.call(user,10,"Mohan");

// now use of apply keyword
// incrementAge.apply(user2,[8,"Shubham"]);


// const incr=incrementAge.bind(user,10,"Shyam");
// incr();



// class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// const p1 = new Person("Vipin", 22);
// console.log(p1);


// Arrow Function: this doesn't exist for arrow function.
// "use strict"
// const greet1 = ()=>{
//     console.log(this);
// }
// greet1();

// 'use strict'

// const user = {
//     name: "Rohit",
//     greet: function (){
//         const that = this;
//         function meet(){
//             console.log(that);

//         }
//         meet();
//     }
// }

// user.greet();


// "use strict"

// const stopWatch = {
//     second:0,
//     start: function(){
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);
//         },1000);
//     }
// };

// stopWatch.start();



// const user = {
//     name: "Vipin Verma",
//     greet: ()=>{
//         console.log(this);
//     }
// }

// user.greet();

// we know this keyword doesn't exist for the arrow function , so it searches outside that scope , lexical environment , this return an empty object  window object in browser.


// now let's see how this keyword work with the dom 

// const button= document.getElementById("first");
// // button.addEventListener('click',function(){
// //     console.log(this);
// // });

// button.addEventListener('click',()=>{
//     console.log(this);
// })


// this keyword: Global Scope in Node Js : {} object
// Windows: window object
// function : this keyword , if someone invoked the method or function , this will point
// Normal function : when no one is invoking it,
// Non strict : Global object for node and browser
// Strict mode : undefined in node js 
// arrow function: I takes this from its lexical environment
function greet(){
    console.log(this);
}
greet();




