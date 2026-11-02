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

"use strict"

var a = 10;
var b=20;
console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }
// greet("Rohit","Virat");

// Here this window is a global object for the browser
// console.log(window);
// Here this global is a global object for node.js environment.
// console.log(global);
// console.log(globalThis);

console.log(this);